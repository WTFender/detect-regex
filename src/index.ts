import defaultPatterns, {
  PatternSources,
  type Pattern,
  defaultPatternSources,
} from './patterns/index.js';

/* Pattern match result. */
export interface PatternMatch {
  id: Pattern['id'];
  match: string | string[];
  line: number;
  column: number;
  replaced: boolean;
}

/* Matches of a pattern(s). Include the patterns that were searched for. */
export type DetectionResults = {
  matches: PatternMatch[];
  patterns: Pattern['id'][];
};

/* Summary pattern stats */
export interface PatternStats {
  numPatterns: number;
  numPatternsUntagged: number;
  numPatternsTested: number;
  patternSources: PatternSources;
  patternTags: {
    [key: string]: number;
  };
}

/* Include the matched and searched patterns. */
export interface PatternMatchStats extends PatternStats {
  patternIds: Pattern['id'][];
  matchPatternIds: Pattern['id'][];
}

/**
 * A class that detects regex patterns in text.
 * @class @constructor @public
 * @param print Whether to print the results to the console.
 * @param patterns An array of regex patterns to detect. Defaults to the patterns in `src/patterns/index.ts`.
 * @property {string} modifiers The regex modifiers to use when detecting patterns. Default 'gm'.
 * @property {Pattern[]} patterns The regex patterns to detect. Defaults to the patterns in `src/patterns/index.ts`.
 * @property {DetectionResults} detection The results of the last detection.
 */
export default class Detector {
  print: boolean;
  name: string;
  modifiers: string;
  patterns: Pattern[];
  sources: PatternSources;
  detection: DetectionResults;

  constructor(print: boolean = false) {
    this.print = print;
    this.name = 'RegexDetector';
    this.modifiers = 'gmi';
    this.patterns = defaultPatterns;
    this.sources = defaultPatternSources;
    this.detection = {
      matches: [],
      patterns: [],
    };
  }

  log(v: string) {
    if (this.print) {
      console.log(v);
    }
  }

  /**
   * Finds patterns in the given text using the provided patterns.
   * @param patterns - An array of patterns to search for.
   * @param text - The text to search for patterns in.
   * @returns An object containing the matches and patterns found.
   */
  detect(patterns = this.patterns, text: string): DetectionResults {
    this.detection = { matches: [], patterns: [] };
    this.detection.patterns = patterns.map((p) => p.id) as Pattern['id'][];
    patterns.forEach((p) => {
      this.detection.matches = this.detection.matches.concat(
        this._findOccurrences(p.id, new RegExp(p.pattern, this.modifiers), text)
      );
    });
    this.log(`Found ${this.detection.matches.length} matches`);
    return this.detection;
  }

  /**
   * Returns the pattern object with the given ID.
   * @param patternId The ID of the pattern to retrieve.
   * @returns The pattern object with the given ID.
   * @throws An error if no pattern with the given ID is found.
   */
  getPatternById(patternId: Pattern['id']): Pattern {
    const pattern = this.patterns.find((p) => p.id === patternId);
    if (pattern === undefined) {
      throw new Error(`Pattern not found: ${patternId}`);
    }
    return pattern;
  }

  /**
   * Generates detection statistics for the given or most recent detection.
   * @param detection The detection results to generate statistics for.
   * @returns An object containing the pattern statistics and the sorted pattern IDs.
   */
  genDetectionStats(
    detection: DetectionResults = this.detection
  ): PatternMatchStats {
    const matchPatterns = detection.matches.map((m) =>
      this.getPatternById(m.id)
    );
    return {
      ...this.genPatternStats(matchPatterns),
      patternIds: matchPatterns.map((p) => p?.id).sort(),
      matchPatternIds: detection.matches.map((m) => m.id).sort(),
    };
  }

  genPatternStats(patterns = this.patterns): PatternStats {
    return {
      patternTags: this._patternsUniqueTagCount(patterns),
      numPatternsTested: patterns.filter(
        (p) => p.examples !== undefined && p.examples.length > 0
      ).length,
      patternSources: this.sources,
      numPatterns: patterns.length,
      numPatternsUntagged: patterns.filter(
        (p) => p.tags === undefined || p.tags.length === 0
      ).length,
    };
  }

  /*
  _patternsUniqueGroupCount(patterns: Pattern[]) {
    const patternGroups = patterns
      .filter((p) => p.group !== undefined)
      .map((p) => p.group!.id);
    const uniquePatternGroups: { [key: string]: number } = {};
    [...new Set(patternGroups)].forEach((grp) => {
      if (grp !== undefined) {
        uniquePatternGroups[grp] = patternGroups.filter(
          (g) => g === grp
        ).length;
      }
    });
    return uniquePatternGroups;
  }
  */
  _patternsUniqueTagCount(patterns: Pattern[]) {
    const patternTags = patterns
      .filter((p) => p.tags !== undefined && p.tags.length > 0)
      .map((p) => p.tags)
      .flat();
    const uniquePatternTags: { [key: string]: number } = {};
    [...new Set(patternTags)].forEach((tag) => {
      if (tag !== undefined) {
        uniquePatternTags[tag] = patternTags.filter((t) => t === tag).length;
      }
    });
    return uniquePatternTags;
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
    if (result.length) {
      this.log(`Found ${patternId} matches: ${result.length}`);
    }
    return result as PatternMatch[];
  };
}
