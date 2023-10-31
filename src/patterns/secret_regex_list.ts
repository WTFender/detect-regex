import { Pattern } from './index.js';

const patterns: Partial<Pattern>[] = [
  {
    id: 'CLOUDINARY_API_KEY',
    name: 'Cloudinary',
    pattern: /cloudinary:\/\/.*/,
    tags: ['app', 'cloudinary'],
  },
  /*
  disabled `{8}` is not right
  {
    id: 'SlACK_WEBHOOK_URL',
    name: "Slack Webhook URL",
    pattern: /https:\/\/hooks\.slack\.com\/services\/T[a-zA-Z0-9_]{8}\/B[a-zA-Z0-9_]{8}\/[a-zA-Z0-9_]{24}/,
    category: 'app',
    // examples: ['SLACK_WEBHOOK_URL']
  },
  */
  {
    id: 'PASSWORD_URL',
    name: 'Password in URL',
    pattern:
      /[a-zA-Z]{3,10}:\/\/[^/\\s:@]{3,20}:[^/\\s:@]{3,20}@.{1,100}["'\\s]/,
  },
  {
    id: 'FIREBASE_URL',
    name: 'Firebase URL',
    pattern: /.*firebaseio\.com/,
  },
  {
    id: 'SLACK_TOKEN',
    name: 'Slack Token',
    pattern: /(xox[p|b|o|a]-[0-9]{12}-[0-9]{12}-[0-9]{12}-[a-z0-9]{32})/,
  },
  {
    id: 'PRIVATE_KEY_RSA',
    name: 'RSA private key',
    pattern: /-----BEGIN RSA PRIVATE KEY-----/,
  },
  {
    id: 'PRIVATE_KEY_SSH_DSA',
    name: 'SSH (DSA) private key',
    pattern: /-----BEGIN DSA PRIVATE KEY-----/,
  },
  {
    id: 'PRIVATE_KEY_SSH_EC',
    name: 'SSH (EC) private key',
    pattern: /-----BEGIN EC PRIVATE KEY-----/,
  },
  {
    id: 'PRIVATE_KEY_PGP',
    name: 'PGP private key block',
    pattern: /-----BEGIN PGP PRIVATE KEY BLOCK-----/,
  },
  {
    id: 'AWS_ACCESS_KEY_ID',
    name: 'Amazon AWS Access Key ID',
    pattern: /AKIA[0-9A-Z]{16}/,
  },
  {
    id: 'AMAZON_MWS_TOKEN',
    name: 'Amazon MWS Auth Token',
    pattern:
      /amzn\\.mws\\.[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/,
  },
  {
    id: 'AWS_API_KEY',
    name: 'AWS API Key',
    pattern: /AKIA[0-9A-Z]{16}/,
  },
  {
    id: 'FACEBOOK_TOKEN',
    name: 'Facebook Access Token',
    pattern: /EAACEdEose0cBA[0-9A-Za-z]+/,
  },
  {
    id: 'FACEBOOK_TOKEN_OAUTH',
    name: 'Facebook OAuth',
    pattern: /[f|F][a|A][c|C][e|E][b|B][o|O][o|O][k|K].*['|"][0-9a-f]{32}['|"]/,
  },
  {
    id: 'GITHUB',
    name: 'GitHub',
    pattern: /[g|G][i|I][t|T][h|H][u|U][b|B].*['|"][0-9a-zA-Z]{35,40}['|"]/,
  },
  {
    id: 'GENERAL_API_KEY',
    name: 'Generic API Key',
    pattern: /[a|A][p|P][i|I][_]?[k|K][e|E][y|Y].*['|"][0-9a-zA-Z]{32,45}['|"]/,
  },
  {
    id: 'GENERAL_SECRET',
    name: 'Generic Secret',
    pattern: /[s|S][e|E][c|C][r|R][e|E][t|T].*['|"][0-9a-zA-Z]{32,45}['|"]/,
  },
  {
    id: 'GCP_API_KEY',
    name: 'Google API Key',
    pattern: /AIza[0-9A-Za-z\\-_]{35}/,
  },
  {
    id: 'GCP_OAUTH',
    name: 'Google OAuth',
    pattern: /[0-9]+-[0-9A-Za-z_]{32}\\.apps\\.googleusercontent\\.com/,
  },

  {
    id: 'GCP_OAUTH_2',
    name: 'Google OAuth 2',
    pattern: /ya29\\.[0-9A-Za-z\\-_]+/,
  },
  {
    id: 'HEROKU_API_KEY',
    name: 'Heroku API Key',
    pattern:
      /[h|H][e|E][r|R][o|O][k|K][u|U].*[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}/,
  },
  {
    id: 'MAILCHIMP_API_KEY',
    name: 'MailChimp API Key',
    pattern: /[0-9a-f]{32}-us[0-9]{1,2}/,
  },
  {
    id: 'MAILGUN_API_KEY',
    name: 'Mailgun API Key',
    pattern: /key-[0-9a-zA-Z]{32}/,
  },
  {
    id: 'PAYPAL_BRAINTREE_TOKEN',
    name: 'PayPal Braintree Access Token',
    pattern: /access_token\\$production\\$[0-9a-z]{16}\\$[0-9a-f]{32}/,
  },
  {
    id: 'PICATIC_API_KEY',
    name: 'Picatic API Key',
    pattern: /sk_live_[0-9a-z]{32}/,
  },
  {
    id: 'STRIPE_API_KEY',
    name: 'Stripe API Key',
    pattern: /sk_live_[0-9a-zA-Z]{24}/,
    examples: ['STRIPE_SECRET_KEY'],
  },
  {
    id: 'STRIPE_RESTRICTED_API_KEY',
    name: 'Stripe Restricted API Key',
    pattern: /rk_live_[0-9a-zA-Z]{24}/,
    examples: ['STRIPE_RESTRICTED_KEY'],
  },
  {
    id: 'SQUARE_ACCESS_TOKEN',
    name: 'Square Access Token',
    pattern: /sq0atp-[0-9A-Za-z\\-_]{22}/,
  },
  {
    id: 'SQUARE_OAUTH_SECRET',
    name: 'Square OAuth Secret',
    pattern: /sq0csp-[0-9A-Za-z\\-_]{43}/,
  },
  {
    id: 'TWILIO_API_KEY',
    name: 'Twilio API Key',
    pattern: /SK[0-9a-fA-F]{32}/,
  },
  {
    id: 'TWITTER_ACCESS_TOKEN',
    name: 'Twitter Access Token',
    pattern: /[t|T][w|W][i|I][t|T][t|T][e|E][r|R].*[1-9][0-9]+-[0-9a-zA-Z]{40}/,
  },

  {
    id: 'TWITTER_OAUTH',
    name: 'Twitter OAuth',
    pattern:
      /[t|T][w|W][i|I][t|T][t|T][e|E][r|R].*['|"][0-9a-zA-Z]{35,44}['|"]/,
  },
];

export default patterns;
