export default class DetectRegex {
    patterns; // regex patterns
    modifiers; // regex flags in string form
    matches; // matches found

    constructor(patterns, modifiers) {
        this.name = "DetectRegex";  
        this.patterns = patterns;
        this.modifiers = modifiers;
        this.matches = null;
    }

    detect(text) {
        this.matches = {};
        Object.entries(this.patterns).forEach(([name, pattern]) => {
          let rex = new RegExp(pattern, this.modifiers)
          this.matches[name] = this._findOccurrences(rex, text);
        });
        return this.matches;
    }

    print() {
      Object.entries(this.matches).forEach(([name, matches]) => {
        matches.forEach(result =>
          console.log(
            `Found ${name}: ${result.match[0]} at ${result.lineNumber}:${result.column}`
          )
        );
      });
    }

    // credit EliSherer
    // https://stackoverflow.com/questions/6946466/line-number-of-the-matched-characters-in-js-node-js
    _lineNumberByIndex(index, string) {
      const re = /^[\S\s]/gm;
      let line = 0,
        match;
      let lastRowIndex = 0;
      while ((match = re.exec(string))) {
        if (match.index > index) break;
        lastRowIndex = match.index;
        line++;
      }
      return [Math.max(line - 1, 0), lastRowIndex];
    }

    _findOccurrences = (needle, haystack) => {
      let match;
      const result = [];
      while ((match = needle.exec(haystack))) {
        const pos = this._lineNumberByIndex(needle.lastIndex, haystack);
        result.push({
          match: { ...match, input: null },
          lineNumber: pos[0],
          column: needle.lastIndex - pos[1] - match[0].length
        });
      }
      return result;
    };
}
