import Detector from '../index';
import defaultPatterns from '../patterns';
import sampleSecrets from './secrets'

describe("Detector", () => {
  let detector: Detector;

  test("Instantiate detector", () => {
    detector = new Detector();
    expect(detector.name).toBe("RegexDetector");
  });

  test("Return default patterns by ID", () => {
    defaultPatterns.forEach((p) => {
      const name = detector.getPatternById(p.id)!.name;
      expect(name).toBe(p.name);
    });
  });

  test("Test pattern examples individually", () => {
    defaultPatterns.forEach((p) => {
      if (p.examples !== undefined) {
        // combine examples into multilinestring
        const examples = p.examples.map((ex) => sampleSecrets[ex]).join('\n');
        const results = detector.detect(examples, [p])
        expect(results.matches.length).toBe(1);
        expect(results.matches[0].column).toBe(0);
        expect(results.matches[0].line).toBe(0);
      }
    });
  });

  test("Test combined patterns on secrets", () => {
    const results = detector.detect(JSON.stringify(sampleSecrets), defaultPatterns);
    expect(results.matches.length).toBeGreaterThanOrEqual(1);
    console.log(
      results.matches.map((m) => `${detector.getPatternById(m.id)?.group?.id} : ${m.id} : ${m.line} : ${m.column} : ${m.match}`)
    )
    console.log(detector.genPatternStats())
  });

});