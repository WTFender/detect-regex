import { Pattern } from './index.js';

const patterns: Partial<Pattern>[] = [
  {
    id: 'adobe-client-secret',
    name: 'Adobe Client Secret',
    pattern: /\b((p8e-)[a-z0-9]{32})(?:['|"|\n|\r|\s|\x60|;]|$)/,
  },
  {
    id: 'age secret key',
    name: 'Age secret key',
    pattern: /AGE-SECRET-KEY-1[QPZRY9X8GF2TVDW0S3JN54KHCE6MUA7L]{58}/,
  },
  {
    id: 'alibaba-access-key-id',
    name: 'Alibaba AccessKey ID',
    pattern: /\b((LTAI)[a-z0-9]{20})(?:['|"|\n|\r|\s|\x60|;]|$)/,
  },
  {
    id: 'authress-service-client-access-key',
    name: 'Authress Service Client Access Key',
    pattern:
      /\b((?:sc|ext|scauth|authress)_[a-z0-9]{5,30}\.[a-z0-9]{4,6}\.acc[_-][a-z0-9-]{10,32}\.[a-z0-9+/_=-]{30,120})(?:['|"|\n|\r|\s|\x60|;]|$)/,
  },
  {
    id: 'aws-access-token',
    name: 'AWS',
    pattern:
      /(A3T[A-Z0-9]|AKIA|AGPA|AIDA|AROA|AIPA|ANPA|ANVA|ASIA)[A-Z0-9]{16}/,
  },
  {
    id: 'clojars-api-token',
    name: 'Clojars API token',
    pattern: /(CLOJARS_)[a-z0-9]{60}/,
  },
  {
    id: 'databricks-api-token',
    name: 'Databricks API token',
    pattern: /\b(dapi[a-h0-9]{32})(?:['|"|\n|\r|\s|\x60|;]|$)/,
  },
  {
    id: 'digitalocean-access-token',
    name: 'DigitalOcean OAuth Access Token',
    pattern: /\b(doo_v1_[a-f0-9]{64})(?:['|"|\n|\r|\s|\x60|;]|$)/,
  },
  {
    id: 'digitalocean-pat',
    name: 'DigitalOcean Personal Access Token',
    pattern: /\b(dop_v1_[a-f0-9]{64})(?:['|"|\n|\r|\s|\x60|;]|$)/,
  },
  {
    id: 'digitalocean-refresh-token',
    name: 'DigitalOcean OAuth Refresh Token',
    pattern: /\b(dor_v1_[a-f0-9]{64})(?:['|"|\n|\r|\s|\x60|;]|$)/,
  },
  {
    id: 'doppler-api-token',
    name: 'Doppler API token',
    pattern: /(dp\.pt\.)[a-z0-9]{43}/,
  },
  {
    id: 'duffel-api-token',
    name: 'Duffel API token',
    pattern: /duffel_(test|live)_[a-z0-9_\-=]{43}/,
  },
  {
    id: 'dynatrace-api-token',
    name: 'Dynatrace API token',
    pattern: /dt0c01\.[a-z0-9]{24}\.[a-z0-9]{64}/,
  },
  {
    id: 'easypost-api-token',
    name: 'EasyPost API token',
    pattern: /\bEZAK[a-z0-9]{54}/,
  },
  {
    id: 'easypost-test-api-token',
    name: 'EasyPost test API token',
    pattern: /\bEZTK[a-z0-9]{54}/,
  },
  {
    id: 'flutterwave-encryption-key',
    name: 'Flutterwave Encryption Key',
    pattern: /FLWSECK_TEST-[a-h0-9]{12}/,
  },
  {
    id: 'flutterwave-public-key',
    name: 'Finicity Public Key',
    pattern: /FLWPUBK_TEST-[a-h0-9]{32}-X/,
  },
  {
    id: 'flutterwave-secret-key',
    name: 'Flutterwave Secret Key',
    pattern: /FLWSECK_TEST-[a-h0-9]{32}-X/,
  },
  {
    id: 'frameio-api-token',
    name: 'Frame.io API token',
    pattern: /fio-u-[a-z0-9\-_=]{64}/,
  },

  {
    id: 'gcp-api-key',
    name: 'GCP API key',
    pattern: /\b(AIza[0-9A-Za-z\\-_]{35})(?:['|"|\n|\r|\s|\x60|;]|$)/,
  },

  {
    id: 'github-app-token',
    name: 'GitHub App Token',
    pattern: /(ghu|ghs)_[0-9a-zA-Z]{36}/,
  },
  {
    id: 'github-fine-grained-pat',
    name: 'GitHub Fine-Grained Personal Access Token',
    pattern: /github_pat_[0-9a-zA-Z_]{82}/,
  },
  {
    id: 'github-oauth',
    name: 'GitHub OAuth Access Token',
    pattern: /gho_[0-9a-zA-Z]{36}/,
  },
  {
    id: 'github-pat',
    name: 'GitHub Personal Access Token',
    pattern: /ghp_[0-9a-zA-Z]{36}/,
  },
  {
    id: 'github-refresh-token',
    name: 'GitHub Refresh Token',
    pattern: /ghr_[0-9a-zA-Z]{36}/,
  },
  {
    id: 'gitlab-pat',
    name: 'GitLab Personal Access Token',
    pattern: /glpat-[0-9a-zA-Z\-_]{20}/,
  },
  {
    id: 'gitlab-ptt',
    name: 'GitLab Pipeline Trigger Token',
    pattern: /glptt-[0-9a-f]{40}/,
  },
  {
    id: 'gitlab-rrt',
    name: 'GitLab Runner Registration Token',
    pattern: /GR1348941[0-9a-zA-Z\-_]{20}/,
  },
  {
    id: 'grafana-api-key',
    name: 'Grafana api key (or Grafana cloud api key)',
    pattern: /\b(eyJrIjoi[A-Za-z0-9]{70,400}={0,2})(?:['|"|\n|\r|\s|\x60|;]|$)/,
  },
  {
    id: 'grafana-cloud-api-token',
    name: 'Grafana cloud api token',
    pattern: /\b(glc_[A-Za-z0-9+/]{32,400}={0,2})(?:['|"|\n|\r|\s|\x60|;]|$)/,
  },
  {
    id: 'grafana-service-account-token',
    name: 'Grafana service account token',
    pattern:
      /\b(glsa_[A-Za-z0-9]{32}_[A-Fa-f0-9]{8})(?:['|"|\n|\r|\s|\x60|;]|$)/,
  },
  {
    id: 'hashicorp-tf-api-token',
    name: 'HashiCorp Terraform user/org API token',
    pattern: /[a-z0-9]{14}\.atlasv1\.[a-z0-9\-_=]{60,70}/,
  },
  {
    id: 'huggingface-access-token',
    name: 'Hugging Face Access token',
    pattern: /(?:^|[\\'"` >=:])(hf_[a-zA-Z]{34})(?:$|[\\'"` <])/,
  },
  {
    id: 'huggingface-organization-api-token',
    name: 'Hugging Face Organization API token',
    pattern: /(?:^|[\\'"` >=:(,)])(api_org_[a-zA-Z]{34})(?:$|[\\'"` <),])/,
  },
  {
    id: 'infracost-api-token',
    name: 'Infracost API Token',
    pattern: /\b(ico-[a-zA-Z0-9]{32})(?:['|"|\n|\r|\s|\x60|;]|$)/,
  },
  /* unsafe
  {
    id: 'jwt',
    name: 'JSON Web Token',
    pattern:
      /\b(ey[a-zA-Z0-9]{17,}\.ey[a-zA-Z0-9/\\_-]{17,}\.(?:[a-zA-Z0-9/\\_-]{10,}={0,2})?)(?:['|"|\n|\r|\s|\x60|;]|$)/,
  },
  */
  {
    id: 'jwt-base64',
    name: 'Base64-encoded JSON Web Token',
    pattern:
      /\bZXlK(?:(?<alg>aGJHY2lPaU)|(?<apu>aGNIVWlPaU)|(?<apv>aGNIWWlPaU)|(?<aud>aGRXUWlPaU)|(?<b64>aU5qUWlP)|(?<crit>amNtbDBJanBi)|(?<cty>amRIa2lPaU)|(?<epk>bGNHc2lPbn)|(?<enc>bGJtTWlPaU)|(?<jku>cWEzVWlPaU)|(?<jwk>cWQyc2lPb)|(?<iss>cGMzTWlPaU)|(?<iv>cGRpSTZJ)|(?<kid>cmFXUWlP)|(?<key_ops>clpYbGZiM0J6SWpwY)|(?<kty>cmRIa2lPaUp)|(?<nonce>dWIyNWpaU0k2)|(?<p2c>d01tTWlP)|(?<p2s>d01uTWlPaU)|(?<ppt>d2NIUWlPaU)|(?<sub>emRXSWlPaU)|(?<svt>emRuUWlP)|(?<tag>MFlXY2lPaU)|(?<typ>MGVYQWlPaUp)|(?<url>MWNtd2l)|(?<use>MWMyVWlPaUp)|(?<ver>MlpYSWlPaU)|(?<version>MlpYSnphVzl1SWpv)|(?<x>NElqb2)|(?<x5c>NE5XTWlP)|(?<x5t>NE5YUWlPaU)|(?<x5ts256>NE5YUWpVekkxTmlJNkl)|(?<x5u>NE5YVWlPaU)|(?<zip>NmFYQWlPaU))[a-zA-Z0-9/\\_+\-\r\n]{40,}={0,2}/,
  },
  {
    id: 'linear-api-key',
    name: 'Linear API Token',
    pattern: /lin_api_[a-z0-9]{40}/,
  },
  /* unsafe
  {
    id: 'microsoft-teams-webhook',
    name: 'Microsoft Teams Webhook',
    pattern:
      /https:\/\/[a-z0-9]+\.webhook\.office\.com\/webhookb2\/[a-z0-9]{8}-([a-z0-9]{4}-){3}[a-z0-9]{12}@[a-z0-9]{8}-([a-z0-9]{4}-){3}[a-z0-9]{12}\/IncomingWebhook\/[a-z0-9]{32}\/[a-z0-9]{8}-([a-z0-9]{4}-){3}[a-z0-9]{12}/,
  },
  */
  {
    id: 'npm-access-token',
    name: 'npm access token',
    pattern: /\b(npm_[a-z0-9]{36})(?:['|"|\n|\r|\s|\x60|;]|$)/,
  },
  {
    id: 'openai-api-key',
    name: 'OpenAI API Key',
    pattern:
      /\b(sk-[a-zA-Z0-9]{20}T3BlbkFJ[a-zA-Z0-9]{20})(?:['|"|\n|\r|\s|\x60|;]|$)/,
  },
  {
    id: 'planetscale-api-token',
    name: 'PlanetScale API token',
    pattern: /\b(pscale_tkn_[a-z0-9=\-_.]{32,64})(?:['|"|\n|\r|\s|\x60|;]|$)/,
  },
  {
    id: 'planetscale-oauth-token',
    name: 'PlanetScale OAuth token',
    pattern: /\b(pscale_oauth_[a-z0-9=\-_.]{32,64})(?:['|"|\n|\r|\s|\x60|;]|$)/,
  },
  {
    id: 'planetscale-password',
    name: 'PlanetScale password',
    pattern: /\b(pscale_pw_[a-z0-9=\-_.]{32,64})(?:['|"|\n|\r|\s|\x60|;]|$)/,
  },
  {
    id: 'postman-api-token',
    name: 'Postman API token',
    pattern: /\b(PMAK-[a-f0-9]{24}-[a-f0-9]{34})(?:['|"|\n|\r|\s|\x60|;]|$)/,
  },
  {
    id: 'prefect-api-token',
    name: 'Prefect API token',
    pattern: /\b(pnu_[a-z0-9]{36})(?:['|"|\n|\r|\s|\x60|;]|$)/,
  },
  {
    id: 'private-key',
    name: 'Private Key',
    pattern:
      /-----BEGIN[ A-Z0-9_-]{0,100}PRIVATE KEY( BLOCK)?-----[\s\S-]*KEY( BLOCK)?----/,
  },
  {
    id: 'pulumi-api-token',
    name: 'Pulumi API token',
    pattern: /\b(pul-[a-f0-9]{40})(?:['|"|\n|\r|\s|\x60|;]|$)/,
  },
  {
    id: 'pypi-upload-token',
    name: 'PyPI upload token',
    pattern: /pypi-AgEIcHlwaS5vcmc[A-Za-z0-9\-_]{50,1000}/,
  },
  {
    id: 'readme-api-token',
    name: 'Readme API token',
    pattern: /\b(rdme_[a-z0-9]{70})(?:['|"|\n|\r|\s|\x60|;]|$)/,
  },
  {
    id: 'rubygems-api-token',
    name: 'Rubygem API token',
    pattern: /\b(rubygems_[a-f0-9]{48})(?:['|"|\n|\r|\s|\x60|;]|$)/,
  },
  {
    id: 'scalingo-api-token',
    name: 'Scalingo API token',
    pattern: /\btk-us-[a-zA-Z0-9-_]{48}\b/,
  },
  {
    id: 'sendgrid-api-token',
    name: 'SendGrid API token',
    pattern: /\b(SG\.[a-z0-9=_\-.]{66})(?:['|"|\n|\r|\s|\x60|;]|$)/,
  },
  {
    id: 'sendinblue-api-token',
    name: 'Sendinblue API token',
    pattern: /\b(xkeysib-[a-f0-9]{64}-[a-z0-9]{16})(?:['|"|\n|\r|\s|\x60|;]|$)/,
  },
  {
    id: 'shippo-api-token',
    name: 'Shippo API token',
    pattern: /\b(shippo_(live|test)_[a-f0-9]{40})(?:['|"|\n|\r|\s|\x60|;]|$)/,
  },
  {
    id: 'shopify-access-token',
    name: 'Shopify access token',
    pattern: /shpat_[a-fA-F0-9]{32}/,
  },
  {
    id: 'shopify-custom-access-token',
    name: 'Shopify custom access token',
    pattern: /shpca_[a-fA-F0-9]{32}/,
  },
  {
    id: 'shopify-private-app-access-token',
    name: 'Shopify private app access token',
    pattern: /shppa_[a-fA-F0-9]{32}/,
  },
  {
    id: 'shopify-shared-secret',
    name: 'Shopify shared secret',
    pattern: /shpss_[a-fA-F0-9]{32}/,
  },

  {
    id: 'sidekiq-sensitive-url',
    name: 'Sidekiq Sensitive URL',
    pattern:
      /\b(http(?:s??):\/\/)([a-f0-9]{8}:[a-f0-9]{8})@(?:gems.contribsys.com|enterprise.contribsys.com)(?:[/|#|?|:]|$)/,
  },
  {
    id: 'slack-app-token',
    name: 'Slack App-level token',
    pattern: /(xapp-\d-[A-Z0-9]+-\d+-[a-z0-9]+)/,
  },
  {
    id: 'slack-bot-token',
    name: 'Slack Bot token',
    pattern: /(xoxb-[0-9]{10,13}-[0-9]{10,13}[a-zA-Z0-9-]*)/,
  },
  {
    id: 'slack-config-access-token',
    name: 'Slack Configuration access token',
    pattern: /(xoxe.xox[bp]-\d-[A-Z0-9]{163,166})/,
  },
  {
    id: 'slack-config-refresh-token',
    name: 'Slack Configuration refresh token',
    pattern: /(xoxe-\d-[A-Z0-9]{146})/,
  },
  {
    id: 'slack-legacy-bot-token',
    name: 'Slack Legacy bot token',
    pattern: /(xoxb-[0-9]{8,14}-[a-zA-Z0-9]{18,26})/,
  },
  {
    id: 'slack-legacy-token',
    name: 'Slack Legacy token',
    pattern: /(xox[os]-\d+-\d+-\d+-[a-fA-F\d]+)/,
  },
  {
    id: 'slack-legacy-workspace-token',
    name: 'Slack Legacy Workspace token',
    pattern: /(xox[ar]-(?:\d-)?[0-9a-zA-Z]{8,48})/,
  },
  /* unsafe
  {
    id: 'slack-user-token',
    name: 'Slack User',
    pattern: /(xox[pe](?:-[0-9]{10,13}){3}-[a-zA-Z0-9-]{28,34})/,
  },
  {
    id: 'slack-webhook-url',
    name: 'Slack Webhook',
    pattern:
      /(https?:\/\/)?hooks.slack.com\/(services|workflows)\/[A-Za-z0-9+/]{43,46}/,
    examples: ['SLACK_WEBHOOK_URL'],
  },
  */
  {
    id: 'square-access-token',
    name: 'Square Access Token',
    pattern: /\b(sq0atp-[0-9A-Za-z\-_]{22})(?:['|"|\n|\r|\s|\x60|;]|$)/,
  },
  {
    id: 'stripe-access-token',
    name: 'Stripe Access Token',
    pattern: /\b((sk|pk)_(test|live)_[0-9a-z]{10,99})/,
    examples: ['STRIPE_SECRET_KEY', 'STRIPE_PUBLIC_KEY'],
    confidence: 'high',
  },
  {
    id: 'telegram-bot-api-token',
    name: 'Telegram Bot API Token',
    pattern: /(?:^|[^0-9])([0-9]{5,16}:A[a-zA-Z0-9_-]{34})(?:$|[^a-zA-Z0-9_-])/,
  },
  {
    id: 'twilio-api-key',
    name: 'Twilio API Key',
    pattern: /SK[0-9a-fA-F]{32}/,
  },
  {
    id: 'vault-batch-token',
    name: 'Vault Batch Token',
    pattern: /\b(hvb\.[a-z0-9_-]{138,212})(?:['|"|\n|\r|\s|\x60|;]|$)/,
  },
  {
    id: 'vault-service-token',
    name: 'Vault Service Token',
    pattern: /\b(hvs\.[a-z0-9_-]{90,100})(?:['|"|\n|\r|\s|\x60|;]|$)/,
  },
];

export default patterns;

/* lookbehinds are not supported: (?<= ) or (?<! )
   lookaheads are supported: (?= ) or (?! )

(?<= ) or (?<! )
[
  {
    id: "adafruit-api-key",
    name: "Adafruit API Key",
    pattern: /(?:adafruit)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|"|\s|=|\x60){0,5}([a-z0-9_-]{32})(?:['|"|\n|\r|\s|\x60|;]|$)/,
  },
  {
    id: "adobe-client-id", 
    name: "Adobe Client ID (OAuth Web)",
    pattern: /(?:adobe)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|"|\s|=|\x60){0,5}([a-f0-9]{32})(?:['|"|\n|\r|\s|\x60|;]|$)/,
  },
  {
    id: "airtable-api-key", 
    name: "Airtable API Key",
    pattern: /(?:airtable)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|"|\s|=|\x60){0,5}([a-z0-9]{17})(?:['|"|\n|\r|\s|\x60|;]|$)/,
  },
  {
    id: "algolia-api-key", 
    name: "Algolia API Key",
    pattern: /(?:algolia)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|"|\s|=|\x60){0,5}([a-z0-9]{32})(?:['|"|\n|\r|\s|\x60|;]|$)/,
  },
  {
    id: "alibaba-secret-key", 
    name: "Alibaba Secret Key",
    pattern: /(?:alibaba)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|"|\s|=|\x60){0,5}([a-z0-9]{30})(?:['|"|\n|\r|\s|\x60|;]|$)/,
  },
  {
    id: "asana-client-id", 
    name: "Asana Client ID",
    pattern: /(?:asana)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|"|\s|=|\x60){0,5}([0-9]{16})(?:['|"|\n|\r|\s|\x60|;]|$)/,
  },
  {
    id: "asana-client-secret", 
    name: "Asana Client Secret",
    pattern: /(?:asana)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|"|\s|=|\x60){0,5}([a-z0-9]{32})(?:['|"|\n|\r|\s|\x60|;]|$)/,
  },
  {
    id: "atlassian-api-token", 
    name: "Atlassian API token",
    pattern: /(?:atlassian|confluence|jira)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|"|\s|=|\x60){0,5}([a-z0-9]{24})(?:['|"|\n|\r|\s|\x60|;]|$)/,
  },
  {
    id: "beamer-api-token", 
    name: "Beamer API token",
    pattern: /(?:beamer)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|"|\s|=|\x60){0,5}(b_[a-z0-9=_\-]{44})(?:['|"|\n|\r|\s|\x60|;]|$)/,
  },
  {
    id: "bitbucket-client-id", 
    name: "Bitbucket Client ID",
    pattern: /(?:bitbucket)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|"|\s|=|\x60){0,5}([a-z0-9]{32})(?:['|"|\n|\r|\s|\x60|;]|$)/,
  },
  {
    id: "bitbucket-client-secret", 
    name: "Bitbucket Client Secret",
    pattern: /(?:bitbucket)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|"|\s|=|\x60){0,5}([a-z0-9=_\-]{64})(?:['|"|\n|\r|\s|\x60|;]|$)/,
  },
  {
    id: "bittrex-access-key", 
    name: "Bittrex Access Key",
    pattern: /(?:bittrex)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|"|\s|=|\x60){0,5}([a-z0-9]{32})(?:['|"|\n|\r|\s|\x60|;]|$)/,
  },
  {
    id: "bittrex-secret-key", 
    name: "Bittrex Secret Key",
    pattern: /(?:bittrex)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|"|\s|=|\x60){0,5}([a-z0-9]{32})(?:['|"|\n|\r|\s|\x60|;]|$)/,
  },
  {
    id: "codecov-access-token", 
    name: "Codecov Access Token",
    pattern: /(?:codecov)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|"|\s|=|\x60){0,5}([a-z0-9]{32})(?:['|"|\n|\r|\s|\x60|;]|$)/,
  },
  {
    id: "coinbase-access-token", 
    name: "Coinbase Access Token",
    pattern: /(?:coinbase)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|"|\s|=|\x60){0,5}([a-z0-9_-]{64})(?:['|"|\n|\r|\s|\x60|;]|$)/,
  },
  {
    id: "confluent-access-token", 
    name: "Confluent Access Token",
    pattern: /(?:confluent)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|"|\s|=|\x60){0,5}([a-z0-9]{16})(?:['|"|\n|\r|\s|\x60|;]|$)/,
  },
  {
    id: "confluent-secret-key", 
    name: "Confluent Secret Key",
    pattern: /(?:confluent)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|"|\s|=|\x60){0,5}([a-z0-9]{64})(?:['|"|\n|\r|\s|\x60|;]|$)/,
  },
  {
    id: "contentful-delivery-api-token", 
    name: "Contentful delivery API token",
    pattern: /(?:contentful)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|"|\s|=|\x60){0,5}([a-z0-9=_\-]{43})(?:['|"|\n|\r|\s|\x60|;]|$)/,
  },
  {
    id: "datadog-access-token", 
    name: "Datadog Access Token",
    pattern: /(?:datadog)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|"|\s|=|\x60){0,5}([a-z0-9]{40})(?:['|"|\n|\r|\s|\x60|;]|$)/,
  },
  {
    id: "defined-networking-api-token", 
    name: "Defined Networking API token",
    pattern: /(?:dnkey)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|"|\s|=|\x60){0,5}(dnkey-[a-z0-9=_\-]{26}-[a-z0-9=_\-]{52})(?:['|"|\n|\r|\s|\x60|;]|$)/,
  },
  {
    id: "discord-api-token", 
    name: "Discord API key",
    pattern: /(?:discord)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|"|\s|=|\x60){0,5}([a-f0-9]{64})(?:['|"|\n|\r|\s|\x60|;]|$)/,
  },
  {
    id: "discord-client-id", 
    name: "Discord client ID",
    pattern: /(?:discord)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|"|\s|=|\x60){0,5}([0-9]{18})(?:['|"|\n|\r|\s|\x60|;]|$)/,
  },
  {
    id: "discord-client-secret", 
    name: "Discord client secret",
    pattern: /(?:discord)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|"|\s|=|\x60){0,5}([a-z0-9=_\-]{32})(?:['|"|\n|\r|\s|\x60|;]|$)/,
  },
  {
    id: "droneci-access-token", 
    name: "Droneci Access Token",
    pattern: /(?:droneci)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|"|\s|=|\x60){0,5}([a-z0-9]{32})(?:['|"|\n|\r|\s|\x60|;]|$)/,
  },
  {
    id: "dropbox-api-token", 
    name: "Dropbox API secret",
    pattern: /(?:dropbox)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|"|\s|=|\x60){0,5}([a-z0-9]{15})(?:['|"|\n|\r|\s|\x60|;]|$)/,
  },
  {
    id: "dropbox-long-lived-api-token", 
    name: "Dropbox long lived API token",
    pattern: /(?:dropbox)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|"|\s|=|\x60){0,5}([a-z0-9]{11}(AAAAAAAAAA)[a-z0-9\-_=]{43})(?:['|"|\n|\r|\s|\x60|;]|$)/,
  },
  {
    id: "dropbox-short-lived-api-token", 
    name: "Dropbox short lived API token",
    pattern: /(?:dropbox)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|"|\s|=|\x60){0,5}(sl\.[a-z0-9\-=_]{135})(?:['|"|\n|\r|\s|\x60|;]|$)/,
  },
  {
    id: "etsy-access-token", 
    name: "Etsy Access Token",
    pattern: /(?:etsy)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|"|\s|=|\x60){0,5}([a-z0-9]{24})(?:['|"|\n|\r|\s|\x60|;]|$)/,
  },
  {
    id: "facebook", 
    name: "Facebook Access Token",
    pattern: /(?:facebook)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|"|\s|=|\x60){0,5}([a-f0-9]{32})(?:['|"|\n|\r|\s|\x60|;]|$)/,
  },
  {
    id: "fastly-api-token", 
    name: "Fastly API key",
    pattern: /(?:fastly)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|"|\s|=|\x60){0,5}([a-z0-9=_\-]{32})(?:['|"|\n|\r|\s|\x60|;]|$)/,
  },
  {
    id: "finicity-api-token", 
    name: "Finicity API token",
    pattern: /(?:finicity)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|"|\s|=|\x60){0,5}([a-f0-9]{32})(?:['|"|\n|\r|\s|\x60|;]|$)/,
  },
  {
    id: "finicity-client-secret", 
    name: "Finicity Client Secret",
    pattern: /(?:finicity)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|"|\s|=|\x60){0,5}([a-z0-9]{20})(?:['|"|\n|\r|\s|\x60|;]|$)/,
  },
  {
    id: "finnhub-access-token", 
    name: "Finnhub Access Token",
    pattern: /(?:finnhub)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|"|\s|=|\x60){0,5}([a-z0-9]{20})(?:['|"|\n|\r|\s|\x60|;]|$)/,
  },
  {
    id: "flickr-access-token", 
    name: "Flickr Access Token",
    pattern: /(?:flickr)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|"|\s|=|\x60){0,5}([a-z0-9]{32})(?:['|"|\n|\r|\s|\x60|;]|$)/,
  },
  {
    id: "freshbooks-access-token", 
    name: "Freshbooks Access Token",
    pattern: /(?:freshbooks)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|"|\s|=|\x60){0,5}([a-z0-9]{64})(?:['|"|\n|\r|\s|\x60|;]|$)/,
  },
  {
    id: "generic-api-key", 
    name: "Generic API Key",
    pattern: /(?:key|api|token|secret|client|passwd|password|auth|access)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|"|\s|=|\x60){0,5}([0-9a-z\-_.=]{10,150})(?:['|"|\n|\r|\s|\x60|;]|$)/,
  },
  {
    id: "gitter-access-token", 
    name: "Gitter Access Token",
    pattern: /(?:gitter)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|"|\s|=|\x60){0,5}([a-z0-9_-]{40})(?:['|"|\n|\r|\s|\x60|;]|$)/,
  },
  {
    id: "gocardless-api-token", 
    name: "GoCardless API token",
    pattern: /(?:gocardless)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|"|\s|=|\x60){0,5}(live_[a-z0-9\-_=]{40})(?:['|"|\n|\r|\s|\x60|;]|$)/,
  },
  {
    id: "heroku-api-key", 
    name: "Heroku API Key",
    pattern: /(?:heroku)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|"|\s|=|\x60){0,5}([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})(?:['|"|\n|\r|\s|\x60|;]|$)/,
  },
  {
    id: "hubspot-api-key", 
    name: "HubSpot API Token",
    pattern: /(?:hubspot)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|"|\s|=|\x60){0,5}([0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12})(?:['|"|\n|\r|\s|\x60|;]|$)/,
  },
  {
    id: "intercom-api-key", 
    name: "Intercom API Token",
    pattern: /(?:intercom)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|"|\s|=|\x60){0,5}([a-z0-9=_\-]{60})(?:['|"|\n|\r|\s|\x60|;]|$)/,
  },
  {
    id: "jfrog-api-key", 
    name: "JFrog API Key",
    pattern: /(?:jfrog|artifactory|bintray|xray)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|"|\s|=|\x60){0,5}([a-z0-9]{73})(?:['|"|\n|\r|\s|\x60|;]|$)/,
  },
  {
    id: "jfrog-identity-token", 
    name: "JFrog Identity Token",
    pattern: /(?:jfrog|artifactory|bintray|xray)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|"|\s|=|\x60){0,5}([a-z0-9]{64})(?:['|"|\n|\r|\s|\x60|;]|$)/,
  },
  {
    id: "kraken-access-token", 
    name: "Kraken Access Token",
    pattern: /(?:kraken)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|"|\s|=|\x60){0,5}([a-z0-9\/=_\+\-]{80,90})(?:['|"|\n|\r|\s|\x60|;]|$)/,
  },
  {
    id: "kucoin-access-token", 
    name: "Kucoin Access Token",
    pattern: /(?:kucoin)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|"|\s|=|\x60){0,5}([a-f0-9]{24})(?:['|"|\n|\r|\s|\x60|;]|$)/,
  },
  {
    id: "kucoin-secret-key", 
    name: "Kucoin Secret Key",
    pattern: /(?:kucoin)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|"|\s|=|\x60){0,5}([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})(?:['|"|\n|\r|\s|\x60|;]|$)/,
  },
  {
    id: "launchdarkly-access-token", 
    name: "Launchdarkly Access Token",
    pattern: /(?:launchdarkly)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|"|\s|=|\x60){0,5}([a-z0-9=_\-]{40})(?:['|"|\n|\r|\s|\x60|;]|$)/,
  },
  {
    id: "linear-client-secret", 
    name: "Linear Client Secret",
    pattern: /(?:linear)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|"|\s|=|\x60){0,5}([a-f0-9]{32})(?:['|"|\n|\r|\s|\x60|;]|$)/,
  },
  {
    id: "linkedin-client-id", 
    name: "LinkedIn Client ID",
    pattern: /(?:linkedin|linked-in)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|"|\s|=|\x60){0,5}([a-z0-9]{14})(?:['|"|\n|\r|\s|\x60|;]|$)/,
  },
  {
    id: "linkedin-client-secret", 
    name: "LinkedIn Client secret",
    pattern: /(?:linkedin|linked-in)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|"|\s|=|\x60){0,5}([a-z0-9]{16})(?:['|"|\n|\r|\s|\x60|;]|$)/,
  },
  {
    id: "lob-api-key", 
    name: "Lob API Key",
    pattern: /(?:lob)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|"|\s|=|\x60){0,5}((live|test)_[a-f0-9]{35})(?:['|"|\n|\r|\s|\x60|;]|$)/,
  },
  {
    id: "lob-pub-api-key", 
    name: "Lob Publishable API Key",
    pattern: /(?:lob)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|"|\s|=|\x60){0,5}((test|live)_pub_[a-f0-9]{31})(?:['|"|\n|\r|\s|\x60|;]|$)/,
  },
  {
    id: "mailchimp-api-key", 
    name: "Mailchimp API key",
    pattern: /(?:mailchimp)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|"|\s|=|\x60){0,5}([a-f0-9]{32}-us20)(?:['|"|\n|\r|\s|\x60|;]|$)/,
  },
  {
    id: "mailgun-private-api-token", 
    name: "Mailgun private API token",
    pattern: /(?:mailgun)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|"|\s|=|\x60){0,5}(key-[a-f0-9]{32})(?:['|"|\n|\r|\s|\x60|;]|$)/,
  },
  {
    id: "mailgun-pub-key", 
    name: "Mailgun public validation key",
    pattern: /(?:mailgun)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|"|\s|=|\x60){0,5}(pubkey-[a-f0-9]{32})(?:['|"|\n|\r|\s|\x60|;]|$)/,
  },
  {
    id: "mailgun-signing-key", 
    name: "Mailgun webhook signing key",
    pattern: /(?:mailgun)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|"|\s|=|\x60){0,5}([a-h0-9]{32}-[a-h0-9]{8}-[a-h0-9]{8})(?:['|"|\n|\r|\s|\x60|;]|$)/,
  },
  {
    id: "mapbox-api-token", 
    name: "MapBox API token",
    pattern: /(?:mapbox)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|"|\s|=|\x60){0,5}(pk\.[a-z0-9]{60}\.[a-z0-9]{22})(?:['|"|\n|\r|\s|\x60|;]|$)/,
  },
  {
    id: "mattermost-access-token", 
    name: "Mattermost Access Token",
    pattern: /(?:mattermost)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|"|\s|=|\x60){0,5}([a-z0-9]{26})(?:['|"|\n|\r|\s|\x60|;]|$)/,
  },
  {
    id: "messagebird-api-token", 
    name: "MessageBird API token",
    pattern: /(?:messagebird|message-bird|message_bird)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|"|\s|=|\x60){0,5}([a-z0-9]{25})(?:['|"|\n|\r|\s|\x60|;]|$)/,
  },
  {
    id: "messagebird-client-id", 
    name: "MessageBird client ID",
    pattern: /(?:messagebird|message-bird|message_bird)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|"|\s|=|\x60){0,5}([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})(?:['|"|\n|\r|\s|\x60|;]|$)/,
  },
  {
    id: "netlify-access-token", 
    name: "Netlify Access Token",
    pattern: /(?:netlify)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|"|\s|=|\x60){0,5}([a-z0-9=_\-]{40,46})(?:['|"|\n|\r|\s|\x60|;]|$)/,
  },
  {
    id: "new-relic-browser-api-token", 
    name: "New Relic ingest browser API token",
    pattern: /(?:new-relic|newrelic|new_relic)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|"|\s|=|\x60){0,5}(NRJS-[a-f0-9]{19})(?:['|"|\n|\r|\s|\x60|;]|$)/,
  },
  {
    id: "new-relic-user-api-id", 
    name: "New Relic user API ID",
    pattern: /(?:new-relic|newrelic|new_relic)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|"|\s|=|\x60){0,5}([a-z0-9]{64})(?:['|"|\n|\r|\s|\x60|;]|$)/,
  },
  {
    id: "new-relic-user-api-key", 
    name: "New Relic user API Key",
    pattern: /(?:new-relic|newrelic|new_relic)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|"|\s|=|\x60){0,5}(NRAK-[a-z0-9]{27})(?:['|"|\n|\r|\s|\x60|;]|$)/,
  },
  {
    id: "nytimes-access-token", 
    name: "Nytimes Access Token",
    pattern: /(?:nytimes|new-york-times,|newyorktimes)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|"|\s|=|\x60){0,5}([a-z0-9=_\-]{32})(?:['|"|\n|\r|\s|\x60|;]|$)/,
  },
  {
    id: "okta-access-token", 
    name: "Okta Access Token",
    pattern: /(?:okta)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|"|\s|=|\x60){0,5}([a-z0-9=_\-]{42})(?:['|"|\n|\r|\s|\x60|;]|$)/,
  },
  {
    id: "plaid-api-token", 
    name: "Plaid API Token",
    pattern: /(?:plaid)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|"|\s|=|\x60){0,5}(access-(?:sandbox|development|production)-[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})(?:['|"|\n|\r|\s|\x60|;]|$)/,
  },
  {
    id: "plaid-client-id", 
    name: "Plaid Client ID",
    pattern: /(?:plaid)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|"|\s|=|\x60){0,5}([a-z0-9]{24})(?:['|"|\n|\r|\s|\x60|;]|$)/,
  },
  {
    id: "plaid-secret-key", 
    name: "Plaid Secret key",
    pattern: /(?:plaid)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|"|\s|=|\x60){0,5}([a-z0-9]{30})(?:['|"|\n|\r|\s|\x60|;]|$)/,
  },
  {
    id: "rapidapi-access-token", 
    name: "RapidAPI Access Token",
    pattern: /(?:rapidapi)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|"|\s|=|\x60){0,5}([a-z0-9_-]{50})(?:['|"|\n|\r|\s|\x60|;]|$)/,
  },
  {
    id: "sendbird-access-id", 
    name: "Sendbird Access ID",
    pattern: /(?:sendbird)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|"|\s|=|\x60){0,5}([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})(?:['|"|\n|\r|\s|\x60|;]|$)/,
  },
  {
    id: "sendbird-access-token", 
    name: "Sendbird Access Token",
    pattern: /(?:sendbird)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|"|\s|=|\x60){0,5}([a-f0-9]{40})(?:['|"|\n|\r|\s|\x60|;]|$)/,
  },
  {
    id: "sentry-access-token", 
    name: "Sentry Access Token",
    pattern: /(?:sentry)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|"|\s|=|\x60){0,5}([a-f0-9]{64})(?:['|"|\n|\r|\s|\x60|;]|$)/,
  },
  {
    id: "sidekiq-secret", 
    name: "Sidekiq Secret",
    pattern: /(?:BUNDLE_ENTERPRISE__CONTRIBSYS__COM|BUNDLE_GEMS__CONTRIBSYS__COM)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|"|\s|=|\x60){0,5}([a-f0-9]{8}:[a-f0-9]{8})(?:['|"|\n|\r|\s|\x60|;]|$)/,
  },
  {
    id: "snyk-api-token", 
    name: "Snyk API token",
    pattern: /(?:snyk_token|snyk_key|snyk_api_token|snyk_api_key|snyk_oauth_token)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|"|\s|=|\x60){0,5}([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})(?:['|"|\n|\r|\s|\x60|;]|$)/,
  },
  {
    id: "squarespace-access-token", 
    name: "Squarespace Access Token",
    pattern: /(?:squarespace)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|"|\s|=|\x60){0,5}([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})(?:['|"|\n|\r|\s|\x60|;]|$)/,
  },
  {
    id: "sumologic-access-id", 
    name: "SumoLogic Access ID",
    pattern: /(?i:(?:sumo)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3})(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|"|\s|=|\x60){0,5}(su[a-zA-Z0-9]{12})(?:['|"|\n|\r|\s|\x60|;]|$)/,
  },
  {
    id: "sumologic-access-token", 
    name: "SumoLogic Access Token",
    pattern: /(?:sumo)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|"|\s|=|\x60){0,5}([a-z0-9]{64})(?:['|"|\n|\r|\s|\x60|;]|$)/,
  },
  {
    id: "travisci-access-token", 
    name: "Travis CI Access Token",
    pattern: /(?:travis)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|"|\s|=|\x60){0,5}([a-z0-9]{22})(?:['|"|\n|\r|\s|\x60|;]|$)/,
  },
  {
    id: "twitch-api-token", 
    name: "Twitch API token",
    pattern: /(?:twitch)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|"|\s|=|\x60){0,5}([a-z0-9]{30})(?:['|"|\n|\r|\s|\x60|;]|$)/,
  },
  {
    id: "twitter-access-secret", 
    name: "Twitter Access Secret",
    pattern: /(?:twitter)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|"|\s|=|\x60){0,5}([a-z0-9]{45})(?:['|"|\n|\r|\s|\x60|;]|$)/,
  },
  {
    id: "twitter-access-token", 
    name: "Twitter Access Token",
    pattern: /(?:twitter)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|"|\s|=|\x60){0,5}([0-9]{15,25}-[a-zA-Z0-9]{20,40})(?:['|"|\n|\r|\s|\x60|;]|$)/,
  },
  {
    id: "twitter-api-key", 
    name: "Twitter API Key",
    pattern: /(?:twitter)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|"|\s|=|\x60){0,5}([a-z0-9]{25})(?:['|"|\n|\r|\s|\x60|;]|$)/,
  },
  {
    id: "twitter-api-secret", 
    name: "Twitter API Secret",
    pattern: /(?:twitter)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|"|\s|=|\x60){0,5}([a-z0-9]{50})(?:['|"|\n|\r|\s|\x60|;]|$)/,
  },
  {
    id: "twitter-bearer-token", 
    name: "Twitter Bearer Token",
    pattern: /(?:twitter)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|"|\s|=|\x60){0,5}(A{22}[a-zA-Z0-9%]{80,100})(?:['|"|\n|\r|\s|\x60|;]|$)/,
  },
  {
    id: "typeform-api-token", 
    name: "Typeform API token",
    pattern: /(?:typeform)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|"|\s|=|\x60){0,5}(tfp_[a-z0-9\-_\.=]{59})(?:['|"|\n|\r|\s|\x60|;]|$)/,
  },
  {
    id: "yandex-access-token", 
    name: "Yandex Access Token",
    pattern: /(?:yandex)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|"|\s|=|\x60){0,5}(t1\.[A-Z0-9a-z_-]+[=]{0,2}\.[A-Z0-9a-z_-]{86}[=]{0,2})(?:['|"|\n|\r|\s|\x60|;]|$)/,
  },
  {
    id: "yandex-api-key", 
    name: "Yandex API Key",
    pattern: /(?:yandex)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|"|\s|=|\x60){0,5}(AQVN[A-Za-z0-9_\-]{35,38})(?:['|"|\n|\r|\s|\x60|;]|$)/,
  },
  {
    id: "yandex-aws-access-token", 
    name: "Yandex AWS Access Token",
    pattern: /(?:yandex)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|"|\s|=|\x60){0,5}(YC[a-zA-Z0-9_\-]{38})(?:['|"|\n|\r|\s|\x60|;]|$)/,
  },
  {
    id: "zendesk-secret-key", 
    name: "Zendesk Secret Key",
    pattern: /(?:zendesk)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:{1,3}=|\|\|:|<=|=>|:|\?=)(?:'|"|\s|=|\x60){0,5}([a-z0-9]{40})(?:['|"|\n|\r|\s|\x60|;]|$)/,
  },
]
*/
