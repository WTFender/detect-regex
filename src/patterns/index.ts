import group1 from './group1';
import group2 from './group2';

export interface Pattern {
  id: string;
  name: string;
  pattern: RegExp;
  category?: 'generic' | 'cloud' | 'app';
  description?: string;
  confidence?: 'high' | 'low';
  group?: string;
  ref?: string;
}

export default [
  {
    id: 'TEST',
    name: 'Test Pattern',
    description: 'Test Pattern',
    category: 'generic',
    pattern: /97029097\d+696359494/,
  },
  ...group1,
  ...group2,
] as Pattern[];

