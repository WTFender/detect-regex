import Detector from '../index';
import defaultPatterns from '../patterns';
import sampleText from './text'

describe("Detector", () => {
  let detector: Detector;

  test("Instantiate detector", () => {
    detector = new Detector();
    expect(detector.name).toBe("RegexDetector");
  });

  test("Return test pattern by ID", () => {
    expect(detector.getPatternById("test")!.name).toBe("Test Pattern");
  });

  test("Return defaults pattern by ID", () => {
    defaultPatterns.forEach((p) => {
      expect(detector.getPatternById(p.id)!.name).toBe(p.name);
    });
  });
  
  let detections = 0;
  let combinedExampleString = '';

  test("Test pattern examples individually", () => {
    defaultPatterns.forEach((p) => {
      if ('example' in p) {
        combinedExampleString += ('\n' + p.example!)
        const results = detector.detect(p.example!, [p])
        expect(results.matches.length).toBe(1);
        expect(results.matches[0].column).toBe(0);
        expect(results.matches[0].line).toBe(0);
        detections += 1;
      }
    });
  });
  
  test("Test combined pattern examples", () => {
    const results = detector.detect(combinedExampleString, defaultPatterns);
    expect(results.matches.length).toBeGreaterThanOrEqual(detections);
    console.log(
      results.matches.map((m) => `${detector.getPatternById(m.id)?.group.id} : ${m.id} : ${m.line} : ${m.column} : ${m.match}`)
    )
  });

  test("Test combined patterns on sample text", () => {
    const results = detector.detect(sampleText, defaultPatterns);
    expect(results.matches.length).toBeGreaterThanOrEqual(1);
    console.log(
      results.matches.map((m) => `${detector.getPatternById(m.id)?.group.id} : ${m.id} : ${m.line} : ${m.column} : ${m.match}`)
    )
  });
});