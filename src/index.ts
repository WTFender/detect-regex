import defaultPatterns, { type Pattern } from "./patterns/index.js";

export interface PatternMatch {
  id: Pattern["id"]
  match: string | string[];
  line: number;
  column: number;
  replaced: boolean;
}

export default class Detector {
  debug: boolean;
  name: string;
  modifiers: string; // regex flags in string form
  patterns: Pattern[]; // regex patterns
  matches: PatternMatch[]; // matches found

  constructor(patterns: Pattern[] = defaultPatterns) {
    this.debug = true;
    this.name = "RegexDetector";
    this.modifiers = 'g';
    this.patterns = patterns;
    this.matches = [];
    this.log(`Initialized ${this.name} with ${this.patterns.length} patterns`);
  }

  log(v: string) {
    if (this.debug) { console.log(v) }
  }

  detect(text: string) {
    this.matches = []; // reset
    this.patterns.forEach((p) => {
      this.matches = this.matches.concat(
        this._findOccurrences(
          p.id,
          new RegExp(p.pattern, this.modifiers),
          text
        )
      )
    });
    this.log(`Found ${this.matches.length} matches`);
    return this.matches;
  }

  getPatternNameById(patternId: Pattern["id"]): Pattern["id"] | null {
    const pattern = this.patterns.find((p) => p.id === patternId);
    return pattern !== undefined ? pattern.name : null;
  }

  print() {
    this.matches.forEach((m) => {
      console.log(
        `Found ${this.getPatternNameById(m.id)}: ${m.match[0]} at ${m.line}:${m.column}`
      )
    });
  }

  _lineNumberByIndex(index: number, string: string) {
    // credit EliSherer
    // https://stackoverflow.com/questions/6946466/line-number-of-the-matched-characters-in-js-node-js
    const re = /^[\S\s]/gm;
    let line = 0,
      match: RegExpExecArray | null;
    let lastRowIndex = 0;
    while ((match = re.exec(string))) {
      if (match.index > index) break;
      lastRowIndex = match.index;
      line++;
    }
    return [Math.max(line - 1, 0), lastRowIndex];
  }

  _findOccurrences = (patternId: string, needle: RegExp, haystack: string) => {
    let match;
    const result: PatternMatch[] = [];
    while ((match = needle.exec(haystack))) {
      const pos = this._lineNumberByIndex(needle.lastIndex, haystack);
      this.log(`Found match: ${match}, ${pos[0]}`);
      if (pos[0] === 0 && pos[1] === 0) {
        result.push({
          id: patternId,
          match: match,
          line: pos[0],
          column: needle.lastIndex - pos[1] - match[0].length,
          replaced: false,
        });
      } else {
        // TODO handle
        this.log(`Skipping match: ${match}`);
      }
    }
    this.log(`Found ${patternId} matches: ${result.length}`);
    return result as PatternMatch[];
  };
}
