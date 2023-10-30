import curated from './curated.js';
import group1 from './secrets_pattern_db.js';
import group2 from './secret_regex_list.js';
import group3 from './warp_secret_regex.js';
import group4 from './yelp_detect_secrets.js';
import group5 from './gitleaks.js';

export interface Pattern {
  id: string;
  name: string;
  pattern: RegExp;
  description?: string;
  confidence?: 'high' | 'low';
  tags?: string[];
  group: {
    id: string;
    name: string;
    ref?: string;
  };
  examples?: string[];
}

const defaultPatterns = [
  ...curated.map(data => ({...data, group: {
    id: 'curated',
    name: 'Curated',
  }})),
  ...group1.map(data => ({...data, group: {
    id: 'spd',
    name: 'mazen160/secrets-patterns-db',
    ref: 'https://github.com/mazen160/secrets-patterns-db/blob/master/db/rules-stable.yml'
  }})),
  ...group2.map(data => ({...data, group: {
    id: 'srl',
    name: 'h33tlit/secret-regex-list',
    ref: 'https://github.com/h33tlit/secret-regex-list',
  }})),
  ...group3.map(data => ({...data, group: {
    id: 'warp',
    name: 'Warp Secret Redaction',
    ref: 'https://docs.warp.dev/features/secret-redaction',
  }})),
  ...group4.map(data => ({...data, group: {
    id: 'yelp',
    name: 'yelp/detect-secrets',
    ref: 'https://github.com/Yelp/detect-secrets/tree/master/detect_secrets/plugins',
  }})),
  ...group5.map(data => ({...data, group: {
    id: 'gl',
    name: 'gitleaks/gitleaks',
    ref: 'https://github.com/gitleaks/gitleaks/blob/master/config/gitleaks.toml',
  }})),
].map((pattern) => ({
  // set group id as pattern id suffix to deconflict
  // normalize pattern ids
  ...pattern,
  id: (pattern.id?.replace(/\s/m, '_') + '_' + pattern.group!.id).toLowerCase(),
})) as Pattern[];

export default [
  {
    id: 'test',
    name: 'Test Pattern',
    description: 'Test Pattern',
    category: 'generic',
    pattern: /97029097\d+696359494/,
    group: {
      id: 'test',
      name: 'Test',
      ref: 'Test',
    },
  },
  ...defaultPatterns,
] as Pattern[];

