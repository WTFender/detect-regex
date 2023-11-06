import Detector, { PatternMatchStats, DetectionResults } from '../index';
import defaultPatterns, { Pattern } from '../patterns';
import sampleSecrets from './secrets';
import safe from 'safe-regex';

const errs: Pattern[] = [];

/**
 * Handles errors thrown during individual pattern checks.
 * @param checkName - The name of the check being performed.
 * @throws An error with details of the failed pattern(s).
 */
function handleErrs(checkName: string) {
  if (errs.length === 1) {
    console.log(errs[0]);
    throw new Error(`Pattern ${errs[0].id} failed ${checkName}`);
  } else if (errs.length > 1) {
    console.log(errs.map((p) => p.id));
    throw new Error(`${errs.length} patterns failed ${checkName}`);
  }
}

describe('Detector', () => {
  let detector: Detector;
  test('Instantiate detector', () => {
    detector = new Detector();
    expect(detector.name).toBe('RegexDetector');
  });

  let patternStats;
  test('Load default patterns', () => {
    patternStats = detector.genPatternStats();
    expect(patternStats.numPatterns).toBe(defaultPatterns.length);
  });

  test('Return patterns by ID', () => {
    defaultPatterns.forEach((p) => {
      const name = detector.getPatternById(p.id)!.name;
      expect(name).toBe(p.name);
    });
  });

  test('Check patterns for DoS', () => {
    defaultPatterns.forEach((p) => {
      try {
        const isSafe = safe(p.pattern);
        expect(isSafe).toBe(true);
      } catch (e) {
        errs.push(p);
      }
    });
    handleErrs('DoS check');
  });

  test('Detect individual pattern examples', () => {
    defaultPatterns.forEach((p) => {
      if (p.examples !== undefined) {
        // combine examples into multilinestring
        const examples = p.examples.map((ex) => sampleSecrets[ex]).join('\n');

        try {
          // expect pattern match for each example
          expect(p.examples.length).toBe(
            detector.detect([p], examples).matches.length
          );
        } catch (e) {
          errs.push(e);
        }
      }
    });
    handleErrs('example detection');
  });

  let detection: DetectionResults;
  test('Detect all patterns in combined examples', () => {
    detection = detector.detect(defaultPatterns, JSON.stringify(sampleSecrets));
    const patternMatchIds = detection.matches.map((m) => m.id);
    // expect each pattern with an example to have a match
    defaultPatterns
      .filter((p) => p.examples !== undefined && p.examples.length > 0)
      .forEach((p) => {
        try {
          expect(patternMatchIds).toContain(p.id);
        } catch (e) {
          console.log(p);
          throw new Error(
            `Pattern ${p.id} failed to match combined examples text`
          );
        }
      });
  });

  let detectionStats: PatternMatchStats;
  test('Parse detection stats', () => {
    detectionStats = detector.genDetectionStats();
    defaultPatterns
      .filter((p) => p.examples !== undefined && p.examples.length > 0)
      .forEach((p) => {
        if (!detectionStats.matchPatternIds.includes(p.id)) {
          console.log(p);
        }
        try {
          expect(detectionStats.matchPatternIds).toContain(p.id);
        } catch (e) {
          console.log(p);
          throw new Error(
            `Pattern ${p.id} not found in detection stats for combined example text`
          );
        }
      });
  });
});
