import curated from './curated';
import group1 from './secrets_pattern_db';
import group2 from './secret_regex_list';
import group3 from './warp_secret_regex';
import group4 from './yelp_detect_secrets';
import group5 from './gitleaks';

export interface Pattern {
  id: string;
  name: string;
  pattern: RegExp;
  category?: 'generic' | 'cloud' | 'app';
  description?: string;
  confidence?: 'high' | 'low';
  group?: string;
  ref?: string;
  example?: string;
}

export default [
  {
    id: 'TEST',
    name: 'Test Pattern',
    description: 'Test Pattern',
    category: 'generic',
    pattern: /97029097\d+696359494/,
    group: 'Test',
  },
  ...curated,
  ...group1,
  ...group2,
  ...group3,
  ...group4,
  ...group5,
] as Pattern[];

