import defaultPatterns, { type Pattern } from "./patterns/index.js";

type DetectionResults = {
  matches: PatternMatch[];
  patterns: Pattern["id"][];
} 

export interface PatternMatch {
  id: Pattern["id"]
  match: string | string[];
  line: number;
  column: number;
  replaced: boolean;
}

export default class Detector {
  print: boolean;
  name: string;
  modifiers: string; // regex flags in string form
  patterns: Pattern[]; // regex patterns
  matches: PatternMatch[]; // matches found

  constructor(print=false, patterns: Pattern[] = defaultPatterns) {
    this.print = print;
    this.name = "RegexDetector";
    this.modifiers = 'gm';
    this.patterns = patterns;
    this.matches = [];
  }

  log(v: string) {
    if (this.print) { console.log(v) }
  }

  detect(text: string, patterns = this.patterns): DetectionResults {
    this.matches = []; // reset
    patterns.forEach((p) => {
      this.matches = this.matches.concat(
        this._findOccurrences(
          p.id,
          new RegExp(p.pattern, this.modifiers),
          text
        )
      )
    });
    this.log(`Found ${this.matches.length} matches`);
    return {
      matches: this.matches,
      patterns: this.patterns.map((p) => p.id) as Pattern["id"][],
    }
  }

  getPatternById(patternId: Pattern["id"]): Pattern | null {
    const pattern = this.patterns.find((p) => p.id === patternId);
    return pattern !== undefined ? pattern : null;
  }

  genPatternStats(patterns = this.patterns) {
    // get unique tag counts
    const patternTags = patterns.filter((p) => p.tags !== undefined && p.tags.length > 0).map((p) => p.tags).flat()
    const uniquePatternTags: {[key: string]: number} = {};
    [...new Set(patternTags)].forEach((tag) => {
      if (tag !== undefined){
        uniquePatternTags[tag]= patternTags.filter((t) => t === tag).length;
      }
    });
    // sort tags
    Object.entries(uniquePatternTags)
      .sort(([,a],[,b]) => b-a)
      .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});
    return {
      // get other stats
      numPatterns: patterns.length,
      patternExampleIds: patterns.filter((p) => p.examples !== undefined && p.examples.length > 0).map((p) => p.id),
      patternGroupIds: [...new Set(patterns.filter((p) => p.group !== undefined).map((p) => p.group!.id))],
      patternTags: uniquePatternTags,
    }
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
      if (pos[0] === undefined || pos[1] === undefined) {
        // TODO handle
        this.log(`Skipping match: ${match}`);
      } else {
        result.push({
          id: patternId,
          match: match[0],
          line: pos[0],
          column: needle.lastIndex - pos[1] - match[0].length,
          replaced: false,
        });
      }
    }
    if (result.length) { this.log(`Found ${patternId} matches: ${result.length}`)}
    return result as PatternMatch[];
  };
}
