import Detector from '..';

describe("Detector", () => {

  test("Instantiate detector", () => {

    const detector = new Detector();
    expect(detector.name).toBe("RegexDetector");

    test("Return test patterns", () => {
      expect(detector.patterns[0]!.id).toBe("TEST");
    });
  });

});