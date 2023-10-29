import Detector from '../index';
import defaultPatterns from '../patterns';

describe("Detector", () => {
  let detector: Detector;

  test("Instantiate detector", () => {
    detector = new Detector();
    expect(detector.name).toBe("RegexDetector");
  });

  test("Return default patterns", () => {
    expect(detector.patterns.length).toBe(defaultPatterns.length);
  });

  test.each(defaultPatterns)('Return default patterns by ID',
    (pattern) => {
      expect(detector.getPatternById(pattern.id)!.name).toBe(pattern.name);
    },
  );

  test("Return test pattern by ID", () => { 
    expect(detector.getPatternById("TEST")!.name).toBe("Test Pattern");
  });

});