import { Pattern } from './index.js';

const patterns: Partial<Pattern>[] = [
  {
    id: 'IPV4',
    name: 'IPV4 Address',
    pattern: /\b((25[0-5]|(2[0-4]|1\d|[1-9]|)\d)\.?\b){4}\b/,
    category: 'generic',
  },
  {
    id: 'IPV6',
    name: 'IPV6 Address',
    pattern: /\b((([0-9A-Fa-f]{1,4}:){1,6}:)|(([0-9A-Fa-f]{1,4}:){7}))([0-9A-Fa-f]{1,4})\b/,
    category: 'generic',
  },
  {
    id: 'SLACK_TOKEN',
    name: 'Slack App Token',
    pattern: /\bxapp-[0-9]+-[A-Za-z0-9_]+-[0-9]+-[a-f0-9]+\b/,
    category: 'app',
  },
  {
    id: 'PHONE_NUMBER',
    name: 'Phone Number',
    pattern: /\b(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}\b/,
    category: 'generic',
  },
  {
    id: 'AWS_ACCESS_ID',
    name: 'AWS Access ID',
    pattern: /\b(AKIA|A3T|AGPA|AIDA|AROA|AIPA|ANPA|ANVA|ASIA)[A-Z0-9]{12,}\b/,
    category: 'cloud',
  },
  {
    id: 'MAC_ADDRESS',
    name: 'MAC Address',
    pattern: /\b((([a-zA-z0-9]{2}[-:]){5}([a-zA-z0-9]{2}))|(([a-zA-z0-9]{2}:){5}([a-zA-z0-9]{2})))\b/,
    category: 'generic',
  },
  {
    id: 'GOOGLE_API_KEY',
    name: 'Google API Key',
    pattern: /\bAIza[0-9A-Za-z-_]{35}\b/,
    category: 'generic',
  },
  {
    id: 'GOOGLE_OAUTH_ID',
    name: 'Google OAUTH_ID',
    pattern: /\b[0-9]+-[0-9A-Za-z_]{32}\.apps\.googleusercontent\.com\b/,
    category: 'generic',
  },
  {
    id: 'GITHUB_CLASSIC_PAT',
    name: 'GitHub Classic Personal Access Token',
    pattern: /\bghp_[A-Za-z0-9_]{36}\b/,
    category: 'app',
  },
  {
    id: 'GITHUB_FINE_GRAINED_PAT',
    name: 'GitHub Fine Grained Personal Access Token',
    pattern: /\bgithub_pat_[A-Za-z0-9_]{82}\b/,
    category: 'app',
  },
  {
    id: 'GITHUB_OAUTH_ACCESS_TOKEN',
    name: 'GitHub OAuth Access Token',
    pattern: /\bgho_[A-Za-z0-9_]{36}\b/,
    category: 'app',
  },
  {
    id: 'GITHUB_USER_SERVER_TOKEN',
    name: 'GitHub User to Server Token',
    pattern: /\bghu_[A-Za-z0-9_]{36}\b/,
    category: 'app',
  },
  {
    id: 'GITHUB_SERVER_TOKEN',
    name: 'GitHub Server to Server Token',
    pattern: /\bghs_[A-Za-z0-9_]{36}\b/,
    category: 'app',
  },
  {
    id: 'HEROKU_API_KEY',
    name: 'Heroku API Key',
    pattern: /\b[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}\b/,
    category: 'app',
  },
  {
    id: 'STRIPE_API_KEY',
    name: 'Stripe API Key',
    pattern: /\b(?:r|s)k_(test|live)_[0-9a-zA-Z]{24}\b/,
    category: 'app',
  },
  {
    id: 'FIREBASE_AUTH_DOMAIN',
    name: 'Firebase Auth Domain',
    pattern: /\b([a-z0-9-]){1,30}(\.firebaseapp\.com)\b/,
    category: 'app',
  },
];

export default patterns;