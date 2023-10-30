import Detector from '../index';
import defaultPatterns from '../patterns';

describe("Detector", () => {
  let detector: Detector;

  test("Instantiate detector", () => {
    detector = new Detector();
    expect(detector.name).toBe("RegexDetector");
  });

  test("Return test pattern by ID", () => {
    expect(detector.getPatternById("TEST")!.name).toBe("Test Pattern");
  });

  test.each(defaultPatterns)('Return patterns by ID',
    (pattern) => {
      expect(detector.getPatternById(pattern.id)!.name).toBe(pattern.name);
    },
  );
  
  let detections = 0;
  let combinedExampleString = '';

  test.each(defaultPatterns)('Test pattern examples individually',
    (pattern) => {
      if ('example' in pattern) {
        combinedExampleString += ('\n' + pattern.example!)
        const matches = detector.detect(pattern.example!, [pattern])
        expect(matches.length).toBe(1);
        expect(matches[0].column).toBe(0);
        expect(matches[0].line).toBe(0);
        detections += 1;
      } else {
        // pass
        expect(true).toBe(true);
      }

    },
  );
  
  test("Test combined pattern examples", () => {
    const matches = detector.detect(combinedExampleString, defaultPatterns);
    expect(matches.length).toBeGreaterThanOrEqual(detections);
  });
});