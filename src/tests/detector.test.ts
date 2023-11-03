import Detector, { PatternMatchStats, DetectionResults } from '../index';
import defaultPatterns from '../patterns';
import sampleSecrets from './secrets';

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
    console.log(patternStats);
  });

  test('Return patterns by ID', () => {
    defaultPatterns.forEach((p) => {
      const name = detector.getPatternById(p.id)!.name;
      expect(name).toBe(p.name);
    });
  });

  test('Find individual pattern examples', () => {
    defaultPatterns.forEach((p) => {
      if (p.examples !== undefined) {
        // combine examples into multilinestring
        const examples = p.examples.map((ex) => sampleSecrets[ex]).join('\n');
        // expect pattern match for each example
        expect(p.examples.length).toBe(
          detector.detect([p], examples).matches.length
        );
      }
    });
  });

  let detection: DetectionResults;
  test('Find all patterns in combined examples', () => {
    detection = detector.detect(defaultPatterns, JSON.stringify(sampleSecrets));
    const patternMatchIds = detection.matches.map((m) => m.id);
    // expect each pattern with an example to have a match
    defaultPatterns
      .filter((p) => p.examples !== undefined && p.examples.length > 0)
      .forEach((p) => {
        expect(patternMatchIds).toContain(p.id);
      });
  });

  let detectionStats: PatternMatchStats;
  test('Parse detection stats', () => {
    detectionStats = detector.genDetectionStats();
    defaultPatterns
      .filter((p) => p.examples !== undefined && p.examples.length > 0)
      .forEach((p) => {
        expect(detectionStats.matchPatternIds).toContain(p.id);
      });
  });
});
