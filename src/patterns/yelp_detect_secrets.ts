import { Pattern } from './index.js';

const group = 'yelp_detect_secrets';
const ref = 'https://github.com/Yelp/detect-secrets/tree/master/detect_secrets/plugins'

const patterns: Partial<Pattern>[] = [
  {
    id: 'AWS_ACCESS_KEY_ID',
    name: 'AWS Access Key ID',
    pattern: /AKIA[0-9A-Z]{16}/,
    category: 'cloud',
  },
  {
    id: 'AWS_CONFIG_KEY',
    name: 'AWS Config Key',
    pattern: /aws.{{0,20}}?{(?:key|pwd|pw|password|pass|token)}.{{0,20}}?['"]([0-9a-zA-Z/+]{{40}})['"]/,
    category: 'cloud',
  },
  {
    id: 'AZURE_STORAGE_KEY',
    name: 'Azure Storage Key',
    pattern: /AccountKey=[a-zA-Z0-9+/=]{88}/,
    category: 'cloud',
  },
  {
    id: 'BASIC_AUTH',
    name: 'Basic Auth',
    pattern: /:\/\/[^{}\s]+:([^{}\s]+)@/,
    category: 'generic',
  },
  {
    id: 'DISCORD_TOKEN',
    name: 'Discord Bot Token',
    pattern: /[MNO][a-zA-Z\d_-]{23,25}\.[a-zA-Z\d_-]{6}\.[a-zA-Z\d_-]{27}/,
    category: 'app',
  },
  {
    id: 'GITHUB_TOKEN',
    name: 'GitHub Token',
    pattern: /(ghp|gho|ghu|ghs|ghr)_[A-Za-z0-9_]{36}/,
    category: 'app',
  },
  {
    id: 'JWT',
    name: 'JSON Web Token',
    pattern: /eyJ[A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.?[A-Za-z0-9-_.+/=]*?/,
    category: 'generic',
  },
  {
    id: 'MAILCHIMP_API_KEY',
    name: 'Mailchimp API Key',
    pattern: /[0-9a-z]{32}-us[0-9]{1,2}/,
    category: 'app',
  },
  {
    id: 'NPM_TOKEN',
    name: 'NPM Access Token',
    pattern: /\/\/.+\/:_authToken=\s*((npm_.+)|([A-Fa-f0-9-]{36})).*/,
    category: 'app',
  },
  {
    id: 'PRIVATE_KEY',
    name: 'Private Key',
    pattern: /(PuTTY-User-Key-File-\d)|(BEGIN (DSA|EC|OPENSSH|PGP|RSA|SSH2 ENCRYPTED)? ?PRIVATE KEY( BLOCK)?)/,
    category: 'generic',
  },
  {
    id: 'SENDGRID_API_KEY',
    name: 'SendGrid API Key',
    pattern: /SG\.[a-zA-Z0-9_-]{22}\.[a-zA-Z0-9_-]{43}/,
    category: 'app',
  },
  {
    id: 'SLACK_TOKEN',
    name: 'Slack Token',
    pattern: /xox(?:a|b|p|o|s|r)-(?:\d+-)+[a-z0-9]+/,
    category: 'app',
  },
  {
    id: 'SLACK_WEBHOOK',
    name: 'Slack Webhook URL',
    pattern: /https:\/\/hooks\.slack\.com\/services\/T[a-zA-Z0-9_]+\/B[a-zA-Z0-9_]+\/[a-zA-Z0-9_]+/,
    category: 'app',
  },
  {
    id: 'SQUARE_OAUTH_SECRET',
    name: 'Square OAuth Secret',
    pattern: /sq0csp-[0-9A-Za-z\\\-_]{43}/,
    category: 'app',
  },
  {
    id: 'STRIPE_API_KEY',
    name: 'Stripe API Key',
    pattern: /(?:r|s)k_live_[0-9a-zA-Z]{24}/,
    category: 'app',
  },
  {
    id: 'TWILIO_SID',
    name: 'Twilio Account SID',
    pattern: /AC[a-z0-9]{32}/,
    category: 'app',
  },
  {
    id: 'TWILIO_TOKEN',
    name: 'Twilio Auth Token',
    pattern: /SK[a-z0-9]{32}/,
    category: 'app',
  },
];

patterns.forEach((pattern) => { 
  pattern.id += '_yelp';
  pattern.group = group;
  pattern.ref = ref;
});

export default patterns;