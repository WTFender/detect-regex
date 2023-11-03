import curated from './curated.js';
import source1 from './secrets_pattern_db.js';
import source2 from './secret_regex_list.js';
import source3 from './warp_secret_regex.js';
import source4 from './yelp_detect_secrets.js';
import source5 from './gitleaks.js';

export interface PatternSources {
  [key: string]: {
    name: string;
    count: number;
    ref?: string;
  };
}

export interface Pattern {
  id: string;
  name: string;
  pattern: RegExp;
  description?: string;
  confidence?: 'curated' | 'high' | 'low';
  tags?: string[];
  source: keyof PatternSources;
  examples?: string[];
}

// set source info for pattern sources
const defaultPatterns = [
  {
    id: 'test',
    name: 'Test Pattern',
    description: 'Test Pattern',
    category: 'generic',
    pattern: /97029097\d+696359494/,
    source: 'test',
  },
  ...curated.map((p) => ({ ...p, source: 'curated' })),
  ...source1.map((p) => ({ ...p, source: 'spd' })),
  ...source2.map((p) => ({ ...p, source: 'srl' })),
  ...source3.map((p) => ({ ...p, source: 'warp' })),
  ...source4.map((p) => ({ ...p, source: 'yelp' })),
  ...source5.map((p) => ({ ...p, source: 'gl' })),
].map((pattern) => ({
  // set source id as pattern prefix to deconflict
  ...pattern,
  id: (pattern.source + '_' + pattern.id?.replaceAll(' ', '_')).toLowerCase(),
})) as Pattern[];

export const defaultPatternSources: PatternSources = {
  test: {
    name: 'Test',
    ref: 'test',
    count: defaultPatterns.filter((p) => p.source === 'test').length,
  },
  curated: {
    name: 'Curated',
    ref: 'Curated by WTFender/detect-regex',
    count: defaultPatterns.filter((p) => p.source === 'curated').length,
  },
  spd: {
    name: 'mazen160/secrets-patterns-db',
    ref: 'https://github.com/mazen160/secrets-patterns-db/blob/master/db/rules-stable.yml',
    count: defaultPatterns.filter((p) => p.source === 'spd').length,
  },
  srl: {
    name: 'h33tlit/secret-regex-list',
    ref: 'https://github.com/h33tlit/secret-regex-list',
    count: defaultPatterns.filter((p) => p.source === 'srl').length,
  },
  warp: {
    name: 'warp.dev',
    ref: 'https://docs.warp.dev/features/secret-redaction',
    count: defaultPatterns.filter((p) => p.source === 'warp').length,
  },
  yelp: {
    name: 'yelp/detect-secrets',
    ref: 'https://github.com/Yelp/detect-secrets/tree/master/detect_secrets/plugins',
    count: defaultPatterns.filter((p) => p.source === 'yelp').length,
  },
  gl: {
    name: 'gitleaks/gitleaks',
    ref: 'https://github.com/gitleaks/gitleaks/blob/master/config/gitleaks.toml',
    count: defaultPatterns.filter((p) => p.source === 'gl').length,
  },
};

export default defaultPatterns;
