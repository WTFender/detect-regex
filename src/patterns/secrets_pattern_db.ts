import { Pattern } from "./index.js";

const group = 'mazen160/secrets-patterns-db';
const ref = 'https://github.com/mazen160/secrets-patterns-db/blob/master/db/rules-stable.yml';

const patterns: Partial<Pattern>[] = [{
  name: 'AWS API Gateway',
  pattern: /[0-9a-z]+.execute-api.[0-9a-z._-]+.amazonaws.com/,
  confidence: 'low',
},
{
  name: 'AWS API Key',
  pattern: /AKIA[0-9A-Z]{16}/,
  confidence: 'high',
},
{
  name: 'AWS ARN',
  pattern: /arn:aws:[a-z0-9-]+:[a-z]{2}-[a-z]+-[0-9]+:[0-9]+:.+/,
  confidence: 'high',
},
{
  name: 'AWS Access Key ID Value',
  pattern: /(A3T[A-Z0-9]|AKIA|AGPA|AROA|AIPA|ANPA|ANVA|ASIA)[A-Z0-9]{16}/,
  confidence: 'high',
},
{
  name: 'AWS AppSync GraphQL Key',
  pattern: /da2-[a-z0-9]{26}/,
  confidence: 'high',
},
{
  name: 'AWS EC2 External',
  pattern: /ec2-[0-9a-z._-]+.compute(-1)?.amazonaws.com/,
  confidence: 'low',
},
{
  name: 'AWS EC2 Internal',
  pattern: /[0-9a-z._-]+.compute(-1)?.internal/,
  confidence: 'low',
},
{
  name: 'AWS ELB',
  pattern: /[0-9a-z._-]+.elb.amazonaws.com/,
  confidence: 'low',
},
{
  name: 'AWS ElasticCache',
  pattern: /[0-9a-z._-]+.cache.amazonaws.com/,
  confidence: 'low',
},
{
  name: 'AWS MWS ID',
  pattern: /mzn\.mws\.[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/,
  confidence: 'low',
},
{
  name: 'AWS MWS key',
  pattern: /amzn\.mws\.[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/,
  confidence: 'high',
},
{
  name: 'AWS RDS',
  pattern: /[0-9a-z._-]+.rds.amazonaws.com/,
  confidence: 'high',
},
{
  name: 'AWS S3 Bucket',
  pattern: /s3:\/\/[0-9a-z._/-]+/,
  confidence: 'high',
},
{
  name: 'AWS client ID',
  pattern: /(A3T[A-Z0-9]|AKIA|AGPA|AIDA|AROA|AIPA|ANPA|ANVA|ASIA)[A-Z0-9]{16}/,
  confidence: 'low',
},
{
  name: 'AWS cred file info',
  pattern: /(aws_access_key_id|aws_secret_access_key)/,
  confidence: 'high',
},
{
  name: 'Abbysale',
  pattern: /(?:abbysale).{0,40}\b([a-z0-9A-Z]{40})\b/,
  confidence: 'high',
},
{
  name: 'Abstract',
  pattern: /(?:abstract).{0,40}\b([0-9a-z]{32})\b/,
  confidence: 'high',
},
{
  name: 'Abuseipdb',
  pattern: /(?:abuseipdb).{0,40}\b([a-z0-9]{80})\b/,
  confidence: 'high',
},
{
  name: 'Accuweather',
  pattern: /(?:accuweather).{0,40}([a-z0-9A-Z%]{35})\b/,
  confidence: 'high',
},
{
  name: 'Adafruitio',
  pattern: /\b(aio_[a-zA-Z0-9]{28})\b/,
  confidence: 'high',
},
{
  name: 'Adobeio - 1',
  pattern: /(?:adobe).{0,40}\b([a-z0-9]{32})\b/,
  confidence: 'high',
},
{
  name: 'Adzuna - 1',
  pattern: /(?:adzuna).{0,40}\b([a-z0-9]{8})\b/,
  confidence: 'high',
},
{
  name: 'Adzuna - 2',
  pattern: /(?:adzuna).{0,40}\b([a-z0-9]{32})\b/,
  confidence: 'high',
},
{
  name: 'Aeroworkflow - 1',
  pattern: /(?:aeroworkf'low').{0,40}\b([0-9]{1,})\b/,
  confidence: 'high',
},
{
  name: 'Aeroworkflow - 2',
  pattern: /(?:aeroworkf'low').{0,40}\b([a-zA-Z0-9^!]{20})\b/,
  confidence: 'high',
},
{
  name: 'Agora',
  pattern: /(?:agora).{0,40}\b([a-z0-9]{32})\b/,
  confidence: 'high',
},
{
  name: 'Airbrakeprojectkey - 1',
  pattern: /(?:airbrake).{0,40}\b([0-9]{6})\b/,
  confidence: 'high',
},
{
  name: 'Airbrakeprojectkey - 2',
  pattern: /(?:airbrake).{0,40}\b([a-zA-Z-0-9]{32})\b/,
  confidence: 'high',
},
{
  name: 'Airbrakeuserkey',
  pattern: /(?:airbrake).{0,40}\b([a-zA-Z-0-9]{40})\b/,
  confidence: 'high',
},
{
  name: 'Airship',
  pattern: /(?:airship).{0,40}\b([0-9Aa-zA-Z]{91})\b/,
  confidence: 'high',
},
{
  name: 'Airvisual',
  pattern: /(?:airvisual).{0,40}\b([a-z0-9-]{36})\b/,
  confidence: 'high',
},
{
  name: 'Alconost',
  pattern: /(?:alconost).{0,40}\b([0-9Aa-z]{32})\b/,
  confidence: 'high',
},
{
  name: 'Alegra - 1',
  pattern: /(?:alegra).{0,40}\b([a-z0-9-]{20})\b/,
  confidence: 'high',
},
{
  name: 'Alegra - 2',
  pattern: /(?:alegra).{0,40}\b([a-zA-Z0-9.-@]{25,30})\b/,
  confidence: 'high',
},
{
  name: 'Aletheiaapi',
  pattern: /(?:aletheiaapi).{0,40}\b([A-Z0-9]{32})\b/,
  confidence: 'high',
},
{
  name: 'Algoliaadminkey - 1',
  pattern: /(?:algolia).{0,40}\b([A-Z0-9]{10})\b/,
  confidence: 'low',
},
{
  name: 'Algoliaadminkey - 2',
  pattern: /(?:algolia).{0,40}\b([a-zA-Z0-9]{32})\b/,
  confidence: 'low',
},
{
  name: 'Alibaba - 2',
  pattern: /\b(LTAI[a-zA-Z0-9]{17,21})["' ;\s]*/,
  confidence: 'high',
},
{
  name: 'Alienvault',
  pattern: /(?:alienvault).{0,40}\b([a-z0-9]{64})\b/,
  confidence: 'high',
},
{
  name: 'Allsports',
  pattern: /(?:allsports).{0,40}\b([0-9a-z]{64})\b/,
  confidence: 'high',
},
{
  name: 'Amadeus - 1',
  pattern: /(?:amadeus).{0,40}\b([0-9A-Za-z]{32})\b/,
  confidence: 'high',
},
{
  name: 'Amadeus - 2',
  pattern: /(?:amadeus).{0,40}\b([0-9A-Za-z]{16})\b/,
  confidence: 'high',
},
{
  name: 'Amazon SNS Topic',
  pattern: /arn:aws:sns:[a-z0-9-]+:[0-9]+:[A-Za-z0-9\-_]+/,
  confidence: 'low',
},
{
  name: 'Ambee',
  pattern: /(?:ambee).{0,40}\b([0-9a-f]{64})\b/,
  confidence: 'high',
},
{
  name: 'Amplitudeapikey',
  pattern: /(?:amplitude).{0,40}\b([a-f0-9]{32})/,
  confidence: 'high',
},
{
  name: 'Apacta',
  pattern: /(?:apacta).{0,40}\b([a-z0-9-]{36})\b/,
  confidence: 'high',
},
{
  name: 'Api2cart',
  pattern: /(?:api2cart).{0,40}\b([0-9a-f]{32})\b/,
  confidence: 'high',
},
{
  name: 'Apideck - 1',
  pattern: /\b(sk_live_[a-z0-9A-Z-]{93})\b/,
  confidence: 'high',
},
{
  name: 'Apideck - 2',
  pattern: /(?:apideck).{0,40}\b([a-z0-9A-Z]{40})\b/,
  confidence: 'high',
},
{
  name: 'Apiflash - 1',
  pattern: /(?:apiflash).{0,40}\b([a-z0-9]{32})\b/,
  confidence: 'high',
},
{
  name: 'Apiflash - 2',
  pattern: /(?:apiflash).{0,40}\b([a-zA-Z0-9\S]{21,30})\b/,
  confidence: 'high',
},
{
  name: 'Apifonica',
  pattern: /(?:apifonica).{0,40}\b([0-9a-z]{11}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{12})\b/,
  confidence: 'high',
},
{
  name: 'Apify',
  pattern: /\b(apify_api_[a-zA-Z-0-9]{36})\b/,
  confidence: 'high',
},
{
  name: 'Apimatic - 1',
  pattern: /(?:apimatic).{0,40}\b([a-z0-9-\S]{8,32})\b/,
  confidence: 'high',
},
{
  name: 'Apimatic - 2',
  pattern: /(?:apimatic).{0,40}\b([a-zA-Z0-9]{3,20}@[a-zA-Z0-9]{2,12}.[a-zA-Z0-9]{2,5})\b/,
  confidence: 'high',
},
{
  name: 'Apiscience',
  pattern: /(?:apiscience).{0,40}\b([a-bA-Z0-9\S]{22})\b/,
  confidence: 'high',
},
{
  name: 'Apollo',
  pattern: /(?:apollo).{0,40}\b([a-zA-Z0-9]{22})\b/,
  confidence: 'high',
},
{
  name: 'Appcues - 1',
  pattern: /(?:appcues).{0,40}\b([0-9]{5})\b/,
  confidence: 'high',
},
{
  name: 'Appcues - 2',
  pattern: /(?:appcues).{0,40}\b([a-z0-9-]{36})\b/,
  confidence: 'high',
},
{
  name: 'Appcues - 3',
  pattern: /(?:appcues).{0,40}\b([a-z0-9-]{39})\b/,
  confidence: 'high',
},
{
  name: 'Appfollow',
  pattern: /(?:appfol'low').{0,40}\b([0-9A-Za-z]{20})\b/,
  confidence: 'high',
},
{
  name: 'Appsynergy',
  pattern: /(?:appsynergy).{0,40}\b([a-z0-9]{64})\b/,
  confidence: 'high',
},
{
  name: 'Apptivo - 1',
  pattern: /(?:apptivo).{0,40}\b([a-z0-9-]{36})\b/,
  confidence: 'high',
},
{
  name: 'Apptivo - 2',
  pattern: /(?:apptivo).{0,40}\b([a-zA-Z0-9-]{32})\b/,
  confidence: 'high',
},
{
  name: 'Artifactory - 2',
  pattern: /\b([A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])\.jfrog\.io)/,
  confidence: 'high',
},
{
  name: 'Artifactory API Token',
  pattern: /(?:\s|=|:|"|^)AKC[a-zA-Z0-9]{10,}/,
  confidence: 'low',
},
{
  name: 'Artifactory Password',
  pattern: /(?:\s|=|:|"|^)AP[\dABCDEF][a-zA-Z0-9]{8,}/,
  confidence: 'low',
},
{
  name: 'Artsy - 1',
  pattern: /(?:artsy).{0,40}\b([0-9a-zA-Z]{20})\b/,
  confidence: 'high',
},
{
  name: 'Artsy - 2',
  pattern: /(?:artsy).{0,40}\b([0-9a-zA-Z]{32})\b/,
  confidence: 'high',
},
{
  name: 'Asanaoauth',
  pattern: /(?:asana).{0,40}\b([a-z/:0-9]{51})\b/,
  confidence: 'high',
},
{
  name: 'Asanapersonalaccesstoken',
  pattern: /(?:asana).{0,40}\b([0-9]{1,}\/[0-9]{16,}:[A-Za-z0-9]{32,})\b/,
  confidence: 'high',
},
{
  name: 'Assemblyai',
  pattern: /(?:assemblyai).{0,40}\b([0-9a-z]{32})\b/,
  confidence: 'high',
},
{
  name: 'Asymmetric Private Key',
  pattern: /-----BEGIN ((EC|PGP|DSA|RSA|OPENSSH) )?PRIVATE KEY( BLOCK)?-----/,
  confidence: 'high',
},
{
  name: 'Audd',
  pattern: /(?:audd).{0,40}\b([a-z0-9-]{32})\b/,
  confidence: 'high',
},
{
  name: 'Auth0managementapitoken',
  pattern: /(?:auth0).{0,40}\b(ey[a-zA-Z0-9._-]+)\b/,
  confidence: 'high',
},
{
  name: 'Auth0oauth - 1',
  pattern: /(?:auth0).{0,40}\b([a-zA-Z0-9_-]{32,60})\b/,
  confidence: 'low',
},
{
  name: 'Autodesk - 1',
  pattern: /(?:autodesk).{0,40}\b([0-9A-Za-z]{32})\b/,
  confidence: 'high',
},
{
  name: 'Autodesk - 2',
  pattern: /(?:autodesk).{0,40}\b([0-9A-Za-z]{16})\b/,
  confidence: 'high',
},
{
  name: 'Autoklose',
  pattern: /(?:autoklose).{0,40}\b([a-zA-Z0-9-]{32})\b/,
  confidence: 'high',
},
{
  name: 'Autopilot',
  pattern: /(?:autopilot).{0,40}\b([0-9a-f]{32})\b/,
  confidence: 'high',
},
{
  name: 'Avazapersonalaccesstoken',
  pattern: /(?:avaza).{0,40}\b([0-9]+-[0-9a-f]{40})\b/,
  confidence: 'high',
},
{
  name: 'Aviationstack',
  pattern: /(?:aviationstack).{0,40}\b([a-z0-9]{32})\b/,
  confidence: 'high',
},
{
  name: 'Aws - 1',
  pattern: /\b((?:AKIA|ABIA|ACCA|ASIA)[0-9A-Z]{16})\b/,
  confidence: 'high',
},
{
  name: 'Axonaut',
  pattern: /(?:axonaut).{0,40}\b([a-z0-9]{32})\b/,
  confidence: 'high',
},
{
  name: 'Aylien - 1',
  pattern: /(?:aylien).{0,40}\b([a-z0-9]{32})\b/,
  confidence: 'high',
},
{
  name: 'Aylien - 2',
  pattern: /(?:aylien).{0,40}\b([a-z0-9]{8})\b/,
  confidence: 'high',
},
{
  name: 'Ayrshare',
  pattern: /(?:ayrshare).{0,40}\b([A-Z]{7}-[A-Z0-9]{7}-[A-Z0-9]{7}-[A-Z0-9]{7})\b/,
  confidence: 'high',
},
{
  name: 'Bannerbear',
  pattern: /(?:bannerbear).{0,40}\b([0-9a-zA-Z]{22}tt)\b/,
  confidence: 'high',
},
{
  name: 'Baremetrics',
  pattern: /(?:baremetrics).{0,40}\b([a-zA-Z0-9_]{25})\b/,
  confidence: 'high',
},
{
  name: 'Baseapiio',
  pattern: /(?:baseapi|base-api).{0,40}\b([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})\b/,
  confidence: 'high',
},
{
  name: 'Beamer',
  pattern: /(?:beamer).{0,40}\b([a-zA-Z0-9_+/]{45}=)/,
  confidence: 'high',
},
{
  name: 'Bearer token',
  pattern: /(bearer).+/,
  confidence: 'low',
},
{
  name: 'Beebole',
  pattern: /(?:beebole).{0,40}\b([0-9a-z]{40})\b/,
  confidence: 'high',
},
{
  name: 'Besttime',
  pattern: /(?:besttime).{0,40}\b([0-9A-Za-z_]{36})\b/,
  confidence: 'high',
},
{
  name: 'Billomat - 1',
  pattern: /(?:billomat).{0,40}\b([0-9a-z]{1,})\b/,
  confidence: 'high',
},
{
  name: 'Billomat - 2',
  pattern: /(?:billomat).{0,40}\b([0-9a-z]{32})\b/,
  confidence: 'high',
},
{
  name: 'Bitbar',
  pattern: /(?:bitbar).{0,40}\b([0-9a-z]{32})\b/,
  confidence: 'high',
},
{
  name: 'Bitcoinaverage',
  pattern: /(?:bitcoinaverage).{0,40}\b([a-zA-Z0-9]{43})\b/,
  confidence: 'high',
},
{
  name: 'Bitfinex',
  pattern: /(?:bitfinex).{0,40}\b([A-Za-z0-9_-]{43})\b/,
  confidence: 'high',
},
{
  name: 'Bitly Secret Key',
  pattern: /R_[0-9a-f]{32}/,
  confidence: 'high',
},
{
  name: 'Bitlyaccesstoken',
  pattern: /(?:bitly).{0,40}\b([a-zA-Z-0-9]{40})\b/,
  confidence: 'high',
},
{
  name: 'Bitmex - 1',
  pattern: /(?:bitmex).{0,40}([ \r\n]{1}[0-9a-zA-Z\-_]{24}[ \r\n]{1})/,
  confidence: 'high',
},
{
  name: 'Bitmex - 2',
  pattern: /(?:bitmex).{0,40}([ \r\n]{1}[0-9a-zA-Z\-_]{48}[ \r\n]{1})/,
  confidence: 'high',
},
{
  name: 'Blablabus',
  pattern: /(?:blablabus).{0,40}\b([0-9A-Za-z]{22})\b/,
  confidence: 'high',
},
{
  name: 'Blazemeter',
  pattern: /(?:blazemeter|runscope).{0,40}\b([0-9a-z]{8}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{12})\b/,
  confidence: 'high',
},
{
  name: 'Blitapp',
  pattern: /(?:blitapp).{0,40}\b([a-zA-Z0-9_-]{39})\b/,
  confidence: 'high',
},
{
  name: 'Blogger',
  pattern: /(?:blogger).{0,40}\b([0-9A-Za-z-]{39})\b/,
  confidence: 'low',
},
{
  name: 'Bombbomb',
  pattern: /(?:bombbomb).{0,40}\b([a-zA-Z0-9-._]{704})\b/,
  confidence: 'high',
},
{
  name: 'Boostnote',
  pattern: /(?:boostnote).{0,40}\b([0-9a-f]{64})\b/,
  confidence: 'high',
},
{
  name: 'Borgbase',
  pattern: /(?:borgbase).{0,40}\b([a-zA-Z0-9/_.-]{148,152})\b/,
  confidence: 'high',
},
{
  name: 'Braintree API Key',
  pattern: /access_token$production$[0-9a-z]{16}$[0-9a-f]{32}/,
  confidence: 'high',
},
{
  name: 'Brandfetch',
  pattern: /(?:brandfetch).{0,40}\b([0-9A-Za-z]{40})\b/,
  confidence: 'high',
},
{
  name: 'Browshot',
  pattern: /(?:browshot).{0,40}\b([a-zA-Z-0-9]{28})\b/,
  confidence: 'high',
},
{
  name: 'Buddyns',
  pattern: /(?:buddyns).{0,40}\b([0-9a-z]{40})\b/,
  confidence: 'high',
},
{
  name: 'Bugherd',
  pattern: /(?:bugherd).{0,40}\b([0-9a-z]{22})\b/,
  confidence: 'high',
},
{
  name: 'Bugsnag',
  pattern: /(?:bugsnag).{0,40}\b([0-9a-z]{8}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{12})\b/,
  confidence: 'high',
},
{
  name: 'Buildkite',
  pattern: /(?:buildkite).{0,40}\b([a-z0-9]{40})\b/,
  confidence: 'high',
},
{
  name: 'Bulbul',
  pattern: /(?:bulbul).{0,40}\b([a-z0-9]{32})\b/,
  confidence: 'high',
},
{
  name: 'Buttercms',
  pattern: /(?:buttercms).{0,40}\b([a-z0-9]{40})\b/,
  confidence: 'high',
},
{
  name: 'Caflou',
  pattern: /(?:caflou).{0,40}\b([a-bA-Z0-9\S]{155})\b/,
  confidence: 'high',
},
{
  name: 'Calendarific',
  pattern: /(?:calendarific).{0,40}\b([a-z0-9]{40})\b/,
  confidence: 'high',
},
{
  name: 'Calendlyapikey',
  pattern: /(?:calendly).{0,40}\b([a-zA-Z-0-9]{20}.[a-zA-Z-0-9]{171}.[a-zA-Z-0-9_]{43})\b/,
  confidence: 'high',
},
{
  name: 'Calorieninja',
  pattern: /(?:calorieninja).{0,40}\b([0-9A-Za-z]{40})\b/,
  confidence: 'high',
},
{
  name: 'Campayn',
  pattern: /(?:campayn).{0,40}\b([a-z0-9]{64})\b/,
  confidence: 'high',
},
{
  name: 'Cannyio',
  pattern: /(?:canny).{0,40}\b([a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[0-9]{4}-[a-z0-9]{12})\b/,
  confidence: 'high',
},
{
  name: 'Capsulecrm',
  pattern: /(?:capsulecrm).{0,40}\b([a-zA-Z0-9-._+=]{64})\b/,
  confidence: 'high',
},
{
  name: 'Captaindata - 1',
  pattern: /(?:captaindata).{0,40}\b([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})\b/,
  confidence: 'high',
},
{
  name: 'Captaindata - 2',
  pattern: /(?:captaindata).{0,40}\b([0-9a-f]{64})\b/,
  confidence: 'high',
},
{
  name: 'Carboninterface',
  pattern: /(?:carboninterface).{0,40}\b([a-zA-Z0-9]{21})\b/,
  confidence: 'high',
},
{
  name: 'Cashboard - 1',
  pattern: /(?:cashboard).{0,40}\b([0-9A-Z]{3}-[0-9A-Z]{3}-[0-9A-Z]{3}-[0-9A-Z]{3})\b/,
  confidence: 'high',
},
{
  name: 'Cashboard - 2',
  pattern: /(?:cashboard).{0,40}\b([0-9a-z]{1,})\b/,
  confidence: 'high',
},
{
  name: 'Caspio - 1',
  pattern: /(?:caspio).{0,40}\b([a-z0-9]{8})\b/,
  confidence: 'high',
},
{
  name: 'Caspio - 2',
  pattern: /(?:caspio).{0,40}\b([a-z0-9]{50})\b/,
  confidence: 'high',
},
{
  name: 'Censys - 1',
  pattern: /(?:censys).{0,40}\b([a-zA-Z0-9]{32})\b/,
  confidence: 'high',
},
{
  name: 'Censys - 2',
  pattern: /(?:censys).{0,40}\b([a-z0-9-]{36})\b/,
  confidence: 'high',
},
{
  name: 'Centralstationcrm',
  pattern: /(?:centralstation).{0,40}\b([a-z0-9]{30})\b/,
  confidence: 'high',
},
{
  name: 'Cexio - 1',
  pattern: /(?:cexio|cex.io).{0,40}\b([a-z]{2}[0-9]{9})\b/,
  confidence: 'high',
},
{
  name: 'Cexio - 2',
  pattern: /(?:cexio|cex.io).{0,40}\b([0-9A-Za-z]{24,27})\b/,
  confidence: 'high',
},
{
  name: 'Chatbot',
  pattern: /(?:chatbot).{0,40}\b([a-zA-Z0-9_]{32})\b/,
  confidence: 'high',
},
{
  name: 'Chatfule',
  pattern: /(?:chatfuel).{0,40}\b([a-zA-Z0-9]{128})\b/,
  confidence: 'high',
},
{
  name: 'Checio',
  pattern: /(?:checio).{0,40}\b(pk_[a-z0-9]{45})\b/,
  confidence: 'high',
},
{
  name: 'Checklyhq',
  pattern: /(?:checklyhq).{0,40}\b([a-z0-9]{32})\b/,
  confidence: 'high',
},
{
  name: 'Checkout - 1',
  pattern: /(?:checkout).{0,40}\b((sk_|sk_test_)[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})\b/,
  confidence: 'high',
},
{
  name: 'Checkout - 2',
  pattern: /(?:checkout).{0,40}\b(cus_[0-9a-zA-Z]{26})\b/,
  confidence: 'high',
},
{
  name: 'Checkvist - 1',
  pattern: /(?:checkvist).{0,40}\b([\w.-]+@[\w-]+\.[\w.-]{2,5})\b/,
  confidence: 'high',
},
{
  name: 'Checkvist - 2',
  pattern: /(?:checkvist).{0,40}\b([0-9a-zA-Z]{14})\b/,
  confidence: 'high',
},
{
  name: 'Cicero',
  pattern: /(?:cicero).{0,40}\b([0-9a-z]{40})\b/,
  confidence: 'high',
},
{
  name: 'Circleci',
  pattern: /(?:circle).{0,40}([a-fA-F0-9]{40})/,
  confidence: 'low',
},
{
  name: 'Clearbit',
  pattern: /(?:clearbit).{0,40}\b([0-9a-z_]{35})\b/,
  confidence: 'high',
},
{
  name: 'Clickhelp - 1',
  pattern: /\b([0-9A-Za-z]{3,20}.try.clickhelp.co)\b/,
  confidence: 'high',
},
{
  name: 'Clickhelp - 2',
  pattern: /(?:clickhelp).{0,40}\b([0-9A-Za-z]{24})\b/,
  confidence: 'high',
},
{
  name: 'Clicksendsms - 2',
  pattern: /(?:sms).{0,40}\b([a-zA-Z0-9]{3,20}@[a-zA-Z0-9]{2,12}.[a-zA-Z0-9]{2,5})\b/,
  confidence: 'high',
},
{
  name: 'Clickuppersonaltoken',
  pattern: /(?:clickup).{0,40}\b(pk_[0-9]{8}_[0-9A-Z]{32})\b/,
  confidence: 'high',
},
{
  name: 'Cliengo',
  pattern: /(?:cliengo).{0,40}\b([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})\b/,
  confidence: 'high',
},
{
  name: 'Clinchpad',
  pattern: /(?:clinchpad).{0,40}\b([a-z0-9]{32})\b/,
  confidence: 'high',
},
{
  name: 'Clockify',
  pattern: /(?:clockify).{0,40}\b([a-zA-Z0-9]{48})\b/,
  confidence: 'high',
},
{
  name: 'Clockworksms - 1',
  pattern: /(?:clockwork|textanywhere).{0,40}\b([0-9a-zA-Z]{24})\b/,
  confidence: 'high',
},
{
  name: 'Clockworksms - 2',
  pattern: /(?:clockwork|textanywhere).{0,40}\b([0-9]{5})\b/,
  confidence: 'high',
},
{
  name: 'Closecrm',
  pattern: /\b(api_[a-z0-9A-Z.]{45})\b/,
  confidence: 'high',
},
{
  name: 'Cloudelements - 1',
  pattern: /(?:cloudelements).{0,40}\b([a-z0-9]{32})\b/,
  confidence: 'high',
},
{
  name: 'Cloudelements - 2',
  pattern: /(?:cloudelements).{0,40}\b([a-zA-Z0-9]{43})\b/,
  confidence: 'high',
},
{
  name: 'Cloudflareapitoken',
  pattern: /(?:cloudflare).{0,40}\b([A-Za-z0-9_-]{40})\b/,
  confidence: 'low',
},
{
  name: 'Cloudflarecakey',
  pattern: /(?:cloudflare).{0,40}\b(v[A-Za-z0-9._-]{173,})\b/,
  confidence: 'high',
},
{
  name: 'Cloudimage',
  pattern: /(?:cloudimage).{0,40}\b([a-z0-9_]{30})\b/,
  confidence: 'high',
},
{
  name: 'Cloudinary Credentials',
  pattern: /cloudinary:\/\/[0-9]+:[A-Za-z0-9\-_.]+@[A-Za-z0-9\-_.]+/,
  confidence: 'high',
},
{
  name: 'Cloudmersive',
  pattern: /(?:cloudmersive).{0,40}\b([a-z0-9-]{36})\b/,
  confidence: 'high',
},
{
  name: 'Cloudplan',
  pattern: /(?:cloudplan).{0,40}\b([A-Z0-9-]{32})\b/,
  confidence: 'high',
},
{
  name: 'Cloverly',
  pattern: /(?:cloverly).{0,40}\b([a-z0-9:_]{28})\b/,
  confidence: 'high',
},
{
  name: 'Cloze - 1',
  pattern: /(?:cloze).{0,40}\b([0-9a-f]{32})\b/,
  confidence: 'high',
},
{
  name: 'Cloze - 2',
  pattern: /(?:cloze).{0,40}\b([\w.-]+@[\w-]+\.[\w.-]{2,5})\b/,
  confidence: 'high',
},
{
  name: 'Clustdoc',
  pattern: /(?:clustdoc).{0,40}\b([0-9a-zA-Z]{60})\b/,
  confidence: 'high',
},
{
  name: 'Codacy',
  pattern: /(?:codacy).{0,40}\b([0-9A-Za-z]{20})\b/,
  confidence: 'high',
},
{
  name: 'Coinapi',
  pattern: /(?:coinapi).{0,40}\b([A-Z0-9-]{36})\b/,
  confidence: 'high',
},
{
  name: 'Coinbase',
  pattern: /(?:coinbase).{0,40}\b([a-zA-Z-0-9]{64})\b/,
  confidence: 'high',
},
{
  name: 'Coinlayer',
  pattern: /(?:coinlayer).{0,40}\b([a-z0-9]{32})\b/,
  confidence: 'high',
},
{
  name: 'Coinlib',
  pattern: /(?:coinlib).{0,40}\b([a-z0-9]{16})\b/,
  confidence: 'high',
},
{
  name: 'Column',
  pattern: /(?:column).{0,40}\b((?:test|live)_[a-zA-Z0-9]{27})\b/,
  confidence: 'high',
},
{
  name: 'Commercejs',
  pattern: /(?:commercejs).{0,40}\b([a-z0-9_]{48})\b/,
  confidence: 'high',
},
{
  name: 'Commodities',
  pattern: /(?:commodities).{0,40}\b([a-zA-Z0-9]{60})\b/,
  confidence: 'high',
},
{
  name: 'Companyhub - 1',
  pattern: /(?:companyhub).{0,40}\b([0-9a-zA-Z]{20})\b/,
  confidence: 'high',
},
{
  name: 'Companyhub - 2',
  pattern: /(?:companyhub).{0,40}\b([a-zA-Z0-9$%^=-]{4,32})\b/,
  confidence: 'high',
},
{
  name: 'Confluent - 1',
  pattern: /(?:confluent).{0,40}\b([a-zA-Z-0-9]{16})\b/,
  confidence: 'high',
},
{
  name: 'Confluent - 2',
  pattern: /(?:confluent).{0,40}\b([a-zA-Z-0-9]{64})\b/,
  confidence: 'high',
},
{
  name: 'Convertkit',
  pattern: /(?:convertkit).{0,40}\b([a-z0-9A-Z_]{22})\b/,
  confidence: 'high',
},
{
  name: 'Convier',
  pattern: /(?:convier).{0,40}\b([0-9]{2}\|[a-zA-Z0-9]{40})\b/,
  confidence: 'high',
},
{
  name: 'Copper - 2',
  pattern: /(?:copper).{0,40}\b([a-z0-9]{32})\b/,
  confidence: 'high',
},
{
  name: 'Countrylayer',
  pattern: /(?:countrylayer).{0,40}\b([a-z0-9]{32})\b/,
  confidence: 'high',
},
{
  name: 'Courier',
  pattern: /(?:courier).{0,40}\b(pk_[a-zA-Z0-9]{1,}_[a-zA-Z0-9]{28})\b/,
  confidence: 'high',
},
{
  name: 'Coveralls',
  pattern: /(?:coveralls).{0,40}\b([a-zA-Z0-9-]{37})\b/,
  confidence: 'high',
},
{
  name: 'Crowdin',
  pattern: /(?:crowdin).{0,40}\b([0-9A-Za-z]{80})\b/,
  confidence: 'high',
},
{
  name: 'Cryptocompare',
  pattern: /(?:cryptocompare).{0,40}\b([a-z-0-9]{64})\b/,
  confidence: 'high',
},
{
  name: 'Currencycloud - 1',
  pattern: /(?:currencycloud).{0,40}\b([0-9a-z]{64})\b/,
  confidence: 'high',
},
{
  name: 'Currencyfreaks',
  pattern: /(?:currencyfreaks).{0,40}\b([0-9a-z]{32})\b/,
  confidence: 'high',
},
{
  name: 'Currencylayer',
  pattern: /(?:currencylayer).{0,40}\b([a-z0-9]{32})\b/,
  confidence: 'high',
},
{
  name: 'Currencyscoop',
  pattern: /(?:currencyscoop).{0,40}\b([a-z0-9]{32})\b/,
  confidence: 'high',
},
{
  name: 'Currentsapi',
  pattern: /(?:currentsapi).{0,40}\b([a-zA-Z0-9\S]{48})\b/,
  confidence: 'high',
},
{
  name: 'Customerguru - 1',
  pattern: /(?:guru).{0,40}\b([a-z0-9A-Z]{50})\b/,
  confidence: 'high',
},
{
  name: 'Customerguru - 2',
  pattern: /(?:guru).{0,40}\b([a-z0-9A-Z]{30})\b/,
  confidence: 'high',
},
{
  name: 'Customerio',
  pattern: /(?:customer).{0,40}\b([a-z0-9A-Z]{20})\b/,
  confidence: 'low',
},
{
  name: 'D7network',
  pattern: /(?:d7network).{0,40}\b([a-zA-Z0-9\W\S]{23}=)/,
  confidence: 'high',
},
{
  name: 'Dailyco',
  pattern: /(?:daily).{0,40}\b([0-9a-f]{64})\b/,
  confidence: 'high',
},
{
  name: 'Dandelion',
  pattern: /(?:dandelion).{0,40}\b([a-z0-9]{32})\b/,
  confidence: 'high',
},
{
  name: 'Databricks',
  pattern: /dapi[a-f0-9]{32}\b/,
  confidence: 'high',
},
{
  name: 'Datadogtoken - 1',
  pattern: /(?:datadog).{0,40}\b([a-zA-Z-0-9]{32})\b/,
  confidence: 'low',
},
{
  name: 'Datadogtoken - 2',
  pattern: /(?:datadog).{0,40}\b([a-zA-Z-0-9]{40})\b/,
  confidence: 'low',
},
{
  name: 'Datafire',
  pattern: /(?:datafire).{0,40}\b([a-z0-9\S]{175,190})\b/,
  confidence: 'high',
},
{
  name: 'Datagov',
  pattern: /(?:data.gov).{0,40}\b([a-zA-Z0-9]{40})\b/,
  confidence: 'high',
},
{
  name: 'Debounce',
  pattern: /(?:debounce).{0,40}\b([a-zA-Z0-9]{13})\b/,
  confidence: 'low',
},
{
  name: 'Deepai',
  pattern: /(?:deepai).{0,40}\b([a-z0-9-]{36})\b/,
  confidence: 'high',
},
{
  name: 'Deepgram',
  pattern: /(?:deepgram).{0,40}\b([0-9a-z]{40})\b/,
  confidence: 'high',
},
{
  name: 'Delighted',
  pattern: /(?:delighted).{0,40}\b([a-z0-9A-Z]{32})\b/,
  confidence: 'high',
},
{
  name: 'Deputy - 1',
  pattern: /\b([0-9a-z]{1,}.as.deputy.com)\b/,
  confidence: 'high',
},
{
  name: 'Deputy - 2',
  pattern: /(?:deputy).{0,40}\b([0-9a-z]{32})\b/,
  confidence: 'high',
},
{
  name: 'Detectlanguage',
  pattern: /(?:detectlanguage).{0,40}\b([a-z0-9]{32})\b/,
  confidence: 'high',
},
{
  name: 'Dfuse',
  pattern: /\b(web_[0-9a-z]{32})\b/,
  confidence: 'high',
},
{
  name: 'Diffbot',
  pattern: /(?:diffbot).{0,40}\b([a-z0-9]{32})\b/,
  confidence: 'high',
},
{
  name: 'Digitaloceantoken',
  pattern: /(?:digitalocean).{0,40}\b([A-Za-z0-9_-]{64})\b/,
  confidence: 'high',
},
{
  name: 'Discord Webhook',
  pattern: /https:\/\/discordapp\.com\/api\/webhooks\/[0 - 9]+\/[A-Za-z0-9-]+/,
  confidence: 'high',
},
{
  name: 'Discordbottoken - 1',
  pattern: /(?:discord).{0,40}\b([A-Za-z0-9_-]{24}\.[A-Za-z0-9_-]{6}\.[A-Za-z0-9_-]{27})\b/,
  confidence: 'high',
},
{
  name: 'Discordbottoken - 2',
  pattern: /(?:discord).{0,40}\b([0-9]{17})\b/,
  confidence: 'high',
},
{
  name: 'Discordwebhook',
  pattern: /(https:\/\/discord.com\/api\/webhooks\/[0-9]{18}\/[0-9a-zA-Z-]{68})/,
  confidence: 'high',
},
{
  name: 'Ditto',
  pattern: /(?:ditto).{0,40}\b([a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}\.[a-z0-9]{40})\b/,
  confidence: 'high',
},
{
  name: 'Dnscheck - 1',
  pattern: /(?:dnscheck).{0,40}\b([a-z0-9A-Z-]{36})\b/,
  confidence: 'high',
},
{
  name: 'Dnscheck - 2',
  pattern: /(?:dnscheck).{0,40}\b([a-z0-9A-Z]{32})\b/,
  confidence: 'high',
},
{
  name: 'Documo',
  pattern: /\b(ey[a-zA-Z0-9]{34}.ey[a-zA-Z0-9]{154}.[a-zA-Z0-9_-]{43})\b/,
  confidence: 'high',
},
{
  name: 'Doppler',
  pattern: /\b(dp\.pt\.[a-zA-Z0-9]{43})\b/,
  confidence: 'high',
},
{
  name: 'Dotmailer - 1',
  pattern: /(?:dotmailer).{0,40}\b(apiuser-[a-z0-9]{12}@apiconnector.com)\b/,
  confidence: 'high',
},
{
  name: 'Dotmailer - 2',
  pattern: /(?:dotmailer).{0,40}\b([a-zA-Z0-9\S]{8,24})\b/,
  confidence: 'high',
},
{
  name: 'Dovico',
  pattern: /(?:dovico).{0,40}\b([0-9a-z]{32}\.[0-9a-z]{1,}\b)/,
  confidence: 'high',
},
{
  name: 'Dronahq',
  pattern: /(?:dronahq).{0,40}\b([a-z0-9]{50})\b/,
  confidence: 'high',
},
{
  name: 'Droneci',
  pattern: /(?:droneci).{0,40}\b([a-zA-Z0-9]{32})\b/,
  confidence: 'high',
},
{
  name: 'Dropbox',
  pattern: /\b(sl\.[A-Za-z0-9\-_]{130,140})\b/,
  confidence: 'high',
},
{
  name: 'Dwolla',
  pattern: /(?:dwolla).{0,40}\b([a-zA-Z-0-9]{50})\b/,
  confidence: 'high',
},
{
  name: 'Dynalist',
  pattern: /(?:dynalist).{0,40}\b([a-zA-Z0-9-_]{128})\b/,
  confidence: 'high',
},
{
  name: 'Dynatrace token',
  pattern: /dt0[a-zA-Z]{1}[0-9]{2}\.[A-Z0-9]{24}\.[A-Z0-9]{64}/,
  confidence: 'high',
},
{
  name: 'Dyspatch',
  pattern: /(?:dyspatch).{0,40}\b([A-Z0-9]{52})\b/,
  confidence: 'high',
},
{
  name: 'EC',
  pattern: /-----BEGIN EC PRIVATE KEY-----/,
  confidence: 'high',
},
{
  name: 'Eagleeyenetworks - 1',
  pattern: /(?:eagleeyenetworks).{0,40}\b([a-zA-Z0-9]{3,20}@[a-zA-Z0-9]{2,12}.[a-zA-Z0-9]{2,5})\b/,
  confidence: 'high',
},
{
  name: 'Eagleeyenetworks - 2',
  pattern: /(?:eagleeyenetworks).{0,40}\b([a-zA-Z0-9]{15})\b/,
  confidence: 'high',
},
{
  name: 'Easyinsight - 1',
  pattern: /(?:easyinsight|easy-insight).{0,40}\b([a-zA-Z0-9]{20})\b/,
  confidence: 'high',
},
{
  name: 'Easyinsight - 2',
  pattern: /(?:easyinsight|easy-insight).{0,40}\b([0-9Aa-zA-Z]{20})\b/,
  confidence: 'high',
},
{
  name: 'Edamam - 1',
  pattern: /(?:edamam).{0,40}\b([0-9a-z]{32})\b/,
  confidence: 'high',
},
{
  name: 'Edamam - 2',
  pattern: /(?:edamam).{0,40}\b([0-9a-z]{8})\b/,
  confidence: 'high',
},
{
  name: 'Edenai',
  pattern: /(?:edenai).{0,40}\b([a-zA-Z0-9]{36}.[a-zA-Z0-9]{92}.[a-zA-Z0-9_]{43})\b/,
  confidence: 'high',
},
{
  name: 'Eightxeight - 1',
  pattern: /(?:8x8).{0,40}\b([a-zA-Z0-9_]{18,30})\b/,
  confidence: 'low',
},
{
  name: 'Eightxeight - 2',
  pattern: /(?:8x8).{0,40}\b([a-zA-Z0-9]{43})\b/,
  confidence: 'high',
},
{
  name: 'Elasticemail',
  pattern: /(?:elastic).{0,40}\b([A-Za-z0-9_-]{96})\b/,
  confidence: 'high',
},
{
  name: 'Enablex - 1',
  pattern: /(?:enablex).{0,40}\b([a-zA-Z0-9]{36})\b/,
  confidence: 'high',
},
{
  name: 'Enablex - 2',
  pattern: /(?:enablex).{0,40}\b([a-z0-9]{24})\b/,
  confidence: 'high',
},
{
  name: 'Enigma',
  pattern: /(?:enigma).{0,40}\b([a-zA-Z0-9]{40})\b/,
  confidence: 'high',
},
{
  name: 'Ethplorer',
  pattern: /(?:ethplorer).{0,40}\b([a-z0-9A-Z-]{22})\b/,
  confidence: 'high',
},
{
  name: 'Etsyapikey',
  pattern: /(?:etsy).{0,40}\b([a-zA-Z-0-9]{24})\b/,
  confidence: 'low',
},
{
  name: 'Everhour',
  pattern: /(?:everhour).{0,40}\b([0-9Aa-f]{4}-[0-9a-f]{4}-[0-9a-f]{6}-[0-9a-f]{6}-[0-9a-f]{8})\b/,
  confidence: 'high',
},
{
  name: 'Exchangerateapi',
  pattern: /(?:exchangerate).{0,40}\b([a-z0-9]{24})\b/,
  confidence: 'high',
},
{
  name: 'Exchangeratesapi',
  pattern: /(?:exchangerates).{0,40}\b([a-z0-9]{32})\b/,
  confidence: 'high',
},
{
  name: 'FCM Server Key',
  pattern: /AAAA[a-zA-Z0-9_-]{7}:[a-zA-Z0-9_-]{140}/,
  confidence: 'low',
},
{
  name: 'FCM_server_key',
  pattern: /(AAAA[a-zA-Z0-9_-]{7}:[a-zA-Z0-9_-]{140})/,
  confidence: 'low',
},
{
  name: 'Facebook Access Token',
  pattern: /EAACEdEose0cBA[0-9A-Za-z]+/,
  confidence: 'high',
},
{
  name: 'Facebookoauth',
  pattern: /(?:facebook).{0,40}\b([A-Za-z0-9]{32})\b/,
  confidence: 'low',
},
{
  name: 'Faceplusplus',
  pattern: /(?:faceplusplus).{0,40}\b([0-9a-zA-Z_-]{32})\b/,
  confidence: 'high',
},
{
  name: 'Fakejson',
  pattern: /(?:fakejson).{0,40}\b([a-zA-Z0-9]{22})\b/,
  confidence: 'high',
},
{
  name: 'Fastforex',
  pattern: /(?:fastforex).{0,40}\b([a-z0-9-]{28})\b/,
  confidence: 'high',
},
{
  name: 'Fastlypersonaltoken',
  pattern: /(?:fastly).{0,40}\b([A-Za-z0-9_-]{32})\b/,
  confidence: 'high',
},
{
  name: 'Feedier',
  pattern: /(?:feedier).{0,40}\b([a-z0-9A-Z]{32})\b/,
  confidence: 'high',
},
{
  name: 'Fetchrss',
  pattern: /(?:fetchrss).{0,40}\b([0-9A-Za-z.]{40})\b/,
  confidence: 'high',
},
{
  name: 'Figmapersonalaccesstoken',
  pattern: /(?:figma).{0,40}\b([0-9]{6}-[0-9a-z]{8}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{12})\b/,
  confidence: 'high',
},
{
  name: 'Fileio',
  pattern: /(?:fileio).{0,40}\b([A-Z0-9.-]{39})\b/,
  confidence: 'high',
},
{
  name: 'Finage',
  pattern: /\b(API_KEY[0-9A-Z]{32})\b/,
  confidence: 'high',
},
{
  name: 'Financialmodelingprep',
  pattern: /(?:financialmodelingprep).{0,40}\b([a-zA-Z0-9]{32})\b/,
  confidence: 'high',
},
{
  name: 'Findl',
  pattern: /(?:findl).{0,40}\b([a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12})\b/,
  confidence: 'high',
},
{
  name: 'Finnhub',
  pattern: /(?:finnhub).{0,40}\b([0-9a-z]{20})\b/,
  confidence: 'high',
},
{
  name: 'Firebase Database Detect - 1',
  pattern: /[a-z0-9.-]+\.firebaseio\.com/,
  confidence: 'low',
},
{
  name: 'Firebase Database Detect - 2',
  pattern: /[a-z0-9.-]+\.firebaseapp\.com/,
  confidence: 'low',
},
{
  name: 'Fixerio',
  pattern: /(?:fixer).{0,40}\b([A-Za-z0-9]{32})\b/,
  confidence: 'high',
},
{
  name: 'Flatio',
  pattern: /(?:flat).{0,40}\b([0-9a-z]{128})\b/,
  confidence: 'high',
},
{
  name: 'Fleetbase',
  pattern: /\b(flb_live_[0-9a-zA-Z]{20})\b/,
  confidence: 'high',
},
{
  name: 'Flickr',
  pattern: /(?:flickr).{0,40}\b([0-9a-z]{32})\b/,
  confidence: 'high',
},
{
  name: 'Flightapi',
  pattern: /(?:flightapi).{0,40}\b([a-z0-9]{24})\b/,
  confidence: 'high',
},
{
  name: 'Flightstats - 1',
  pattern: /(?:flightstats).{0,40}\b([0-9a-z]{32})\b/,
  confidence: 'high',
},
{
  name: 'Flightstats - 2',
  pattern: /(?:flightstats).{0,40}\b([0-9a-z]{8})\b/,
  confidence: 'high',
},
{
  name: 'Float',
  pattern: /(?:float).{0,40}\b([a-zA-Z0-9-._+=]{59,60})\b/,
  confidence: 'low',
},
{
  name: 'Flowflu - 2',
  pattern: /(?:f'low'flu).{0,40}\b([a-zA-Z0-9]{51})\b/,
  confidence: 'high',
},
{
  name: 'Flutterwave',
  pattern: /\b(FLWSECK-[0-9a-z]{32}-X)\b/,
  confidence: 'high',
},
{
  name: 'Fmfw - 1',
  pattern: /(?:fmfw).{0,40}\b([a-zA-Z0-9-]{32})\b/,
  confidence: 'high',
},
{
  name: 'Fmfw - 2',
  pattern: /(?:fmfw).{0,40}\b([a-zA-Z0-9_-]{32})\b/,
  confidence: 'high',
},
{
  name: 'Formbucket',
  pattern: /(?:formbucket).{0,40}\b([0-9A-Za-z]{1,}.[0-9A-Za-z]{1,}\.[0-9A-Z-a-z\-_]{1,})/,
  confidence: 'high',
},
{
  name: 'Formio',
  pattern: /(?:formio).{0,40}\b(eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9\.[0-9A-Za-z]{310}\.[0-9A-Z-a-z\-_]{43}[\r\n]{1})/,
  confidence: 'high',
},
{
  name: 'Foursquare',
  pattern: /(?:foursquare).{0,40}\b([0-9A-Z]{48})\b/,
  confidence: 'high',
},
{
  name: 'Frameio',
  pattern: /\b(fio-u-[0-9a-zA-Z_-]{64})\b/,
  confidence: 'high',
},
{
  name: 'Freshbooks - 1',
  pattern: /(?:freshbooks).{0,40}\b([0-9a-z]{64})\b/,
  confidence: 'high',
},
{
  name: 'Freshbooks - 2',
  pattern: /(?:freshbooks).{0,40}\b(https:\/\/www.[0-9A-Za-z_-]{1,}.com)\b/,
  confidence: 'high',
},
{
  name: 'Freshdesk - 1',
  pattern: /(?:freshdesk).{0,40}\b([0-9A-Za-z]{20})\b/,
  confidence: 'high',
},
{
  name: 'Freshdesk - 2',
  pattern: /\b([0-9a-z-]{1,}.freshdesk.com)\b/,
  confidence: 'high',
},
{
  name: 'Front',
  pattern: /(?:front).{0,40}\b([0-9a-zA-Z]{36}.[0-9a-zA-Z.\-_]{188,244})\b/,
  confidence: 'high',
},
{
  name: 'Fulcrum',
  pattern: /(?:fulcrum).{0,40}\b([a-z0-9]{80})\b/,
  confidence: 'high',
},
{
  name: 'Fullstory',
  pattern: /(?:fullstory).{0,40}\b([a-zA-Z-0-9/+]{88})\b/,
  confidence: 'high',
},
{
  name: 'Fusebill',
  pattern: /(?:fusebill).{0,40}\b([a-zA-Z0-9]{88})\b/,
  confidence: 'high',
},
{
  name: 'Fxmarket',
  pattern: /(?:fxmarket).{0,40}\b([0-9Aa-zA-Z-_=]{20})\b/,
  confidence: 'high',
},
{
  name: 'Gcp',
  pattern: /\{[^{]+auth_provider_x509_cert_url[^}]+\}/,
  confidence: 'high',
},
{
  name: 'Geckoboard',
  pattern: /(?:geckoboard).{0,40}\b([a-zA-Z0-9]{44})\b/,
  confidence: 'high',
},
{
  name: 'Generic - 1376',
  pattern: /jdbc:mysql(=| =|:| :)/,
  confidence: 'high',
},
{
  name: 'Generic - 1688',
  pattern: /TOKEN[\\-|_|A-Z0-9]*('|")?(:|=)('|")?[\\-|_|A-Z0-9]{10}/,
  confidence: 'low',
},
{
  name: 'Generic - 1689',
  pattern: /API[\\-|_|A-Z0-9]*('|")?(:|=)('|")?[\\-|_|A-Z0-9]{10}/,
  confidence: 'low',
},
{
  name: 'Generic - 1691',
  pattern: /SECRET[\\-|_|A-Z0-9]*('|")?(:|=)('|")?[\\-|_|A-Z0-9]{10}/,
  confidence: 'low',
},
{
  name: 'Generic - 1692',
  pattern: /AUTHORIZATION[\\-|_|A-Z0-9]*('|")?(:|=)('|")?[\\-|_|A-Z0-9]{10}/,
  confidence: 'low',
},
{
  name: 'Generic - 1693',
  pattern: /PASSWORD[\\-|_|A-Z0-9]*('|")?(:|=)('|")?[\\-|_|A-Z0-9]{10}/,
  confidence: 'low',
},
{
  name: 'Generic - 1695',
  pattern: /(A|a)(P|p)(Ii)[-|_|A-Za-z0-9]*('|")?( )*(:|=)( )*('|")?[0-9A-Za-z\-_]+('|")?/,
  confidence: 'low',
},
{
  name: 'Generic - 1700',
  pattern: /BEGIN OPENSSH PRIVATE KEY/,
  confidence: 'high',
},
{
  name: 'Generic - 1701',
  pattern: /BEGIN PRIVATE KEY/,
  confidence: 'high',
},
{
  name: 'Generic - 1702',
  pattern: /BEGIN RSA PRIVATE KEY/,
  confidence: 'high',
},
{
  name: 'Generic - 1703',
  pattern: /BEGIN DSA PRIVATE KEY/,
  confidence: 'high',
},
{
  name: 'Generic - 1704',
  pattern: /BEGIN EC PRIVATE KEY/,
  confidence: 'high',
},
{
  name: 'Generic - 1705',
  pattern: /BEGIN PGP PRIVATE KEY BLOCK/,
  confidence: 'high',
},
{
  name: 'Generic - 1707',
  pattern: /[a-z0-9.-]+\.s3-[a-z0-9-]\.amazonaws\.com/,
  confidence: 'low',
},
{
  name: 'Generic - 1708',
  pattern: /[a-z0-9.-]+\.s3-website[.-](eu|ap|us|ca|sa|cn)/,
  confidence: 'low',
},
{
  name: 'Generic - 1710',
  pattern: /algolia_api_key/,
  confidence: 'high',
},
{
  name: 'Generic - 1711',
  pattern: /asana_access_token/,
  confidence: 'high',
},
{
  name: 'Generic - 1713',
  pattern: /azure_tenant/,
  confidence: 'high',
},
{
  name: 'Generic - 1714',
  pattern: /bitly_access_token/,
  confidence: 'high',
},
{
  name: 'Generic - 1715',
  pattern: /branchio_secret/,
  confidence: 'low',
},
{
  name: 'Generic - 1716',
  pattern: /browserstack_access_key/,
  confidence: 'high',
},
{
  name: 'Generic - 1717',
  pattern: /buildkite_access_token/,
  confidence: 'high',
},
{
  name: 'Generic - 1718',
  pattern: /comcast_access_token/,
  confidence: 'high',
},
{
  name: 'Generic - 1719',
  pattern: /datadog_api_key/,
  confidence: 'high',
},
{
  name: 'Generic - 1720',
  pattern: /deviantart_secret/,
  confidence: 'high',
},
{
  name: 'Generic - 1721',
  pattern: /deviantart_access_token/,
  confidence: 'high',
},
{
  name: 'Generic - 1722',
  pattern: /dropbox_api_token/,
  confidence: 'high',
},
{
  name: 'Generic - 1723',
  pattern: /facebook_appsecret/,
  confidence: 'high',
},
{
  name: 'Generic - 1724',
  pattern: /facebook_access_token/,
  confidence: 'high',
},
{
  name: 'Generic - 1725',
  pattern: /firebase_custom_token/,
  confidence: 'high',
},
{
  name: 'Generic - 1726',
  pattern: /firebase_id_token/,
  confidence: 'high',
},
{
  name: 'Generic - 1727',
  pattern: /github_client/,
  confidence: 'high',
},
{
  name: 'Generic - 1728',
  pattern: /github_ssh_key/,
  confidence: 'high',
},
{
  name: 'Generic - 1730',
  pattern: /gitlab_private_token/,
  confidence: 'high',
},
{
  name: 'Generic - 1731',
  pattern: /google_cm/,
  confidence: 'low',
},
{
  name: 'Generic - 1732',
  pattern: /google_maps_key/,
  confidence: 'low',
},
{
  name: 'Generic - 1733',
  pattern: /heroku_api_key/,
  confidence: 'high',
},
{
  name: 'Generic - 1734',
  pattern: /instagram_access_token/,
  confidence: 'high',
},
{
  name: 'Generic - 1735',
  pattern: /mailchimp_api_key/,
  confidence: 'high',
},
{
  name: 'Generic - 1736',
  pattern: /mailgun_api_key/,
  confidence: 'high',
},
{
  name: 'Generic - 1737',
  pattern: /mailjet/,
  confidence: 'low',
},
{
  name: 'Generic - 1738',
  pattern: /mapbox_access_token/,
  confidence: 'low',
},
{
  name: 'Generic - 1739',
  pattern: /pagerduty_api_token/,
  confidence: 'high',
},
{
  name: 'Generic - 1740',
  pattern: /paypal_key_sb/,
  confidence: 'high',
},
{
  name: 'Generic - 1741',
  pattern: /paypal_key_live/,
  confidence: 'high',
},
{
  name: 'Generic - 1742',
  pattern: /paypal_token_sb/,
  confidence: 'high',
},
{
  name: 'Generic - 1743',
  pattern: /paypal_token_live/,
  confidence: 'high',
},
{
  name: 'Generic - 1744',
  pattern: /pendo_integration_key/,
  confidence: 'high',
},
{
  name: 'Generic - 1745',
  pattern: /salesforce_access_token/,
  confidence: 'high',
},
{
  name: 'Generic - 1746',
  pattern: /saucelabs_ukey/,
  confidence: 'high',
},
{
  name: 'Generic - 1747',
  pattern: /sendgrid_api_key/,
  confidence: 'high',
},
{
  name: 'Generic - 1748',
  pattern: /slack_api_token/,
  confidence: 'high',
},
{
  name: 'Generic - 1749',
  pattern: /slack_webhook/,
  confidence: 'low',
},
{
  name: 'Generic - 1750',
  pattern: /square_secret/,
  confidence: 'low',
},
{
  name: 'Generic - 1751',
  pattern: /square_auth_token/,
  confidence: 'high',
},
{
  name: 'Generic - 1752',
  pattern: /travisci_api_token/,
  confidence: 'high',
},
{
  name: 'Generic - 1753',
  pattern: /twilio_sid_token/,
  confidence: 'low',
},
{
  name: 'Generic - 1754',
  pattern: /twitter_api_secret/,
  confidence: 'high',
},
{
  name: 'Generic - 1755',
  pattern: /twitter_bearer_token/,
  confidence: 'high',
},
{
  name: 'Generic - 1756',
  pattern: /spotify_access_token/,
  confidence: 'high',
},
{
  name: 'Generic - 1757',
  pattern: /stripe_key_live/,
  confidence: 'high',
},
{
  name: 'Generic - 1758',
  pattern: /wakatime_api_key/,
  confidence: 'high',
},
{
  name: 'Generic - 1759',
  pattern: /wompi_auth_bearer_sb/,
  confidence: 'high',
},
{
  name: 'Generic - 1760',
  pattern: /wompi_auth_bearer_live/,
  confidence: 'high',
},
{
  name: 'Generic - 1761',
  pattern: /wpengine_api_key/,
  confidence: 'high',
},
{
  name: 'Generic - 1762',
  pattern: /zapier_webhook/,
  confidence: 'low',
},
{
  name: 'Generic - 1763',
  pattern: /zendesk_access_token/,
  confidence: 'high',
},
{
  name: 'Generic - 1764',
  pattern: /ssh-rsa/,
  confidence: 'high',
},
{
  name: 'Generic - 1765',
  pattern: /s3-[a-z0-9-]+\.amazonaws\.com\/[a-z0-9._-]+/,
  confidence: 'low',
},
{
  name: 'Generic Secret',
  pattern: /[sS][eE][cC][rR][eE][tT].*[''|"][0-9a-zA-Z]{32,45}[''|"]/,
  confidence: 'low',
},
{
  name: 'Generic webhook secret',
  pattern: /(webhook).+(secret|token|key).+/,
  confidence: 'low',
},
{
  name: 'Gengo',
  pattern: /(?:gengo).{0,40}([ ]{0,1}[0-9a-zA-Z[]-(){}|_^@$=~]{64}[ \r\n]{1})/,
  confidence: 'high',
},
{
  name: 'Geoapify',
  pattern: /(?:geoapify).{0,40}\b([a-z0-9]{32})\b/,
  confidence: 'high',
},
{
  name: 'Geocode',
  pattern: /(?:geocode).{0,40}\b([a-z0-9]{28})\b/,
  confidence: 'high',
},
{
  name: 'Geocodify',
  pattern: /(?:geocodify).{0,40}\b([0-9a-z]{40})\b/,
  confidence: 'high',
},
{
  name: 'Geocodio - 2',
  pattern: /(?:geocod).{0,40}\b([a-z0-9]{39})\b/,
  confidence: 'high',
},
{
  name: 'Geoipifi',
  pattern: /(?:ipifi).{0,40}\b([a-z0-9A-Z_]{32})\b/,
  confidence: 'high',
},
{
  name: 'Getemail',
  pattern: /(?:getemail).{0,40}\b([a-zA-Z0-9-]{20})\b/,
  confidence: 'high',
},
{
  name: 'Getemails - 1',
  pattern: /(?:getemails).{0,40}\b([a-z0-9-]{26})\b/,
  confidence: 'high',
},
{
  name: 'Getemails - 2',
  pattern: /(?:getemails).{0,40}\b([a-z0-9-]{18})\b/,
  confidence: 'high',
},
{
  name: 'Getgeoapi',
  pattern: /(?:getgeoapi).{0,40}\b([0-9a-z]{40})\b/,
  confidence: 'high',
},
{
  name: 'Getgist',
  pattern: /(?:getgist).{0,40}\b([a-z0-9A-Z+=]{68})/,
  confidence: 'high',
},
{
  name: 'Getsandbox - 1',
  pattern: /(?:getsandbox).{0,40}\b([a-z0-9-]{40})\b/,
  confidence: 'high',
},
{
  name: 'Getsandbox - 2',
  pattern: /(?:getsandbox).{0,40}\b([a-z0-9-]{15,30})\b/,
  confidence: 'high',
},
{
  name: 'GitHub',
  pattern: /[gG][iI][tT][hH][uU][bB].*[''|"][0-9a-zA-Z]{35,40}[''|"]/,
  confidence: 'low',
},
{
  name: 'Github - 2',
  pattern: /\b((?:ghp|gho|ghu|ghs|ghr)_[a-zA-Z0-9]{36,255}\b)/,
  confidence: 'high',
},
{
  name: 'Github App Token',
  pattern: /(ghu|ghs)_[0-9a-zA-Z]{36}/,
  confidence: 'high',
},
{
  name: 'Github OAuth Access Token',
  pattern: /gho_[0-9a-zA-Z]{36}/,
  confidence: 'high',
},
{
  name: 'Github Personal Access Token',
  pattern: /ghp_[0-9a-zA-Z]{36}/,
  confidence: 'high',
},
{
  name: 'Github Refresh Token',
  pattern: /ghr_[0-9a-zA-Z]{76}/,
  confidence: 'high',
},
{
  name: 'Github_old',
  pattern: /(?:github)[^.].{0,40}[ =:'"]+([a-f0-9]{40})\b/,
  confidence: 'high',
},
{
  name: 'Githubapp - 1',
  pattern: /(?:github).{0,40}\b([0-9]{6})\b/,
  confidence: 'low',
},
{
  name: 'Githubapp - 2',
  pattern: /(?:github).{0,40}(-----BEGIN RSA PRIVATE KEY-----\s[A-Za-z0-9+/\s]*\s-----END RSA PRIVATE KEY-----)/,
  confidence: 'high',
},
{
  name: 'Gitlab',
  pattern: /(?:gitlab).{0,40}\b([a-zA-Z0-9\-=_]{20,22})\b/,
  confidence: 'low',
},
{
  name: 'Gitlabv2',
  pattern: /\b(glpat-[a-zA-Z0-9\-=_]{20,22})\b/,
  confidence: 'high',
},
{
  name: 'Gitter',
  pattern: /(?:gitter).{0,40}\b([a-z0-9-]{40})\b/,
  confidence: 'high',
},
{
  name: 'Glassnode',
  pattern: /(?:glassnode).{0,40}\b([0-9A-Za-z]{27})\b/,
  confidence: 'high',
},
{
  name: 'Gocanvas - 1',
  pattern: /(?:gocanvas).{0,40}\b([0-9A-Za-z/+]{43}=[ \r\n]{1})/,
  confidence: 'high',
},
{
  name: 'Gocanvas - 2',
  pattern: /(?:gocanvas).{0,40}\b([\w.-]+@[\w-]+\.[\w.-]{2,5})\b/,
  confidence: 'high',
},
{
  name: 'Gocardless',
  pattern: /\b(live_[0-9A-Za-z_-]{40}[ "'\r\n]{1})/,
  confidence: 'high',
},
{
  name: 'Goodday',
  pattern: /(?:goodday).{0,40}\b([a-z0-9]{32})\b/,
  confidence: 'high',
},
{
  name: 'Google (GCP) Service Account',
  pattern: /"type": "service_account"/,
  confidence: 'high',
},
{
  name: 'Google API Key',
  pattern: /AIza[0-9a-z-_]{35}/,
  confidence: 'high',
},
{
  name: 'Google Calendar URI',
  pattern: /https:\/\/www\.google\.com\/calendar\/embed\?src=[A-Za-z0-9%@&;=\-_./]+/,
  confidence: 'high',
},
{
  name: 'Google OAuth Access Token',
  pattern: /ya29\.[0-9A-Za-z\-_]+/,
  confidence: 'high',
},
{
  name: 'Graphcms - 1',
  pattern: /(?:graph).{0,40}\b([a-z0-9]{25})\b/,
  confidence: 'high',
},
{
  name: 'Graphcms - 2',
  pattern: /\b(ey[a-zA-Z0-9]{73}.ey[a-zA-Z0-9]{365}.[a-zA-Z0-9_-]{683})\b/,
  confidence: 'high',
},
{
  name: 'Graphhopper',
  pattern: /(?:graphhopper).{0,40}\b([a-z0-9-]{36})\b/,
  confidence: 'high',
},
{
  name: 'Groovehq',
  pattern: /(?:groove).{0,40}\b([a-z0-9A-Z]{64})/,
  confidence: 'high',
},
{
  name: 'Guru - 1',
  pattern: /(?:guru).{0,40}\b([a-zA-Z0-9]{3,20}@[a-zA-Z0-9]{2,12}.[a-zA-Z0-9]{2,5})\b/,
  confidence: 'high',
},
{
  name: 'Guru - 2',
  pattern: /(?:guru).{0,40}\b([a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12})\b/,
  confidence: 'high',
},
{
  name: 'Gyazo',
  pattern: /(?:gyazo).{0,40}\b([0-9A-Za-z-]{43})\b/,
  confidence: 'high',
},
{
  name: 'Happi',
  pattern: /(?:happi).{0,40}\b([a-zA-Z0-9]{56})/,
  confidence: 'high',
},
{
  name: 'Happyscribe',
  pattern: /(?:happyscribe).{0,40}\b([0-9a-zA-Z]{24})\b/,
  confidence: 'high',
},
{
  name: 'Harvest - 1',
  pattern: /(?:harvest).{0,40}\b([a-z0-9A-Z._]{97})\b/,
  confidence: 'high',
},
{
  name: 'Harvest - 2',
  pattern: /(?:harvest).{0,40}\b([0-9]{4,9})\b/,
  confidence: 'low',
},
{
  name: 'Hellosign',
  pattern: /(?:hellosign).{0,40}\b([a-zA-Z-0-9/+]{64})\b/,
  confidence: 'high',
},
{
  name: 'Helpcrunch',
  pattern: /(?:helpcrunch).{0,40}\b([a-zA-Z-0-9+/=]{328})/,
  confidence: 'high',
},
{
  name: 'Helpscout',
  pattern: /(?:helpscout).{0,40}\b([A-Za-z0-9]{56})\b/,
  confidence: 'high',
},
{
  name: 'Hereapi',
  pattern: /(?:hereapi).{0,40}\b([a-zA-Z0-9\S]{43})\b/,
  confidence: 'high',
},
{
  name: 'Heroku',
  pattern: /(?:heroku).{0,40}\b([0-9Aa-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})\b/,
  confidence: 'high',
},
{
  name: 'Hive - 1',
  pattern: /(?:hive).{0,40}\b([0-9a-z]{32})\b/,
  confidence: 'low',
},
{
  name: 'Hive - 2',
  pattern: /(?:hive).{0,40}\b([0-9A-Za-z]{17})\b/,
  confidence: 'high',
},
{
  name: 'Hiveage',
  pattern: /(?:hiveage).{0,40}\b([0-9A-Za-z_-]{20})\b/,
  confidence: 'high',
},
{
  name: 'Holidayapi',
  pattern: /(?:holidayapi).{0,40}\b([a-z0-9-]{36})\b/,
  confidence: 'high',
},
{
  name: 'Host',
  pattern: /(?:host).{0,40}\b([a-z0-9]{14})\b/,
  confidence: 'low',
},
{
  name: 'Html2pdf',
  pattern: /(?:html2pdf).{0,40}\b([a-zA-Z0-9]{64})\b/,
  confidence: 'high',
},
{
  name: 'Hubspotapikey',
  pattern: /(?:hubspot).{0,40}\b([A-Za-z0-9]{8}-[A-Za-z0-9]{4}-[A-Za-z0-9]{4}-[A-Za-z0-9]{4}-[A-Za-z0-9]{12})\b/,
  confidence: 'high',
},
{
  name: 'Humanity',
  pattern: /(?:humanity).{0,40}\b([0-9a-z]{40})\b/,
  confidence: 'high',
},
{
  name: 'Hunter',
  pattern: /(?:hunter).{0,40}\b([a-z0-9_-]{40})\b/,
  confidence: 'low',
},
{
  name: 'Hypertrack - 1',
  pattern: /(?:hypertrack).{0,40}\b([0-9a-zA-Z_-]{54})\b/,
  confidence: 'high',
},
{
  name: 'Hypertrack - 2',
  pattern: /(?:hypertrack).{0,40}\b([0-9a-zA-Z_-]{27})\b/,
  confidence: 'high',
},
{
  name: 'Ibmclouduserkey',
  pattern: /(?:ibm).{0,40}\b([A-Za-z0-9_-]{44})\b/,
  confidence: 'high',
},
{
  name: 'Iconfinder',
  pattern: /(?:iconfinder).{0,40}\b([a-zA-Z0-9]{64})\b/,
  confidence: 'high',
},
{
  name: 'Iexcloud',
  pattern: /(?:iexcloud).{0,40}\b([a-z0-9_]{35})\b/,
  confidence: 'high',
},
{
  name: 'Imagekit',
  pattern: /(?:imagekit).{0,40}\b([a-zA-Z0-9_=]{36})/,
  confidence: 'high',
},
{
  name: 'Imagga',
  pattern: /(?:imagga).{0,40}\b([a-z0-9A-Z=]{72})/,
  confidence: 'high',
},
{
  name: 'Impala',
  pattern: /(?:impala).{0,40}\b([0-9A-Za-z_]{46})\b/,
  confidence: 'high',
},
{
  name: 'Insightly',
  pattern: /(?:insightly).{0,40}\b([a-z0-9-]{36})\b/,
  confidence: 'high',
},
{
  name: 'Integromat',
  pattern: /(?:integromat).{0,40}\b([a-z0-9-]{36})\b/,
  confidence: 'high',
},
{
  name: 'Intercom',
  pattern: /(?:intercom).{0,40}\b([a-zA-Z0-9\W\S]{59}=)/,
  confidence: 'low',
},
{
  name: 'Intrinio',
  pattern: /(?:intrinio).{0,40}\b([a-zA-Z0-9]{44})\b/,
  confidence: 'high',
},
{
  name: 'Invoiceocean - 1',
  pattern: /(?:invoiceocean).{0,40}\b([0-9A-Za-z]{20})\b/,
  confidence: 'high',
},
{
  name: 'Invoiceocean - 2',
  pattern: /\b([0-9a-z]{1,}.invoiceocean.com)\b/,
  confidence: 'high',
},
{
  name: 'Ipapi',
  pattern: /(?:ipapi).{0,40}\b([a-z0-9]{32})\b/,
  confidence: 'high',
},
{
  name: 'Ipgeolocation',
  pattern: /(?:ipgeolocation).{0,40}\b([a-z0-9]{32})\b/,
  confidence: 'high',
},
{
  name: 'Ipify',
  pattern: /(?:ipify).{0,40}\b([a-zA-Z0-9_-]{32})\b/,
  confidence: 'high',
},
{
  name: 'Ipinfodb',
  pattern: /(?:ipinfodb).{0,40}\b([a-z0-9]{64})\b/,
  confidence: 'high',
},
{
  name: 'Ipquality',
  pattern: /(?:ipquality).{0,40}\b([0-9a-z]{32})\b/,
  confidence: 'high',
},
{
  name: 'Ipstack',
  pattern: /(?:ipstack).{0,40}\b([a-fA-f0-9]{32})\b/,
  confidence: 'high',
},
{
  name: 'JDBC Connection String',
  pattern: /jdbc:[a-z:]+:\/\/[A-Za-z0-9.\-_:;=/@?,&]+/,
  confidence: 'high',
},
{
  name: 'Jiratoken - 1',
  pattern: /(?:jira).{0,40}\b([a-zA-Z-0-9]{24})\b/,
  confidence: 'high',
},
{
  name: 'Jiratoken - 2',
  pattern: /(?:jira).{0,40}\b([a-zA-Z-0-9]{5,24}@[a-zA-Z-0-9]{3,16}\.com)\b/,
  confidence: 'high',
},
{
  name: 'Jiratoken - 3',
  pattern: /(?:jira).{0,40}\b([a-zA-Z-0-9]{5,24}\.[a-zA-Z-0-9]{3,16}\.[a-zA-Z-0-9]{3,16})\b/,
  confidence: 'low',
},
{
  name: 'Jotform',
  pattern: /(?:jotform).{0,40}\b([0-9Aa-z]{32})\b/,
  confidence: 'high',
},
{
  name: 'Jumpcloud',
  pattern: /(?:jumpcloud).{0,40}\b([a-zA-Z0-9]{40})\b/,
  confidence: 'high',
},
{
  name: 'Juro',
  pattern: /(?:juro).{0,40}\b([a-zA-Z0-9]{40})\b/,
  confidence: 'high',
},
{
  name: 'Kanban - 1',
  pattern: /(?:kanban).{0,40}\b([0-9A-Z]{12})\b/,
  confidence: 'high',
},
{
  name: 'Kanban - 2',
  pattern: /\b([0-9a-z]{1,}.kanbantool.com)\b/,
  confidence: 'high',
},
{
  name: 'Karmacrm',
  pattern: /(?:karma).{0,40}\b([a-zA-Z0-9]{20})\b/,
  confidence: 'high',
},
{
  name: 'Keenio - 1',
  pattern: /(?:keen).{0,40}\b([0-9a-z]{24})\b/,
  confidence: 'high',
},
{
  name: 'Keenio - 2',
  pattern: /(?:keen).{0,40}\b([0-9A-Z]{64})\b/,
  confidence: 'high',
},
{
  name: 'Kickbox',
  pattern: /(?:kickbox).{0,40}\b([a-zA-Z0-9_]+[a-zA-Z0-9]{64})\b/,
  confidence: 'high',
},
{
  name: 'Klipfolio',
  pattern: /(?:klipfolio).{0,40}\b([0-9a-f]{40})\b/,
  confidence: 'high',
},
{
  name: 'Kontent',
  pattern: /(?:kontent).{0,40}\b([a-z0-9-]{36})\b/,
  confidence: 'high',
},
{
  name: 'Kraken - 1',
  pattern: /(?:kraken).{0,40}\b([0-9A-Za-z/+=]{56}[ "'\r\n]{1})/,
  confidence: 'high',
},
{
  name: 'Kraken - 2',
  pattern: /(?:kraken).{0,40}\b([0-9A-Za-z/+=]{86,88}[ "'\r\n]{1})/,
  confidence: 'high',
},
{
  name: 'Kucoin - 1',
  pattern: /(?:kucoin).{0,40}([ \r\n]{1}[!-~]{7,32}[ \r\n]{1})/,
  confidence: 'high',
},
{
  name: 'Kucoin - 2',
  pattern: /(?:kucoin).{0,40}\b([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})\b/,
  confidence: 'high',
},
{
  name: 'Kucoin - 3',
  pattern: /(?:kucoin).{0,40}\b([0-9a-f]{24})\b/,
  confidence: 'high',
},
{
  name: 'Kylas',
  pattern: /(?:kylas).{0,40}\b([a-z0-9-]{36})\b/,
  confidence: 'high',
},
{
  name: 'Languagelayer',
  pattern: /(?:languagelayer).{0,40}\b([a-z0-9]{32})\b/,
  confidence: 'high',
},
{
  name: 'Lastfm',
  pattern: /(?:lastfm).{0,40}\b([0-9a-z]{32})\b/,
  confidence: 'high',
},
{
  name: 'Launchdarkly',
  pattern: /(?:launchdarkly).{0,40}\b([a-z0-9-]{40})\b/,
  confidence: 'high',
},
{
  name: 'Leadfeeder',
  pattern: /(?:leadfeeder).{0,40}\b([a-zA-Z0-9-]{43})\b/,
  confidence: 'high',
},
{
  name: 'Lendflow',
  pattern: /(?:lendf'low').{0,40}\b([a-zA-Z0-9]{36}\.[a-zA-Z0-9]{235}\.[a-zA-Z0-9]{32}-[a-zA-Z0-9]{47}-[a-zA-Z0-9_]{162}-[a-zA-Z0-9]{42}-[a-zA-Z0-9_]{40}-[a-zA-Z0-9_]{66}-[a-zA-Z0-9_]{59}-[a-zA-Z0-9]{7}-[a-zA-Z0-9_]{220})\b/,
  confidence: 'high',
},
{
  name: 'Lessannoyingcrm',
  pattern: /(?:less).{0,40}\b([a-zA-Z0-9-]{57})\b/,
  confidence: 'low',
},
{
  name: 'Lexigram',
  pattern: /(?:lexigram).{0,40}\b([a-zA-Z0-9\S]{301})\b/,
  confidence: 'high',
},
{
  name: 'Linearapi',
  pattern: /\b(lin_api_[0-9A-Za-z]{40})\b/,
  confidence: 'high',
},
{
  name: 'Linemessaging',
  pattern: /(?:line).{0,40}\b([A-Za-z0-9+/]{171,172})\b/,
  confidence: 'high',
},
{
  name: 'Linenotify',
  pattern: /(?:linenotify).{0,40}\b([0-9A-Za-z]{43})\b/,
  confidence: 'high',
},
{
  name: 'Linkpreview',
  pattern: /(?:linkpreview).{0,40}\b([a-zA-Z0-9]{32})\b/,
  confidence: 'high',
},
{
  name: 'Liveagent',
  pattern: /(?:liveagent).{0,40}\b([a-zA-Z0-9]{32})\b/,
  confidence: 'high',
},
{
  name: 'Livestorm',
  pattern: /(?:livestorm).{0,40}\b(eyJhbGciOiJIUzI1NiJ9\.eyJhdWQiOiJhcGkubGl2ZXN0b3JtLmNvIiwianRpIjoi[0-9A-Z-a-z]{134}\.[0-9A-Za-z\-_]{43}[\r\n]{1})/,
  confidence: 'high',
},
{
  name: 'Locationiq',
  pattern: /\b(pk\.[a-zA-Z-0-9]{32})\b/,
  confidence: 'high',
},
{
  name: 'Loginradius',
  pattern: /(?:loginradius).{0,40}\b([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})\b/,
  confidence: 'high',
},
{
  name: 'Lokalisetoken',
  pattern: /(?:lokalise).{0,40}\b([a-z0-9]{40})\b/,
  confidence: 'high',
},
{
  name: 'Loyverse',
  pattern: /(?:loyverse).{0,40}\b([0-9-a-z]{32})\b/,
  confidence: 'high',
},
{
  name: 'Luno - 1',
  pattern: /(?:luno).{0,40}\b([a-z0-9]{13})\b/,
  confidence: 'high',
},
{
  name: 'Luno - 2',
  pattern: /(?:luno).{0,40}\b([a-zA-Z0-9_-]{43})\b/,
  confidence: 'high',
},
{
  name: 'M3o',
  pattern: /(?:m3o).{0,40}\b([0-9A-Za-z]{48})\b/,
  confidence: 'low',
},
{
  name: 'Macaddress',
  pattern: /(?:macaddress).{0,40}\b([a-zA-Z0-9_]{32})\b/,
  confidence: 'high',
},
{
  name: 'Madkudu',
  pattern: /(?:madkudu).{0,40}\b([0-9a-f]{32})\b/,
  confidence: 'high',
},
{
  name: 'Magnetic',
  pattern: /(?:magnetic).{0,40}\b([0-9Aa-z]{8}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{12})\b/,
  confidence: 'high',
},
{
  name: 'MailChimp API Key',
  pattern: /[0-9a-f]{32}-us[0-9]{1,2}/,
  confidence: 'high',
},
{
  name: 'Mailboxlayer',
  pattern: /(?:mailboxlayer).{0,40}\b([a-z0-9]{32})\b/,
  confidence: 'high',
},
{
  name: 'Mailerlite',
  pattern: /(?:mailerlite).{0,40}\b([a-z0-9]{32})\b/,
  confidence: 'high',
},
{
  name: 'Mailgun - 2',
  pattern: /(?:mailgun).{0,40}\b([a-zA-Z-0-9]{72})\b/,
  confidence: 'high',
},
{
  name: 'Mailgun API Key - 1',
  pattern: /key-[0-9a-zA-Z]{32}/,
  confidence: 'high',
},
{
  name: 'Mailgun API key - 2',
  pattern: /(mailgun|mg)[0-9a-z]{32}/,
  confidence: 'low',
},
{
  name: 'Mailjetbasicauth',
  pattern: /(?:mailjet).{0,40}\b([A-Za-z0-9]{87}=)/,
  confidence: 'high',
},
{
  name: 'Mailjetsms',
  pattern: /(?:mailjet).{0,40}\b([A-Za-z0-9]{32})\b/,
  confidence: 'high',
},
{
  name: 'Mailmodo',
  pattern: /(?:mailmodo).{0,40}\b([A-Z0-9]{7}-[A-Z0-9]{7}-[A-Z0-9]{7}-[A-Z0-9]{7})\b/,
  confidence: 'high',
},
{
  name: 'Mailsac',
  pattern: /(?:mailsac).{0,40}\b(k_[0-9A-Za-z]{36,})\b/,
  confidence: 'high',
},
{
  name: 'Mandrill',
  pattern: /(?:mandrill).{0,40}\b([A-Za-z0-9_-]{22})\b/,
  confidence: 'high',
},
{
  name: 'Manifest',
  pattern: /(?:manifest).{0,40}\b([a-zA-z0-9]{32})\b/,
  confidence: 'low',
},
{
  name: 'Mapbox - 2',
  pattern: /\b(sk\.[a-zA-Z-0-9.]{80,240})\b/,
  confidence: 'high',
},
{
  name: 'Mapquest',
  pattern: /(?:mapquest).{0,40}\b([0-9A-Za-z]{32})\b/,
  confidence: 'high',
},
{
  name: 'Marketstack',
  pattern: /(?:marketstack).{0,40}\b([a-z0-9]{32})\b/,
  confidence: 'high',
},
{
  name: 'Mattermostpersonaltoken - 1',
  pattern: /(?:mattermost).{0,40}\b([A-Za-z0-9-_]{1,}.cloud.mattermost.com)\b/,
  confidence: 'high',
},
{
  name: 'Mattermostpersonaltoken - 2',
  pattern: /(?:mattermost).{0,40}\b([a-z0-9]{26})\b/,
  confidence: 'high',
},
{
  name: 'Mavenlink',
  pattern: /(?:mavenlink).{0,40}\b([0-9a-z]{64})\b/,
  confidence: 'high',
},
{
  name: 'Maxmindlicense - 1',
  pattern: /(?:maxmind|geoip).{0,40}\b([0-9A-Za-z]{16})\b/,
  confidence: 'high',
},
{
  name: 'Maxmindlicense - 2',
  pattern: /(?:maxmind|geoip).{0,40}\b([0-9]{2,7})\b/,
  confidence: 'high',
},
{
  name: 'Meaningcloud',
  pattern: /(?:meaningcloud).{0,40}\b([a-z0-9]{32})\b/,
  confidence: 'high',
},
{
  name: 'Mediastack',
  pattern: /(?:mediastack).{0,40}\b([a-z0-9]{32})\b/,
  confidence: 'high',
},
{
  name: 'Meistertask',
  pattern: /(?:meistertask).{0,40}\b([a-zA-Z0-9]{43})\b/,
  confidence: 'high',
},
{
  name: 'Mesibo',
  pattern: /(?:mesibo).{0,40}\b([0-9A-Za-z]{64})\b/,
  confidence: 'high',
},
{
  name: 'Messagebird',
  pattern: /(?:messagebird).{0,40}\b([A-Za-z0-9_-]{25})\b/,
  confidence: 'high',
},
{
  name: 'Metaapi - 1',
  pattern: /(?:metaapi|meta-api).{0,40}\b([0-9a-f]{64})\b/,
  confidence: 'high',
},
{
  name: 'Metaapi - 2',
  pattern: /(?:metaapi|meta-api).{0,40}\b([0-9a-f]{24})\b/,
  confidence: 'high',
},
{
  name: 'Metrilo',
  pattern: /(?:metrilo).{0,40}\b([a-z0-9]{16})\b/,
  confidence: 'high',
},
{
  name: 'Microsoft Teams Webhook',
  pattern: /https:\/\/outlook\.office\.com\/webhook\/[A-Za-z0-9\-@]+\/IncomingWebhook\/[A-Za-z0-9-]+\/[A-Za-z0-9-]+/,
  confidence: 'low',
},
{
  name: 'Microsoftteamswebhook',
  pattern: /(https:\/\/[a-zA-Z-0-9]+\.webhook\.office\.com\/webhookb2\/[a-zA-Z-0-9]{8}-[a-zA-Z-0-9]{4}-[a-zA-Z-0-9]{4}-[a-zA-Z-0-9]{4}-[a-zA-Z-0-9]{12}@[a-zA-Z-0-9]{8}-[a-zA-Z-0-9]{4}-[a-zA-Z-0-9]{4}-[a-zA-Z-0-9]{4}-[a-zA-Z-0-9]{12}\/IncomingWebhook\/[a-zA-Z-0-9]{32}\/[a-zA-Z-0-9]{8}-[a-zA-Z-0-9]{4}-[a-zA-Z-0-9]{4}-[a-zA-Z-0-9]{4}-[a-zA-Z-0-9]{12})/,
  confidence: 'high',
},
{
  name: 'Midise',
  pattern: /midi-662b69edd2[a-zA-Z0-9]{54}/,
  confidence: 'high',
},
{
  name: 'Mindmeister',
  pattern: /(?:mindmeister).{0,40}\b([a-zA-Z0-9]{43})\b/,
  confidence: 'high',
},
{
  name: 'Mite - 1',
  pattern: /(?:mite).{0,40}\b([0-9a-z]{16})\b/,
  confidence: 'high',
},
{
  name: 'Mite - 2',
  pattern: /\b([0-9a-z-]{1,}.mite.yo.lk)\b/,
  confidence: 'high',
},
{
  name: 'Mixmax',
  pattern: /(?:mixmax).{0,40}\b([a-zA-Z0-9_-]{36})\b/,
  confidence: 'high',
},
{
  name: 'Mixpanel - 1',
  pattern: /(?:mixpanel).{0,40}\b([a-zA-Z0-9.-]{30,40})\b/,
  confidence: 'high',
},
{
  name: 'Mixpanel - 2',
  pattern: /(?:mixpanel).{0,40}\b([a-zA-Z0-9-]{32})\b/,
  confidence: 'high',
},
{
  name: 'Moderation',
  pattern: /(?:moderation).{0,40}\b([a-zA-Z0-9]{36}\.[a-zA-Z0-9]{115}\.[a-zA-Z0-9_]{43})\b/,
  confidence: 'high',
},
{
  name: 'Monday',
  pattern: /(?:monday).{0,40}\b(ey[a-zA-Z0-9_.]{210,225})\b/,
  confidence: 'high',
},
{
  name: 'Moonclerck',
  pattern: /(?:moonclerck).{0,40}\b([0-9a-z]{32})\b/,
  confidence: 'high',
},
{
  name: 'Moonclerk',
  pattern: /(?:moonclerk).{0,40}\b([0-9a-z]{32})\b/,
  confidence: 'high',
},
{
  name: 'Moosend',
  pattern: /(?:moosend).{0,40}\b([0-9Aa-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})\b/,
  confidence: 'high',
},
{
  name: 'Mrticktock - 1',
  pattern: /(?:mrticktock).{0,40}\b([a-zA-Z0-9!=@#$%()_^]{1,50})/,
  confidence: 'high',
},
{
  name: 'Myfreshworks - 2',
  pattern: /(?:freshworks).{0,40}\b([a-z0-9A-Z-]{22})\b/,
  confidence: 'low',
},
{
  name: 'Myintervals',
  pattern: /(?:myintervals).{0,40}\b([0-9a-z]{11})\b/,
  confidence: 'high',
},
{
  name: 'Nasdaqdatalink',
  pattern: /(?:nasdaq).{0,40}\b([a-zA-Z0-9_-]{20})\b/,
  confidence: 'high',
},
{
  name: 'Nethunt - 1',
  pattern: /(?:nethunt).{0,40}\b([a-zA-Z0-9.-@]{25,30})\b/,
  confidence: 'high',
},
{
  name: 'Nethunt - 2',
  pattern: /(?:nethunt).{0,40}\b([a-z0-9-\S]{36})\b/,
  confidence: 'high',
},
{
  name: 'Netlify',
  pattern: /(?:netlify).{0,40}\b([A-Za-z0-9_-]{43,45})\b/,
  confidence: 'high',
},
{
  name: 'Neutrinoapi - 1',
  pattern: /(?:neutrinoapi).{0,40}\b([a-zA-Z0-9]{48})\b/,
  confidence: 'high',
},
{
  name: 'Neutrinoapi - 2',
  pattern: /(?:neutrinoapi).{0,40}\b([a-zA-Z0-9]{6,24})\b/,
  confidence: 'high',
},
{
  name: 'Newrelic Admin API Key',
  pattern: /NRAA-[a-f0-9]{27}/,
  confidence: 'high',
},
{
  name: 'Newrelic Insights API Key',
  pattern: /NRI(?:I|Q)-[A-Za-z0-9\-_]{32}/,
  confidence: 'high',
},
{
  name: 'Newrelic REST API Key',
  pattern: /NRRA-[a-f0-9]{42}/,
  confidence: 'high',
},
{
  name: 'Newrelic Synthetics Location Key',
  pattern: /NRSP-[a-z]{2}[0-9]{2}[a-f0-9]{31}/,
  confidence: 'high',
},
{
  name: 'Newrelicpersonalapikey',
  pattern: /(?:newrelic).{0,40}\b([A-Za-z0-9_.]{4}-[A-Za-z0-9_.]{42})\b/,
  confidence: 'high',
},
{
  name: 'Newsapi',
  pattern: /(?:newsapi).{0,40}\b([a-z0-9]{32})/,
  confidence: 'high',
},
{
  name: 'Newscatcher',
  pattern: /(?:newscatcher).{0,40}\b([0-9A-Za-z_]{43})\b/,
  confidence: 'high',
},
{
  name: 'Nexmoapikey - 1',
  pattern: /(?:nexmo).{0,40}\b([A-Za-z0-9_-]{8})\b/,
  confidence: 'high',
},
{
  name: 'Nexmoapikey - 2',
  pattern: /(?:nexmo).{0,40}\b([A-Za-z0-9_-]{16})\b/,
  confidence: 'high',
},
{
  name: 'Nftport',
  pattern: /(?:nftport).{0,40}\b([a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12})\b/,
  confidence: 'high',
},
{
  name: 'Nicereply',
  pattern: /(?:nicereply).{0,40}\b([0-9a-f]{40})\b/,
  confidence: 'high',
},
{
  name: 'Nimble',
  pattern: /(?:nimble).{0,40}\b([a-zA-Z0-9]{30})\b/,
  confidence: 'high',
},
{
  name: 'Nitro',
  pattern: /(?:nitro).{0,40}\b([0-9a-f]{32})\b/,
  confidence: 'high',
},
{
  name: 'Noticeable',
  pattern: /(?:noticeable).{0,40}\b([0-9a-zA-Z]{20})\b/,
  confidence: 'high',
},
{
  name: 'Notion',
  pattern: /\b(secret_[A-Za-z0-9]{43})\b/,
  confidence: 'high',
},
{
  name: 'Nozbeteams',
  pattern: /(?:nozbe|nozbeteams).{0,40}\b([0-9A-Za-z]{16}_[0-9A-Za-z\-_]{64}[ \r\n]{1})/,
  confidence: 'high',
},
{
  name: 'Numverify',
  pattern: /(?:numverify).{0,40}\b([a-z0-9]{32})\b/,
  confidence: 'high',
},
{
  name: 'Nutritionix - 1',
  pattern: /(?:nutritionix).{0,40}\b([a-z0-9]{32})\b/,
  confidence: 'high',
},
{
  name: 'Nutritionix - 2',
  pattern: /(?:nutritionix).{0,40}\b([a-z0-9]{8})\b/,
  confidence: 'high',
},
{
  name: 'Nylas',
  pattern: /(?:nylas).{0,40}\b([0-9A-Za-z]{30})\b/,
  confidence: 'high',
},
{
  name: 'Nytimes',
  pattern: /(?:nytimes).{0,40}\b([a-z0-9A-Z-]{32})\b/,
  confidence: 'low',
},
{
  name: 'Oanda',
  pattern: /(?:oanda).{0,40}\b([a-zA-Z0-9]{24})\b/,
  confidence: 'high',
},
{
  name: 'Omnisend',
  pattern: /(?:omnisend).{0,40}\b([a-z0-9A-Z-]{75})\b/,
  confidence: 'high',
},
{
  name: 'Onedesk - 1',
  pattern: /(?:onedesk).{0,40}\b([a-zA-Z0-9!=@#$%^]{8,64})/,
  confidence: 'high',
},
{
  name: 'Onelogin - 2',
  pattern: /secret[a-zA-Z0-9_' "=]{0,20}([a-z0-9]{64})/,
  confidence: 'high',
},
{
  name: 'Onepagecrm - 1',
  pattern: /(?:onepagecrm).{0,40}\b([a-zA-Z0-9=]{44})/,
  confidence: 'high',
},
{
  name: 'Onepagecrm - 2',
  pattern: /(?:onepagecrm).{0,40}\b([a-z0-9]{24})\b/,
  confidence: 'high',
},
{
  name: 'Onwaterio',
  pattern: /(?:onwater).{0,40}\b([a-zA-Z0-9_-]{20})\b/,
  confidence: 'high',
},
{
  name: 'Oopspam',
  pattern: /(?:oopspam).{0,40}\b([a-zA-Z0-9]{40})\b/,
  confidence: 'high',
},
{
  name: 'Opencagedata',
  pattern: /(?:opencagedata).{0,40}\b([a-z0-9]{32})\b/,
  confidence: 'high',
},
{
  name: 'Opengraphr',
  pattern: /(?:opengraphr).{0,40}\b([0-9Aa-zA-Z]{80})\b/,
  confidence: 'high',
},
{
  name: 'Openuv',
  pattern: /(?:openuv).{0,40}\b([0-9a-z]{32})\b/,
  confidence: 'high',
},
{
  name: 'Openweather',
  pattern: /(?:openweather).{0,40}\b([a-z0-9]{32})\b/,
  confidence: 'high',
},
{
  name: 'Optimizely',
  pattern: /(?:optimizely).{0,40}\b([0-9A-Za-z-:]{54})\b/,
  confidence: 'high',
},
{
  name: 'Owlbot',
  pattern: /(?:owlbot).{0,40}\b([a-z0-9]{40})\b/,
  confidence: 'high',
},
{
  name: 'PGP private key block',
  pattern: /-----BEGIN PGP PRIVATE KEY BLOCK-----/,
  confidence: 'high',
},
{
  name: 'Pagerdutyapikey',
  pattern: /(?:pagerduty).{0,40}\b([a-z]{1}\+[a-zA-Z]{9}-[a-z]{2}-[a-z0-9]{5})\b/,
  confidence: 'high',
},
{
  name: 'Pandadoc',
  pattern: /(?:pandadoc).{0,40}\b([a-zA-Z0-9]{40})\b/,
  confidence: 'high',
},
{
  name: 'Pandascore',
  pattern: /(?:pandascore).{0,40}([ \r\n]{0,1}[0-9A-Za-z\-_]{51}[ \r\n]{1})/,
  confidence: 'high',
},
{
  name: 'Paralleldots',
  pattern: /(?:paralleldots).{0,40}\b([0-9A-Za-z]{43})\b/,
  confidence: 'high',
},
{
  name: 'Partnerstack',
  pattern: /(?:partnerstack).{0,40}\b([0-9A-Za-z]{64})\b/,
  confidence: 'high',
},
{
  name: 'Passbase',
  pattern: /(?:passbase).{0,40}\b([a-zA-Z0-9]{128})\b/,
  confidence: 'high',
},
{
  name: 'Password in URL',
  pattern: /[a-zA-Z]{3,10}:\/\/[^ /\s:@]{3,20}:[^/\s:@]{3,20}@.{1,100}["''\s]/,
  confidence: 'high',
},
{
  name: 'Pastebin',
  pattern: /(?:pastebin).{0,40}\b([a-zA-Z0-9_]{32})\b/,
  confidence: 'high',
},
{
  name: 'PayPal Braintree access token',
  pattern: /access_token\$production\$[0-9a-z]{16}\$[0-9a-f]{32}/,
  confidence: 'high',
},
{
  name: 'Paymoapp',
  pattern: /(?:paymoapp).{0,40}\b([a-zA-Z0-9]{44})\b/,
  confidence: 'high',
},
{
  name: 'Paymongo',
  pattern: /(?:paymongo).{0,40}\b([a-zA-Z0-9_]{32})\b/,
  confidence: 'high',
},
{
  name: 'Paypaloauth - 1',
  pattern: /\b([A-Za-z0-9_.]{7}-[A-Za-z0-9_.]{72})\b/,
  confidence: 'low',
},
{
  name: 'Paypaloauth - 2',
  pattern: /\b([A-Za-z0-9_.]{69}-[A-Za-z0-9_.]{10})\b/,
  confidence: 'low',
},
{
  name: 'Paystack',
  pattern: /\b(sk_[a-z]{1,}_[A-Za-z0-9]{40})\b/,
  confidence: 'high',
},
{
  name: 'Pdflayer',
  pattern: /(?:pdflayer).{0,40}\b([a-z0-9]{32})\b/,
  confidence: 'high',
},
{
  name: 'Pdfshift',
  pattern: /(?:pdfshift).{0,40}\b([0-9a-f]{32})\b/,
  confidence: 'high',
},
{
  name: 'Peopledatalabs',
  pattern: /(?:peopledatalabs).{0,40}\b([a-z0-9]{64})\b/,
  confidence: 'high',
},
{
  name: 'Pepipost',
  pattern: /(?:pepipost|netcore).{0,40}\b([a-zA-Z-0-9]{32})\b/,
  confidence: 'high',
},
{
  name: 'Picatic API key',
  pattern: /sk_live_[0-9a-z]{32}/,
  confidence: 'high',
},
{
  name: 'Pipedream',
  pattern: /(?:pipedream).{0,40}\b([a-z0-9]{32})\b/,
  confidence: 'high',
},
{
  name: 'Pipedrive',
  pattern: /(?:pipedrive).{0,40}\b([a-zA-Z0-9]{40})\b/,
  confidence: 'high',
},
{
  name: 'Pivotaltracker',
  pattern: /(?:pivotal).{0,40}([a-z0-9]{32})/,
  confidence: 'high',
},
{
  name: 'Pixabay',
  pattern: /(?:pixabay).{0,40}\b([a-z0-9-]{34})\b/,
  confidence: 'high',
},
{
  name: 'Plaidkey - 1',
  pattern: /(?:plaid).{0,40}\b([a-z0-9]{24})\b/,
  confidence: 'high',
},
{
  name: 'Plaidkey - 2',
  pattern: /(?:plaid).{0,40}\b([a-z0-9]{30})\b/,
  confidence: 'high',
},
{
  name: 'Planviewleankit - 1',
  pattern: /(?:planviewleankit|planview).{0,40}\b([0-9a-f]{128})\b/,
  confidence: 'high',
},
{
  name: 'Planviewleankit - 2',
  pattern: /(?:planviewleankit|planview).{0,40}(?:subdomain).\b([a-zA-Z][a-zA-Z0-9.-]{1,23}[a-zA-Z0-9])\b/,
  confidence: 'high',
},
{
  name: 'Planyo',
  pattern: /(?:planyo).{0,40}\b([0-9a-z]{62})\b/,
  confidence: 'high',
},
{
  name: 'Plivo - 1',
  pattern: /(?:plivo).{0,40}\b([A-Za-z0-9_-]{40})\b/,
  confidence: 'high',
},
{
  name: 'Plivo - 2',
  pattern: /(?:plivo).{0,40}\b([A-Z]{20})\b/,
  confidence: 'high',
},
{
  name: 'Poloniex - 1',
  pattern: /(?:poloniex).{0,40}\b([0-9a-f]{128})\b/,
  confidence: 'high',
},
{
  name: 'Poloniex - 2',
  pattern: /(?:poloniex).{0,40}\b([0-9A-Z]{8}-[0-9A-Z]{8}-[0-9A-Z]{8}-[0-9A-Z]{8})\b/,
  confidence: 'high',
},
{
  name: 'Polygon',
  pattern: /(?:polygon).{0,40}\b([a-z0-9A-Z]{32})\b/,
  confidence: 'high',
},
{
  name: 'Positionstack',
  pattern: /(?:positionstack).{0,40}\b([a-zA-Z0-9_]{32})\b/,
  confidence: 'high',
},
{
  name: 'Postageapp',
  pattern: /(?:postageapp).{0,40}\b([0-9A-Za-z]{32})\b/,
  confidence: 'high',
},
{
  name: 'Posthog',
  pattern: /\b(phc_[a-zA-Z0-9_]{43})\b/,
  confidence: 'high',
},
{
  name: 'Postman',
  pattern: /\b(PMAK-[a-zA-Z-0-9]{59})\b/,
  confidence: 'high',
},
{
  name: 'Postmark',
  pattern: /(?:postmark).{0,40}\b([0-9a-z]{8}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{12})\b/,
  confidence: 'high',
},
{
  name: 'Powrbot',
  pattern: /(?:powrbot).{0,40}\b([a-z0-9A-Z]{40})\b/,
  confidence: 'high',
},
{
  name: 'Privatekey',
  pattern: /-----\s*?BEGIN[ A-Z0-9_-]*?PRIVATE KEY\s*?-----[\s\S]*?----\s*?END[A-Z0-9_-]*? PRIVATE KEY\s*?-----/,
  confidence: 'high',
},
{
  name: 'Prospectcrm',
  pattern: /(?:prospect).{0,40}\b([a-z0-9-]{32})\b/,
  confidence: 'high',
},
{
  name: 'Prospectio',
  pattern: /(?:prospect).{0,40}\b([a-z0-9A-Z-]{50})\b/,
  confidence: 'high',
},
{
  name: 'Protocolsio',
  pattern: /(?:protocols).{0,40}\b([a-z0-9]{64})\b/,
  confidence: 'high',
},
{
  name: 'Proxycrawl',
  pattern: /(?:proxycrawl).{0,40}\b([a-zA-Z0-9_]{22})\b/,
  confidence: 'high',
},
{
  name: 'Pubnubpublishkey - 1',
  pattern: /\b(sub-c-[0-9a-z]{8}-[a-z]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12})\b/,
  confidence: 'high',
},
{
  name: 'Pubnubpublishkey - 2',
  pattern: /\b(pub-c-[0-9a-z]{8}-[0-9a-z]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12})\b/,
  confidence: 'high',
},
{
  name: 'Purestake',
  pattern: /(?:purestake).{0,40}\b([a-zA-Z0-9]{40})\b/,
  confidence: 'high',
},
{
  name: 'Pushbulletapikey',
  pattern: /(?:pushbullet).{0,40}\b([A-Za-z0-9_.]{34})\b/,
  confidence: 'high',
},
{
  name: 'Pusherchannelkey - 1',
  pattern: /(?:key).{0,40}\b([a-z0-9]{20})\b/,
  confidence: 'low',
},
{
  name: 'Pusherchannelkey - 2',
  pattern: /(?:pusher).{0,40}\b([a-z0-9]{20})\b/,
  confidence: 'high',
},
{
  name: 'Pusherchannelkey - 3',
  pattern: /(?:pusher).{0,40}\b([0-9]{7})\b/,
  confidence: 'high',
},
{
  name: 'PyPI upload token',
  pattern: /pypi-AgEIcHlwaS5vcmc[A-Za-z0-9-_]{50,1000}/,
  confidence: 'high',
},
{
  name: 'Qualaroo',
  pattern: /(?:qualaroo).{0,40}\b([a-z0-9A-Z=]{64})/,
  confidence: 'high',
},
{
  name: 'Qubole',
  pattern: /(?:qubole).{0,40}\b([0-9a-z]{64})\b/,
  confidence: 'high',
},
{
  name: 'Quickmetrics',
  pattern: /(?:quickmetrics).{0,40}\b([a-zA-Z0-9_-]{22})\b/,
  confidence: 'high',
},
{
  name: 'REDIS_URL',
  pattern: /(REDIS_URL).+/,
  confidence: 'low',
},
{
  name: 'RKCS8',
  pattern: /-----BEGIN PRIVATE KEY-----/,
  confidence: 'high',
},
{
  name: 'RSA private key',
  pattern: /-----BEGIN RSA PRIVATE KEY-----/,
  confidence: 'high',
},
{
  name: 'Rapidapi',
  pattern: /(?:rapidapi).{0,40}\b([A-Za-z0-9_-]{50})\b/,
  confidence: 'high',
},
{
  name: 'Raven',
  pattern: /(?:raven).{0,40}\b([A-Z0-9-]{16})\b/,
  confidence: 'high',
},
{
  name: 'Rawg',
  pattern: /(?:rawg).{0,40}\b([0-9Aa-z]{32})\b/,
  confidence: 'high',
},
{
  name: 'Razorpay - 1',
  pattern: /\brzp_\w{2,6}_\w{10,20}\b/,
  confidence: 'high',
},
{
  name: 'Readme',
  pattern: /(?:readme).{0,40}\b([a-zA-Z0-9_]{32})\b/,
  confidence: 'high',
},
{
  name: 'Reallysimplesystems',
  pattern: /\b(ey[a-zA-Z0-9-._]{153}.ey[a-zA-Z0-9-._]{916,1000})\b/,
  confidence: 'high',
},
{
  name: 'Rebrandly',
  pattern: /(?:rebrandly).{0,40}\b([a-zA-Z0-9_]{32})\b/,
  confidence: 'high',
},
{
  name: 'Refiner',
  pattern: /(?:refiner).{0,40}\b([0-9Aa-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})\b/,
  confidence: 'high',
},
{
  name: 'Repairshopr - 1',
  pattern: /(?:repairshopr).{0,40}\b([a-zA-Z0-9_.!+$#^*]{3,32})\b/,
  confidence: 'high',
},
{
  name: 'Repairshopr - 2',
  pattern: /(?:repairshopr).{0,40}\b([a-zA-Z0-9-]{51})\b/,
  confidence: 'high',
},
{
  name: 'Restpack',
  pattern: /(?:restpack).{0,40}\b([a-zA-Z0-9]{48})\b/,
  confidence: 'high',
},
{
  name: 'Restpackhtmltopdfapi',
  pattern: /(?:restpack).{0,40}\b([0-9A-Za-z]{48})\b/,
  confidence: 'high',
},
{
  name: 'Rev - 1',
  pattern: /(?:rev).{0,40}\b([0-9a-zA-Z/+]{27}=[ \r\n]{1})/,
  confidence: 'high',
},
{
  name: 'Rev - 2',
  pattern: /(?:rev).{0,40}\b([0-9a-zA-Z-]{27}[ \r\n]{1})/,
  confidence: 'low',
},
{
  name: 'Revampcrm - 1',
  pattern: /(?:revamp).{0,40}\b([a-zA-Z0-9]{40}\b)/,
  confidence: 'high',
},
{
  name: 'Revampcrm - 2',
  pattern: /(?:revamp).{0,40}\b([a-zA-Z0-9.-@]{25,30})\b/,
  confidence: 'low',
},
{
  name: 'Ringcentral - 1',
  pattern: /(?:ringcentral).{0,40}\b(https:\/\/www.[0-9A-Za-z_-]{1,}.com)\b/,
  confidence: 'high',
},
{
  name: 'Ringcentral - 2',
  pattern: /(?:ringcentral).{0,40}\b([0-9A-Za-z_-]{22})\b/,
  confidence: 'high',
},
{
  name: 'Ritekit',
  pattern: /(?:ritekit).{0,40}\b([0-9a-f]{44})\b/,
  confidence: 'high',
},
{
  name: 'Roaring',
  pattern: /(?:roaring).{0,40}\b([0-9A-Za-z_-]{28})\b/,
  confidence: 'high',
},
{
  name: 'Rocketreach',
  pattern: /(?:rocketreach).{0,40}\b([a-z0-9-]{39})\b/,
  confidence: 'high',
},
{
  name: 'Roninapp - 1',
  pattern: /(?:ronin).{0,40}\b([0-9Aa-zA-Z]{3,32})\b/,
  confidence: 'low',
},
{
  name: 'Roninapp - 2',
  pattern: /(?:ronin).{0,40}\b([0-9a-zA-Z]{26})\b/,
  confidence: 'high',
},
{
  name: 'Route4me',
  pattern: /(?:route4me).{0,40}\b([0-9A-Z]{32})\b/,
  confidence: 'high',
},
{
  name: 'Rownd - 1',
  pattern: /(?:rownd).{0,40}\b([a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12})\b/,
  confidence: 'high',
},
{
  name: 'Rownd - 2',
  pattern: /(?:rownd).{0,40}\b([a-z0-9]{48})\b/,
  confidence: 'high',
},
{
  name: 'Rownd - 3',
  pattern: /(?:rownd).{0,40}\b([0-9]{18})\b/,
  confidence: 'high',
},
{
  name: 'Rubygems',
  pattern: /\b(rubygems_[a-zA0-9]{48})\b/,
  confidence: 'high',
},
{
  name: 'Runrunit - 1',
  pattern: /(?:runrunit).{0,40}\b([0-9a-f]{32})\b/,
  confidence: 'high',
},
{
  name: 'Runrunit - 2',
  pattern: /(?:runrunit).{0,40}\b([0-9A-Za-z]{18,20})\b/,
  confidence: 'high',
},
{
  name: 'SSH',
  pattern: /-----BEGIN OPENSSH PRIVATE KEY-----/,
  confidence: 'high',
},
{
  name: 'SSH (DSA) private key',
  pattern: /-----BEGIN DSA PRIVATE KEY-----/,
  confidence: 'high',
},
{
  name: 'Salesblink',
  pattern: /(?:salesblink).{0,40}\b([a-zA-Z]{16})\b/,
  confidence: 'high',
},
{
  name: 'Salescookie',
  pattern: /(?:salescookie).{0,40}\b([a-zA-z0-9]{32})\b/,
  confidence: 'high',
},
{
  name: 'Salesflare',
  pattern: /(?:salesflare).{0,40}\b([a-zA-Z0-9_]{45})\b/,
  confidence: 'high',
},
{
  name: 'Satismeterprojectkey - 1',
  pattern: /(?:satismeter).{0,40}\b([a-zA-Z0-9]{4,20}@[a-zA-Z0-9]{2,12}.[a-zA-Z0-9]{2,12})\b/,
  confidence: 'high',
},
{
  name: 'Satismeterprojectkey - 2',
  pattern: /(?:satismeter).{0,40}\b([a-zA-Z0-9]{24})\b/,
  confidence: 'high',
},
{
  name: 'Satismeterprojectkey - 3',
  pattern: /(?:satismeter).{0,40}\b([a-zA-Z0-9!=@#$%^]{6,32})/,
  confidence: 'high',
},
{
  name: 'Satismeterwritekey',
  pattern: /(?:satismeter).{0,40}\b([a-z0-9A-Z]{16})\b/,
  confidence: 'high',
},
{
  name: 'Saucelabs - 1',
  pattern: /\b(oauth-[a-z0-9]{8,}-[a-z0-9]{5})\b/,
  confidence: 'high',
},
{
  name: 'Saucelabs - 2',
  pattern: /(?:saucelabs).{0,40}\b([a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12})\b/,
  confidence: 'high',
},
{
  name: 'Scalewaykey',
  pattern: /(?:scaleway).{0,40}\b([0-9a-z]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[0-9a-z]{4}-[0-9a-z]{12})\b/,
  confidence: 'high',
},
{
  name: 'Scrapeowl',
  pattern: /(?:scrapeowl).{0,40}\b([0-9a-z]{30})\b/,
  confidence: 'high',
},
{
  name: 'Scraperapi',
  pattern: /(?:scraperapi).{0,40}\b([a-z0-9]{32})\b/,
  confidence: 'high',
},
{
  name: 'Scraperbox',
  pattern: /(?:scraperbox).{0,40}\b([A-Z0-9]{32})\b/,
  confidence: 'high',
},
{
  name: 'Scrapersite',
  pattern: /(?:scrapersite).{0,40}\b([a-zA-Z0-9]{45})\b/,
  confidence: 'high',
},
{
  name: 'Scrapestack',
  pattern: /(?:scrapestack).{0,40}\b([a-z0-9]{32})\b/,
  confidence: 'high',
},
{
  name: 'Scrapfly',
  pattern: /(?:scrapfly).{0,40}\b([a-z0-9]{32})\b/,
  confidence: 'high',
},
{
  name: 'Scrapingant',
  pattern: /(?:scrapingant).{0,40}\b([a-z0-9]{32})\b/,
  confidence: 'high',
},
{
  name: 'Scrapingbee',
  pattern: /(?:scrapingbee).{0,40}\b([A-Z0-9]{80})\b/,
  confidence: 'high',
},
{
  name: 'Screenshotapi',
  pattern: /(?:screenshotapi).{0,40}\b([0-9A-Z]{7}-[0-9A-Z]{7}-[0-9A-Z]{7}-[0-9A-Z]{7})\b/,
  confidence: 'high',
},
{
  name: 'Screenshotlayer',
  pattern: /(?:screenshotlayer).{0,40}\b([a-zA-Z0-9_]{32})\b/,
  confidence: 'high',
},
{
  name: 'Securitytrails',
  pattern: /(?:securitytrails).{0,40}\b([a-zA-Z0-9]{32})\b/,
  confidence: 'high',
},
{
  name: 'Segmentapikey',
  pattern: /(?:segment).{0,40}\b([A-Za-z0-9_\-a-zA-Z]{43}\.[A-Za-z0-9_\-a-zA-Z]{43})\b/,
  confidence: 'high',
},
{
  name: 'Selectpdf',
  pattern: /(?:selectpdf).{0,40}\b([a-z0-9-]{36})\b/,
  confidence: 'high',
},
{
  name: 'Semaphore',
  pattern: /(?:semaphore).{0,40}\b([0-9a-z]{32})\b/,
  confidence: 'high',
},
{
  name: 'SendGrid API Key',
  pattern: /SG\.[\w_]{16,32}\.[\w_]{16,64}/,
  confidence: 'high',
},
{
  name: 'Sendbird - 1',
  pattern: /(?:sendbird).{0,40}\b([0-9a-f]{40})\b/,
  confidence: 'high',
},
{
  name: 'Sendbird - 2',
  pattern: /(?:sendbird).{0,40}\b([0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12})\b/,
  confidence: 'high',
},
{
  name: 'Sendbirdorganizationapi',
  pattern: /(?:sendbird).{0,40}\b([0-9a-f]{24})\b/,
  confidence: 'high',
},
{
  name: 'Sendgrid',
  pattern: /(?:sendgrid).{0,40}(SG\.[\w\-_]{20,24}\.[\w\-_]{39,50})\b/,
  confidence: 'high',
},
{
  name: 'Sendinbluev2',
  pattern: /\b(xkeysib-[A-Za-z0-9_-]{81})\b/,
  confidence: 'high',
},
{
  name: 'Sentiment - 1',
  pattern: /(?:sentiment).{0,40}\b([0-9]{17})\b/,
  confidence: 'high',
},
{
  name: 'Sentiment - 2',
  pattern: /(?:sentiment).{0,40}\b([a-zA-Z0-9]{20})\b/,
  confidence: 'high',
},
{
  name: 'Sentrytoken',
  pattern: /(?:sentry).{0,40}\b([a-f0-9]{64})\b/,
  confidence: 'high',
},
{
  name: 'Serphouse',
  pattern: /(?:serphouse).{0,40}\b([0-9A-Za-z]{60})\b/,
  confidence: 'high',
},
{
  name: 'Serpstack',
  pattern: /(?:serpstack).{0,40}\b([a-z0-9]{32})\b/,
  confidence: 'high',
},
{
  name: 'Sheety - 1',
  pattern: /(?:sheety).{0,40}\b([0-9a-z]{32})\b/,
  confidence: 'high',
},
{
  name: 'Sheety - 2',
  pattern: /(?:sheety).{0,40}\b([0-9a-z]{64})\b/,
  confidence: 'high',
},
{
  name: 'Sherpadesk',
  pattern: /(?:sherpadesk).{0,40}\b([0-9a-z]{32})\b/,
  confidence: 'high',
},
{
  name: 'Shipday',
  pattern: /(?:shipday).{0,40}\b([a-zA-Z0-9.]{11}[a-zA-Z0-9]{20})\b/,
  confidence: 'high',
},
{
  name: 'Shodankey',
  pattern: /(?:shodan).{0,40}\b([a-zA-Z0-9]{32})\b/,
  confidence: 'high',
},
{
  name: 'Shopify access token',
  pattern: /shpat_[a-fA-F0-9]{32}/,
  confidence: 'high',
},
{
  name: 'Shopify custom app access token',
  pattern: /shpca_[a-fA-F0-9]{32}/,
  confidence: 'high',
},
{
  name: 'Shopify private app access token',
  pattern: /shppa_[a-fA-F0-9]{32}/,
  confidence: 'high',
},
{
  name: 'Shopify shared secret',
  pattern: /shpss_[a-fA-F0-9]{32}/,
  confidence: 'high',
},
{
  name: 'Shoppable Service Auth',
  pattern: /data-shoppable-auth-token.+/,
  confidence: 'low',
},
{
  name: 'Shortcut',
  pattern: /(?:shortcut).{0,40}\b([0-9a-f-]{36})\b/,
  confidence: 'high',
},
{
  name: 'Shotstack',
  pattern: /(?:shotstack).{0,40}\b([a-zA-Z0-9]{40})\b/,
  confidence: 'high',
},
{
  name: 'Shutterstock - 1',
  pattern: /(?:shutterstock).{0,40}\b([0-9a-zA-Z]{32})\b/,
  confidence: 'low',
},
{
  name: 'Shutterstock - 2',
  pattern: /(?:shutterstock).{0,40}\b([0-9a-zA-Z]{16})\b/,
  confidence: 'low',
},
{
  name: 'Shutterstockoauth',
  pattern: /(?:shutterstock).{0,40}\b(v2\/[0-9A-Za-z]{388})\b/,
  confidence: 'high',
},
{
  name: 'Signalwire - 1',
  pattern: /\b([0-9a-z-]{3,64}.signalwire.com)\b/,
  confidence: 'high',
},
{
  name: 'Signalwire - 2',
  pattern: /(?:signalwire).{0,40}\b([0-9a-z]{8}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{12})\b/,
  confidence: 'high',
},
{
  name: 'Signalwire - 3',
  pattern: /(?:signalwire).{0,40}\b([0-9A-Za-z]{50})\b/,
  confidence: 'high',
},
{
  name: 'Signaturit',
  pattern: /(?:signaturit).{0,40}\b([0-9A-Za-z]{86})\b/,
  confidence: 'high',
},
{
  name: 'Signupgenius',
  pattern: /(?:signupgenius).{0,40}\b([0-9A-Za-z]{32})\b/,
  confidence: 'high',
},
{
  name: 'Sigopt',
  pattern: /(?:sigopt).{0,40}\b([A-Z0-9]{48})\b/,
  confidence: 'high',
},
{
  name: 'Simplesat',
  pattern: /(?:simplesat).{0,40}\b([a-z0-9]{40})/,
  confidence: 'high',
},
{
  name: 'Simplynoted',
  pattern: /(?:simplynoted).{0,40}\b([a-zA-Z0-9\S]{340,360})\b/,
  confidence: 'high',
},
{
  name: 'Simvoly',
  pattern: /(?:simvoly).{0,40}\b([a-z0-9]{33})\b/,
  confidence: 'high',
},
{
  name: 'Sinchmessage',
  pattern: /(?:sinch).{0,40}\b([a-z0-9]{32})\b/,
  confidence: 'high',
},
{
  name: 'Sirv - 1',
  pattern: /(?:sirv).{0,40}\b([a-zA-Z0-9\S]{88})/,
  confidence: 'high',
},
{
  name: 'Sirv - 2',
  pattern: /(?:sirv).{0,40}\b([a-zA-Z0-9]{26})\b/,
  confidence: 'high',
},
{
  name: 'Siteleaf',
  pattern: /(?:siteleaf).{0,40}\b([0-9Aa-z]{32})\b/,
  confidence: 'high',
},
{
  name: 'Skrappio',
  pattern: /(?:skrapp).{0,40}\b([a-z0-9A-Z]{42})\b/,
  confidence: 'high',
},
{
  name: 'Skybiometry',
  pattern: /(?:skybiometry).{0,40}\b([0-9a-z]{25,26})\b/,
  confidence: 'high',
},
{
  name: 'Slack',
  pattern: /xox[baprs]-[0-9a-zA-Z]{10,48}/,
  confidence: 'high',
},
{
  name: 'Slack Token',
  pattern: /(xox[pborsa]-[0-9]{12}-[0-9]{12}-[0-9]{12}-[a-z0-9]{32})/,
  confidence: 'high',
},
{
  name: 'Slack User token',
  pattern: /xoxp-[0-9A-Za-z-]{72}/,
  confidence: 'low',
},
{
  name: 'Slack Webhook',
  pattern: /https:\/\/hooks.slack.com\/services\/T[a-zA-Z0-9_]{8,10}\/B[a-zA-Z0-9_]{8,12}\/[a-zA-Z0-9_]{23,24}/,
  confidence: 'high',
},
{
  name: 'Slack access token',
  pattern: /xoxb-[0-9A-Za-z-]{51}/,
  confidence: 'high',
},
{
  name: 'Slackwebhook',
  pattern: /(https:\/\/hooks.slack.com\/services\/[A-Za-z0-9+/]{44,46})/,
  confidence: 'high',
},
{
  name: 'Smartsheets',
  pattern: /(?:smartsheets).{0,40}\b([a-zA-Z0-9]{37})\b/,
  confidence: 'high',
},
{
  name: 'Smartystreets - 1',
  pattern: /(?:smartystreets).{0,40}\b([a-zA-Z0-9]{20})\b/,
  confidence: 'high',
},
{
  name: 'Smartystreets - 2',
  pattern: /(?:smartystreets).{0,40}\b([a-z0-9-]{36})\b/,
  confidence: 'high',
},
{
  name: 'Smooch - 1',
  pattern: /(?:smooch).{0,40}\b(act_[0-9a-z]{24})\b/,
  confidence: 'high',
},
{
  name: 'Smooch - 2',
  pattern: /(?:smooch).{0,40}\b([0-9a-zA-Z_-]{86})\b/,
  confidence: 'high',
},
{
  name: 'Snipcart',
  pattern: /(?:snipcart).{0,40}\b([0-9A-Za-z_]{75})\b/,
  confidence: 'high',
},
{
  name: 'Snykkey',
  pattern: /(?:snyk).{0,40}\b([0-9a-z]{8}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{12})\b/,
  confidence: 'high',
},
{
  name: 'SonarQube Token',
  pattern: /sonar.{0,50}(?:"|'|`)?[0-9a-f]{40}(?:"|'|`)?/,
  confidence: 'high',
},
{
  name: 'Splunkobservabilitytoken',
  pattern: /(?:splunk).{0,40}\b([a-z0-9A-Z]{22})\b/,
  confidence: 'high',
},
{
  name: 'Spoonacular',
  pattern: /(?:spoonacular).{0,40}\b([0-9a-z]{32})\b/,
  confidence: 'high',
},
{
  name: 'Sportsmonk',
  pattern: /(?:sportsmonk).{0,40}\b([0-9a-zA-Z]{60})\b/,
  confidence: 'high',
},
{
  name: 'Square',
  pattern: /(?:square).{0,40}(EAAA[a-zA-Z0-9\-+=]{60})/,
  confidence: 'high',
},
{
  name: 'Square API Key',
  pattern: /sq0(atp|csp)-[0-9a-z-_]{22,43}/,
  confidence: 'low',
},
{
  name: 'Square OAuth Secret',
  pattern: /sq0csp-[0-9A-Za-z\-_]{43}/,
  confidence: 'high',
},
{
  name: 'Square access token',
  pattern: /sq0atp-[0-9A-Za-z\-_]{22}/,
  confidence: 'high',
},
{
  name: 'Squareapp - 1',
  pattern: /[\w-]*sq0i[a-z]{2}-[0-9A-Za-z\-_]{22,43}/,
  confidence: 'high',
},
{
  name: 'Squareapp - 2',
  pattern: /[\w-]*sq0c[a-z]{2}-[0-9A-Za-z\-_]{40,50}/,
  confidence: 'high',
},
{
  name: 'Squarespace',
  pattern: /(?:squarespace).{0,40}\b([0-9Aa-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})\b/,
  confidence: 'high',
},
{
  name: 'Squareup',
  pattern: /\b(sq0idp-[0-9A-Za-z]{22})\b/,
  confidence: 'high',
},
{
  name: 'Sslmate',
  pattern: /(?:sslmate).{0,40}\b([a-zA-Z0-9]{36})\b/,
  confidence: 'high',
},
{
  name: 'Stitchdata',
  pattern: /(?:stitchdata).{0,40}\b([0-9a-z_]{35})\b/,
  confidence: 'high',
},
{
  name: 'Stockdata',
  pattern: /(?:stockdata).{0,40}\b([0-9A-Za-z]{40})\b/,
  confidence: 'high',
},
{
  name: 'Storecove',
  pattern: /(?:storecove).{0,40}\b([a-zA-Z0-9_-]{43})\b/,
  confidence: 'high',
},
{
  name: 'Stormglass',
  pattern: /(?:stormglass).{0,40}\b([0-9Aa-z-]{73})\b/,
  confidence: 'high',
},
{
  name: 'Storyblok',
  pattern: /(?:storyblok).{0,40}\b([0-9A-Za-z]{22}t{2})\b/,
  confidence: 'high',
},
{
  name: 'Storychief',
  pattern: /(?:storychief).{0,40}\b([a-zA-Z0-9_\-.]{940,1000})/,
  confidence: 'high',
},
{
  name: 'Strava - 1',
  pattern: /(?:strava).{0,40}\b([0-9]{5})\b/,
  confidence: 'high',
},
{
  name: 'Strava - 2',
  pattern: /(?:strava).{0,40}\b([0-9a-z]{40})\b/,
  confidence: 'high',
},
{
  name: 'Streak',
  pattern: /(?:streak).{0,40}\b([0-9Aa-f]{32})\b/,
  confidence: 'high',
},
{
  name: 'Stripe',
  pattern: /[rs]k_live_[a-zA-Z0-9]{20,30}/,
  confidence: 'high',
},
{
  name: 'Stripe API Key - 1',
  pattern: /sk_live_[0-9a-zA-Z]{24}/,
  confidence: 'high',
},
{
  name: 'Stripe API key - 2',
  pattern: /stripe[sr]k_live_[0-9a-zA-Z]{24}/,
  confidence: 'high',
},
{
  name: 'Stripe API key - 3',
  pattern: /stripe[sk|rk]_live_[0-9a-zA-Z]{24}/,
  confidence: 'high',
},
{
  name: 'Stripe Public Live Key',
  pattern: /pk_live_[0-9a-z]{24}/,
  confidence: 'high',
},
{
  name: 'Stripe Public Test Key',
  pattern: /pk_test_[0-9a-z]{24}/,
  confidence: 'high',
},
{
  name: 'Stripe Restriced Key',
  pattern: /rk_(?:live|test)_[0-9a-zA-Z]{24}/,
  confidence: 'high',
},
{
  name: 'Stripe Restricted API Key',
  pattern: /rk_live_[0-9a-zA-Z]{24}/,
  confidence: 'high',
},
{
  name: 'Stripe Secret Key',
  pattern: /sk_(?:live|test)_[0-9a-zA-Z]{24}/,
  confidence: 'high',
},
{
  name: 'Stripe Secret Live Key',
  pattern: /(sk|rk)_live_[0-9a-z]{24}/,
  confidence: 'high',
},
{
  name: 'Stripe Secret Test Key',
  pattern: /(sk|rk)_test_[0-9a-z]{24}/,
  confidence: 'high',
},
{
  name: 'Stytch - 1',
  pattern: /(?:stytch).{0,40}\b([a-zA-Z0-9-_]{47}=)/,
  confidence: 'high',
},
{
  name: 'Stytch - 2',
  pattern: /(?:stytch).{0,40}\b([a-z0-9-]{49})\b/,
  confidence: 'high',
},
{
  name: 'Sugester - 1',
  pattern: /(?:sugester).{0,40}\b([a-zA-Z0-9_.!+$#^*%]{3,32})\b/,
  confidence: 'high',
},
{
  name: 'Sugester - 2',
  pattern: /(?:sugester).{0,40}\b([a-zA-Z0-9]{32})\b/,
  confidence: 'high',
},
{
  name: 'Sumologickey - 1',
  pattern: /(?:sumo).{0,40}\b([A-Za-z0-9]{14})\b/,
  confidence: 'high',
},
{
  name: 'Sumologickey - 2',
  pattern: /(?:sumo).{0,40}\b([A-Za-z0-9]{64})\b/,
  confidence: 'high',
},
{
  name: 'Supernotesapi',
  pattern: /(?:supernotes).{0,40}([ \r\n]{0,1}[0-9A-Za-z\-_]{43}[ \r\n]{1})/,
  confidence: 'high',
},
{
  name: 'Surveyanyplace - 1',
  pattern: /(?:survey).{0,40}\b([a-z0-9A-Z-]{36})\b/,
  confidence: 'low',
},
{
  name: 'Surveyanyplace - 2',
  pattern: /(?:survey).{0,40}\b([a-z0-9A-Z]{32})\b/,
  confidence: 'low',
},
{
  name: 'Surveybot',
  pattern: /(?:surveybot).{0,40}\b([A-Za-z0-9-]{80})\b/,
  confidence: 'high',
},
{
  name: 'Surveysparrow',
  pattern: /(?:surveysparrow).{0,40}\b([a-zA-Z0-9-_]{88})\b/,
  confidence: 'high',
},
{
  name: 'Survicate',
  pattern: /(?:survicate).{0,40}\b([a-z0-9]{32})\b/,
  confidence: 'high',
},
{
  name: 'Swell - 1',
  pattern: /(?:swell).{0,40}\b([a-zA-Z0-9]{6,24})\b/,
  confidence: 'low',
},
{
  name: 'Swell - 2',
  pattern: /(?:swell).{0,40}\b([a-zA-Z0-9]{32})\b/,
  confidence: 'high',
},
{
  name: 'Swiftype',
  pattern: /(?:swiftype).{0,40}\b([a-zA-z-0-9]{6}_[a-zA-z-0-9]{6}-[a-zA-z-0-9]{6})\b/,
  confidence: 'high',
},
{
  name: 'Tallyfy',
  pattern: /(?:tallyfy).{0,40}\b([0-9A-Za-z]{36}\.[0-9A-Za-z]{264}\.[0-9A-Za-z\-_]{683})\b/,
  confidence: 'high',
},
{
  name: 'Tatumio',
  pattern: /(?:tatum).{0,40}\b([0-9a-z-]{36})\b/,
  confidence: 'high',
},
{
  name: 'Taxjar',
  pattern: /(?:taxjar).{0,40}\b([a-z0-9]{32})\b/,
  confidence: 'high',
},
{
  name: 'Teamgate - 1',
  pattern: /(?:teamgate).{0,40}\b([a-z0-9]{40})\b/,
  confidence: 'high',
},
{
  name: 'Teamgate - 2',
  pattern: /(?:teamgate).{0,40}\b([a-zA-Z0-9]{80})\b/,
  confidence: 'high',
},
{
  name: 'Teamworkcrm',
  pattern: /(?:teamwork|teamworkcrm).{0,40}\b(tkn\.v1_[0-9A-Za-z]{71}=[ \r\n]{1})/,
  confidence: 'high',
},
{
  name: 'Teamworkdesk',
  pattern: /(?:teamwork|teamworkdesk).{0,40}\b(tkn\.v1_[0-9A-Za-z]{71}=[ \r\n]{1})/,
  confidence: 'high',
},
{
  name: 'Teamworkspaces',
  pattern: /(?:teamwork|teamworkspaces).{0,40}\b(tkn\.v1_[0-9A-Za-z]{71}=[ \r\n]{1})/,
  confidence: 'high',
},
{
  name: 'Technicalanalysisapi',
  pattern: /(?:technicalanalysisapi).{0,40}\b([A-Z0-9]{48})\b/,
  confidence: 'high',
},
{
  name: 'Telegram Bot API Key',
  pattern: /[0-9]+:AA[0-9A-Za-z\-_]{33}/,
  confidence: 'high',
},
{
  name: 'Telegram Secret',
  pattern: /d{5,}:A[0-9a-z_-]{34,34}/,
  confidence: 'high',
},
{
  name: 'Telegrambottoken',
  pattern: /(?:telegram).{0,40}\b([0-9]{8,10}:[a-zA-Z0-9_-]{35})\b/,
  confidence: 'high',
},
{
  name: 'Telnyx',
  pattern: /(?:telnyx).{0,40}\b(KEY[0-9A-Za-z_-]{55})\b/,
  confidence: 'high',
},
{
  name: 'Terraformcloudpersonaltoken',
  pattern: /\b([A-Za-z0-9]{14}.atlasv1.[A-Za-z0-9]{67})\b/,
  confidence: 'high',
},
{
  name: 'Text2data',
  pattern: /(?:text2data).{0,40}\b([0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12})\b/,
  confidence: 'high',
},
{
  name: 'Textmagic - 1',
  pattern: /(?:textmagic).{0,40}\b([0-9A-Za-z]{30})\b/,
  confidence: 'high',
},
{
  name: 'Textmagic - 2',
  pattern: /(?:textmagic).{0,40}\b([0-9A-Za-z]{1,25})\b/,
  confidence: 'high',
},
{
  name: 'Theoddsapi',
  pattern: /(?:theoddsapi|the-odds-api).{0,40}\b([0-9a-f]{32})\b/,
  confidence: 'high',
},
{
  name: 'Thinkific - 1',
  pattern: /(?:thinkific).{0,40}\b([0-9a-f]{32})\b/,
  confidence: 'high',
},
{
  name: 'Thinkific - 2',
  pattern: /(?:thinkific).{0,40}\b([0-9A-Za-z]{4,40})\b/,
  confidence: 'high',
},
{
  name: 'Thousandeyes - 1',
  pattern: /(?:thousandeyes).{0,40}\b([a-zA-Z0-9]{32})\b/,
  confidence: 'high',
},
{
  name: 'Thousandeyes - 2',
  pattern: /(?:thousandeyes).{0,40}\b([a-zA-Z0-9]{3,20}@[a-zA-Z0-9]{2,12}.[a-zA-Z0-9]{2,5})\b/,
  confidence: 'high',
},
{
  name: 'Ticketmaster',
  pattern: /(?:ticketmaster).{0,40}\b([a-zA-Z0-9]{32})\b/,
  confidence: 'high',
},
{
  name: 'Tiingo',
  pattern: /(?:tiingo).{0,40}\b([0-9a-z]{40})\b/,
  confidence: 'high',
},
{
  name: 'Timezoneapi',
  pattern: /(?:timezoneapi).{0,40}\b([a-zA-Z0-9]{20})\b/,
  confidence: 'high',
},
{
  name: 'Tly',
  pattern: /(?:tly).{0,40}\b([0-9A-Za-z]{60})\b/,
  confidence: 'high',
},
{
  name: 'Tmetric',
  pattern: /(?:tmetric).{0,40}\b([0-9A-Z]{64})\b/,
  confidence: 'high',
},
{
  name: 'Todoist',
  pattern: /(?:todoist).{0,40}\b([0-9a-z]{40})\b/,
  confidence: 'high',
},
{
  name: 'Toggltrack',
  pattern: /(?:toggl).{0,40}\b([0-9Aa-z]{32})\b/,
  confidence: 'high',
},
{
  name: 'Tomorrowio',
  pattern: /(?:tomorrow).{0,40}\b([a-zA-Z0-9]{32})\b/,
  confidence: 'high',
},
{
  name: 'Tomtom',
  pattern: /(?:tomtom).{0,40}\b([0-9Aa-zA-Z]{32})\b/,
  confidence: 'high',
},
{
  name: 'Tradier',
  pattern: /(?:tradier).{0,40}\b([a-zA-Z0-9]{28})\b/,
  confidence: 'high',
},
{
  name: 'Travelpayouts',
  pattern: /(?:travelpayouts).{0,40}\b([a-z0-9]{32})\b/,
  confidence: 'high',
},
{
  name: 'Travisci',
  pattern: /(?:travis).{0,40}\b([a-zA-Z0-9A-Z_]{22})\b/,
  confidence: 'high',
},
{
  name: 'Trello URL',
  pattern: /https:\/\/trello.com\/b\/[0-9a-z]\/[0-9a-z_-]+/,
  confidence: 'high',
},
{
  name: 'Trelloapikey - 2',
  pattern: /(?:trello).{0,40}\b([a-zA-Z-0-9]{32})\b/,
  confidence: 'high',
},
{
  name: 'Twelvedata',
  pattern: /(?:twelvedata).{0,40}\b([a-z0-9]{32})\b/,
  confidence: 'high',
},
{
  name: 'Twilio - 1',
  pattern: /\bAC[0-9a-f]{32}\b/,
  confidence: 'high',
},
{
  name: 'Twilio API Key',
  pattern: /SK[0-9a-fA-F]{32}/,
  confidence: 'high',
},
{
  name: 'Twitter Access Token',
  pattern: /[tT][wW][iI][tT][tT][eE][rR].*[1-9][0-9]+-[0-9a-zA-Z]{40}/,
  confidence: 'low',
},
{
  name: 'Twitter Client ID',
  pattern: /twitter[0-9a-z]{18,25}/,
  confidence: 'high',
},
{
  name: 'Twitter OAuth',
  pattern: /[tT][wW][iI][tT][tT][eE][rR].*[''|"][0-9a-zA-Z]{35,44}[''|"]/,
  confidence: 'low',
},
{
  name: 'Twitter Secret Key',
  pattern: /twitter[0-9a-z]{35,44}/,
  confidence: 'high',
},
{
  name: 'Tyntec',
  pattern: /(?:tyntec).{0,40}\b([a-zA-Z0-9]{32})\b/,
  confidence: 'high',
},
{
  name: 'Typeform',
  pattern: /(?:typeform).{0,40}\b([0-9A-Za-z]{44})\b/,
  confidence: 'high',
},
{
  name: 'Ubidots',
  pattern: /\b(BBFF-[0-9a-zA-Z]{30})\b/,
  confidence: 'high',
},
{
  name: 'Unifyid',
  pattern: /(?:unify).{0,40}\b([0-9A-Za-z_=-]{44})/,
  confidence: 'high',
},
{
  name: 'Unplugg',
  pattern: /(?:unplu).{0,40}\b([a-z0-9]{64})\b/,
  confidence: 'high',
},
{
  name: 'Unsplash',
  pattern: /(?:unsplash).{0,40}\b([0-9A-Za-z_]{43})\b/,
  confidence: 'high',
},
{
  name: 'Upcdatabase',
  pattern: /(?:upcdatabase).{0,40}\b([A-Z0-9]{32})\b/,
  confidence: 'high',
},
{
  name: 'Uplead',
  pattern: /(?:uplead).{0,40}\b([a-z0-9-]{32})\b/,
  confidence: 'high',
},
{
  name: 'Uploadcare',
  pattern: /(?:uploadcare).{0,40}\b([a-z0-9]{20})\b/,
  confidence: 'high',
},
{
  name: 'Upwave',
  pattern: /(?:upwave).{0,40}\b([0-9a-z]{32})\b/,
  confidence: 'high',
},
{
  name: 'Uri',
  pattern: /\b[a-zA-Z]{1,10}:?\/\/[-.%\w{}]{1,50}:([-.%\S]{3,50})@[-.%\w/:]+\b/,
  confidence: 'low',
},
{
  name: 'Urlscan',
  pattern: /(?:urlscan).{0,40}\b([a-z0-9-]{36})\b/,
  confidence: 'high',
},
{
  name: 'Userstack',
  pattern: /(?:userstack).{0,40}\b([a-z0-9]{32})\b/,
  confidence: 'high',
},
{
  name: 'Vatlayer',
  pattern: /(?:vatlayer).{0,40}\b([a-z0-9]{32})\b/,
  confidence: 'high',
},
{
  name: 'Vercel',
  pattern: /(?:vercel).{0,40}\b([a-zA-Z0-9]{24})\b/,
  confidence: 'high',
},
{
  name: 'Verifier - 1',
  pattern: /(?:verifier).{0,40}\b([a-zA-Z-0-9-]{5,16}@[a-zA-Z-0-9]{4,16}\.[a-zA-Z-0-9]{3,6})\b/,
  confidence: 'high',
},
{
  name: 'Verifier - 2',
  pattern: /(?:verifier).{0,40}\b([a-z0-9]{96})\b/,
  confidence: 'high',
},
{
  name: 'Verimail',
  pattern: /(?:verimail).{0,40}\b([A-Z0-9]{32})\b/,
  confidence: 'high',
},
{
  name: 'Veriphone',
  pattern: /(?:veriphone).{0,40}\b([0-9A-Z]{32})\b/,
  confidence: 'high',
},
{
  name: 'Versioneye',
  pattern: /(?:versioneye).{0,40}\b([a-zA-Z0-9-]{40})\b/,
  confidence: 'high',
},
{
  name: 'Viewneo',
  pattern: /(?:viewneo).{0,40}\b([a-z0-9A-Z]{120,300}.[a-z0-9A-Z]{150,300}.[a-z0-9A-Z-_]{600,800})/,
  confidence: 'high',
},
{
  name: 'Virustotal',
  pattern: /(?:virustotal).{0,40}\b([a-f0-9]{64})\b/,
  confidence: 'high',
},
{
  name: 'Visualcrossing',
  pattern: /(?:visualcrossing).{0,40}\b([0-9A-Z]{25})\b/,
  confidence: 'high',
},
{
  name: 'Voicegain',
  pattern: /(?:voicegain).{0,40}\b(ey[0-9a-zA-Z_-]{34}.ey[0-9a-zA-Z_-]{108}.[0-9a-zA-Z_-]{43})\b/,
  confidence: 'high',
},
{
  name: 'Vouchery - 1',
  pattern: /(?:vouchery).{0,40}\b([a-z0-9-]{36})\b/,
  confidence: 'high',
},
{
  name: 'Vouchery - 2',
  pattern: /(?:vouchery).{0,40}\b([a-zA-Z0-9-\S]{2,20})\b/,
  confidence: 'high',
},
{
  name: 'Vpnapi',
  pattern: /(?:vpnapi).{0,40}\b([a-z0-9A-Z]{32})\b/,
  confidence: 'high',
},
{
  name: 'Vultrapikey',
  pattern: /(?:vultr).{0,40} \b([A-Z0-9]{36})\b/,
  confidence: 'high',
},
{
  name: 'Vyte',
  pattern: /(?:vyte).{0,40}\b([0-9a-z]{50})\b/,
  confidence: 'high',
},
{
  name: 'Walkscore',
  pattern: /(?:walkscore).{0,40}\b([0-9a-z]{32})\b/,
  confidence: 'high',
},
{
  name: 'Weatherbit',
  pattern: /(?:weatherbit).{0,40}\b([0-9a-z]{32})\b/,
  confidence: 'high',
},
{
  name: 'Weatherstack',
  pattern: /(?:weatherstack).{0,40}\b([0-9a-z]{32})\b/,
  confidence: 'high',
},
{
  name: 'Webex - 1',
  pattern: /(?:error).{0,40}(redirect_uri_mismatch)/,
  confidence: 'high',
},
{
  name: 'Webex - 2',
  pattern: /(?:webex).{0,40}\b([A-Za-z0-9_-]{65})\b/,
  confidence: 'high',
},
{
  name: 'Webex - 3',
  pattern: /(?:webex).{0,40}\b([A-Za-z0-9_-]{64})\b/,
  confidence: 'high',
},
{
  name: 'Webflow',
  pattern: /(?:webf'low').{0,40}\b([a-zA0-9]{64})\b/,
  confidence: 'high',
},
{
  name: 'Webscraper',
  pattern: /(?:webscraper).{0,40}\b([a-zA-Z0-9]{60})\b/,
  confidence: 'high',
},
{
  name: 'Webscraping',
  pattern: /(?:webscraping).{0,40}\b([0-9A-Za-z]{32})\b/,
  confidence: 'high',
},
{
  name: 'Wepay - 2',
  pattern: /(?:wepay).{0,40}\b([a-zA-Z0-9_?]{62})\b/,
  confidence: 'high',
},
{
  name: 'Whoxy',
  pattern: /(?:whoxy).{0,40}\b([0-9a-z]{33})\b/,
  confidence: 'high',
},
{
  name: 'Worksnaps',
  pattern: /(?:worksnaps).{0,40}\b([0-9A-Za-z]{40})\b/,
  confidence: 'high',
},
{
  name: 'Workstack',
  pattern: /(?:workstack).{0,40}\b([0-9Aa-zA-Z]{60})\b/,
  confidence: 'high',
},
{
  name: 'Worldcoinindex',
  pattern: /(?:worldcoinindex).{0,40}\b([a-zA-Z0-9]{35})\b/,
  confidence: 'high',
},
{
  name: 'Worldweather',
  pattern: /(?:worldweather).{0,40}\b([0-9a-z]{31})\b/,
  confidence: 'high',
},
{
  name: 'Wrike',
  pattern: /(?:wrike).{0,40}\b(ey[a-zA-Z0-9-._]{333})\b/,
  confidence: 'high',
},
{
  name: 'Yandex',
  pattern: /(?:yandex).{0,40}\b([a-z0-9A-Z.]{83})\b/,
  confidence: 'high',
},
{
  name: 'Youneedabudget',
  pattern: /(?:youneedabudget).{0,40}\b([0-9a-f]{64})\b/,
  confidence: 'high',
},
{
  name: 'Yousign',
  pattern: /(?:yousign).{0,40}\b([0-9a-z]{32})\b/,
  confidence: 'high',
},
{
  name: 'Youtubeapikey - 1',
  pattern: /(?:youtube).{0,40}\b([a-zA-Z-0-9_]{39})\b/,
  confidence: 'low',
},
{
  name: 'Zapier Webhook',
  pattern: /https:\/\/(?:www.)?hooks\.zapier\.com\/hooks\/catch\/[A-Za-z0-9]+\/[A-Za-z0-9]+\//,
  confidence: 'low',
},
{
  name: 'Zapierwebhook',
  pattern: /(https:\/\/hooks.zapier.com\/hooks\/catch\/[A-Za-z0-9/]{16})/,
  confidence: 'high',
},
{
  name: 'Zendeskapi - 3',
  pattern: /(?:zendesk).{0,40}([A-Za-z0-9_-]{40})/,
  confidence: 'high',
},
{
  name: 'Zenkitapi',
  pattern: /(?:zenkit).{0,40}\b([0-9a-z]{8}-[0-9A-Za-z]{32})\b/,
  confidence: 'high',
},
{
  name: 'Zenscrape',
  pattern: /(?:zenscrape).{0,40}\b([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})\b/,
  confidence: 'high',
},
{
  name: 'Zenserp',
  pattern: /(?:zenserp).{0,40}\b([0-9a-z-]{36})\b/,
  confidence: 'high',
},
{
  name: 'Zeplin',
  pattern: /(?:zeplin).{0,40}\b([a-zA-Z0-9-.]{350,400})\b/,
  confidence: 'high',
},
{
  name: 'Zerobounce',
  pattern: /(?:zerobounce).{0,40}\b([a-z0-9]{32})\b/,
  confidence: 'high',
},
{
  name: 'Zipapi - 1',
  pattern: /(?:zipapi).{0,40}\b([a-zA-Z0-9!=@#$%^]{7,})/,
  confidence: 'high',
},
{
  name: 'Zipapi - 3',
  pattern: /(?:zipapi).{0,40}\b([0-9a-z]{32})\b/,
  confidence: 'high',
},
{
  name: 'Zipcodeapi',
  pattern: /(?:zipcodeapi).{0,40}\b([a-zA-Z0-9]{64})\b/,
  confidence: 'high',
},
{
  name: 'Zoho Webhook',
  pattern: /https:\/\/creator\.zoho\.com\/api\/[A-Za-z0-9/\-_.]+\?authtoken=[A-Za-z0-9]+/,
  confidence: 'low',
},
{
  name: 'Zonkafeedback',
  pattern: /(?:zonka).{0,40}\b([A-Za-z0-9]{36})\b/,
  confidence: 'high',
},
{
  name: 'access_key_secret',
  pattern: /access[_-]?key[_-]?secret(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'access_secret',
  pattern: /access[_-]?secret(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'access_token',
  pattern: /access[_-]?token(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'account_sid',
  pattern: /account[_-]?sid(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'admin_email',
  pattern: /admin[_-]?email(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'adzerk_api_key',
  pattern: /adzerk[_-]?api[_-]?key(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'algolia_admin_key_1',
  pattern: /algolia[_-]?admin[_-]?key[_-]?1(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'algolia_admin_key_2',
  pattern: /algolia[_-]?admin[_-]?key[_-]?2(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'algolia_admin_key_mcm',
  pattern: /algolia[_-]?admin[_-]?key[_-]?mcm(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'algolia_api_key',
  pattern: /algolia[_-]?api[_-]?key(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'algolia_api_key_mcm',
  pattern: /algolia[_-]?api[_-]?key[_-]?mcm(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'algolia_api_key_search',
  pattern: /algolia[_-]?api[_-]?key[_-]?search(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'algolia_search_api_key',
  pattern: /algolia[_-]?search[_-]?api[_-]?key(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'algolia_search_key',
  pattern: /algolia[_-]?search[_-]?key(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'algolia_search_key_1',
  pattern: /algolia[_-]?search[_-]?key[_-]?1(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'alias_pass',
  pattern: /alias[_-]?pass(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'alicloud_access_key',
  pattern: /alicloud[_-]?access[_-]?key(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'alicloud_secret_key',
  pattern: /alicloud[_-]?secret[_-]?key(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'amazon_bucket_name',
  pattern: /amazon[_-]?bucket[_-]?name(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'amazon_secret_access_key',
  pattern: /amazon[_-]?secret[_-]?access[_-]?key(=| =|:| :)/,
  confidence: 'high',
},
{
  name: 'anaconda_token',
  pattern: /anaconda[_-]?token(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'android_docs_deploy_token',
  pattern: /android[_-]?docs[_-]?deploy[_-]?token(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'ansible_vault_password',
  pattern: /ansible[_-]?vault[_-]?password(=| =|:| :)/,
  confidence: 'high',
},
{
  name: 'aos_key',
  pattern: /aos[_-]?key(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'aos_sec',
  pattern: /aos[_-]?sec(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'api_key',
  pattern: /api[_-]?key(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'api_key_secret',
  pattern: /api[_-]?key[_-]?secret(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'api_key_sid',
  pattern: /api[_-]?key[_-]?sid(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'api_secret',
  pattern: /api[_-]?secret(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'apiary_api_key',
  pattern: /apiary[_-]?api[_-]?key(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'apigw_access_token',
  pattern: /apigw[_-]?access[_-]?token(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'apikey_patterns',
  pattern: /apikey[:](?:['"]?[a-zA-Z0-9-_|]+['"]?)/,
  confidence: 'low',
},
{
  name: 'app_bucket_perm',
  pattern: /app[_-]?bucket[_-]?perm(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'app_report_token_key',
  pattern: /app[_-]?report[_-]?token[_-]?key(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'app_secrete',
  pattern: /app[_-]?secrete(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'app_token',
  pattern: /app[_-]?token(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'appclientsecret',
  pattern: /appclientsecret(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'apple_id_password',
  pattern: /apple[_-]?id[_-]?password(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'argos_token',
  pattern: /argos[_-]?token(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'artifactory',
  pattern: /(artifactory.{0,50}("|')?[a-zA-Z0-9=]{112}("|')?)/,
  confidence: 'low',
},
{
  name: 'artifactory_key',
  pattern: /artifactory[_-]?key(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'artifacts_aws_access_key_id',
  pattern: /artifacts[_-]?aws[_-]?access[_-]?key[_-]?id(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'artifacts_aws_secret_access_key',
  pattern: /artifacts[_-]?aws[_-]?secret[_-]?access[_-]?key(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'artifacts_bucket',
  pattern: /artifacts[_-]?bucket(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'artifacts_key',
  pattern: /artifacts[_-]?key(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'artifacts_secret',
  pattern: /artifacts[_-]?secret(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'assistant_iam_apikey',
  pattern: /assistant[_-]?iam[_-]?apikey(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'auth0_api_clientsecret',
  pattern: /auth0[_-]?api[_-]?clientsecret(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'auth0_client_secret',
  pattern: /auth0[_-]?client[_-]?secret(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'auth_token',
  pattern: /auth[_-]?token(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'author_email_addr',
  pattern: /author[_-]?email[_-]?addr(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'author_npm_api_key',
  pattern: /author[_-]?npm[_-]?api[_-]?key(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'aws_access',
  pattern: /aws[_-]?access(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'aws_access_key',
  pattern: /aws[_-]?access[_-]?key(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'aws_access_key_id - 1',
  pattern: /aws[_-]?access[_-]?key[_-]?id(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'aws_config_accesskeyid',
  pattern: /aws[_-]?config[_-]?accesskeyid(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'aws_config_secretaccesskey',
  pattern: /aws[_-]?config[_-]?secretaccesskey(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'aws_key',
  pattern: /aws[_-]?key(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'aws_patterns',
  pattern: /(?:accesskeyid|secretaccesskey|aws_access_key_id|aws_secret_access_key)/,
  confidence: 'low',
},
{
  name: 'aws_secret',
  pattern: /aws[_-]?secret(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'aws_secret_access_key',
  pattern: /aws[_-]?secret[_-]?access[_-]?key(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'aws_secret_key',
  pattern: /aws[_-]?secret[_-]?key(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'aws_secrets',
  pattern: /aws[_-]?secrets(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'aws_ses_access_key_id',
  pattern: /aws[_-]?ses[_-]?access[_-]?key[_-]?id(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'aws_ses_secret_access_key',
  pattern: /aws[_-]?ses[_-]?secret[_-]?access[_-]?key(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'awsaccesskeyid',
  pattern: /awsaccesskeyid(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'awscn_access_key_id',
  pattern: /awscn[_-]?access[_-]?key[_-]?id(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'awscn_secret_access_key',
  pattern: /awscn[_-]?secret[_-]?access[_-]?key(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'awssecretkey',
  pattern: /awssecretkey(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'b2_app_key',
  pattern: /b2[_-]?app[_-]?key(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'b2_bucket',
  pattern: /b2[_-]?bucket(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'bintray_api_key',
  pattern: /bintray[_-]?api[_-]?key(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'bintray_apikey',
  pattern: /bintray[_-]?apikey(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'bintray_gpg_password',
  pattern: /bintray[_-]?gpg[_-]?password(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'bintray_key',
  pattern: /bintray[_-]?key(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'bintray_token',
  pattern: /bintray[_-]?token(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'bintraykey',
  pattern: /bintraykey(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'bluemix_api_key',
  pattern: /bluemix[_-]?api[_-]?key(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'bluemix_auth',
  pattern: /bluemix[_-]?auth(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'bluemix_pass',
  pattern: /bluemix[_-]?pass(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'bluemix_pass_prod',
  pattern: /bluemix[_-]?pass[_-]?prod(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'bluemix_password',
  pattern: /bluemix[_-]?password(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'bluemix_pwd',
  pattern: /bluemix[_-]?pwd(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'bluemix_username',
  pattern: /bluemix[_-]?username(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'brackets_repo_oauth_token',
  pattern: /brackets[_-]?repo[_-]?oauth[_-]?token(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'browser_stack_access_key',
  pattern: /browser[_-]?stack[_-]?access[_-]?key(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'browserstack_access_key',
  pattern: /browserstack[_-]?access[_-]?key(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'bucketeer_aws_access_key_id',
  pattern: /bucketeer[_-]?aws[_-]?access[_-]?key[_-]?id(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'bucketeer_aws_secret_access_key',
  pattern: /bucketeer[_-]?aws[_-]?secret[_-]?access[_-]?key(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'built_branch_deploy_key',
  pattern: /built[_-]?branch[_-]?deploy[_-]?key(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'bundlesize_github_token',
  pattern: /bundlesize[_-]?github[_-]?token(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'bx_password',
  pattern: /bx[_-]?password(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'bx_username',
  pattern: /bx[_-]?username(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'cache_s3_secret_key',
  pattern: /cache[_-]?s3[_-]?secret[_-]?key(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'cargo_token',
  pattern: /cargo[_-]?token(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'cattle_access_key',
  pattern: /cattle[_-]?access[_-]?key(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'cattle_agent_instance_auth',
  pattern: /cattle[_-]?agent[_-]?instance[_-]?auth(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'cattle_secret_key',
  pattern: /cattle[_-]?secret[_-]?key(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'censys_secret',
  pattern: /censys[_-]?secret(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'certificate_password',
  pattern: /certificate[_-]?password(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'cf_password',
  pattern: /cf[_-]?password(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'cheverny_token',
  pattern: /cheverny[_-]?token(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'chrome_client_secret',
  pattern: /chrome[_-]?client[_-]?secret(=| =|:| :)/,
  confidence: 'high',
},
{
  name: 'chrome_refresh_token',
  pattern: /chrome[_-]?refresh[_-]?token(=| =|:| :)/,
  confidence: 'high',
},
{
  name: 'ci_deploy_password',
  pattern: /ci[_-]?deploy[_-]?password(=| =|:| :)/,
  confidence: 'high',
},
{
  name: 'ci_project_url',
  pattern: /ci[_-]?project[_-]?url(=| =|:| :)/,
  confidence: 'high',
},
{
  name: 'ci_registry_user',
  pattern: /ci[_-]?registry[_-]?user(=| =|:| :)/,
  confidence: 'high',
},
{
  name: 'ci_server_name',
  pattern: /ci[_-]?server[_-]?name(=| =|:| :)/,
  confidence: 'high',
},
{
  name: 'ci_user_token',
  pattern: /ci[_-]?user[_-]?token(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'claimr_database',
  pattern: /claimr[_-]?database(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'claimr_db',
  pattern: /claimr[_-]?db(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'claimr_superuser',
  pattern: /claimr[_-]?superuser(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'claimr_token',
  pattern: /claimr[_-]?token(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'cli_e2e_cma_token',
  pattern: /cli[_-]?e2e[_-]?cma[_-]?token(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'client_secret',
  pattern: /client[_-]?secret(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'clojars_password',
  pattern: /clojars[_-]?password(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'cloud_api_key',
  pattern: /cloud[_-]?api[_-]?key(=| =|:| :)/,
  confidence: 'high',
},
{
  name: 'cloudant_archived_database',
  pattern: /cloudant[_-]?archived[_-]?database(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'cloudant_audited_database',
  pattern: /cloudant[_-]?audited[_-]?database(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'cloudant_database',
  pattern: /cloudant[_-]?database(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'cloudant_instance',
  pattern: /cloudant[_-]?instance(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'cloudant_order_database',
  pattern: /cloudant[_-]?order[_-]?database(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'cloudant_parsed_database',
  pattern: /cloudant[_-]?parsed[_-]?database(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'cloudant_password',
  pattern: /cloudant[_-]?password(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'cloudant_processed_database',
  pattern: /cloudant[_-]?processed[_-]?database(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'cloudant_service_database',
  pattern: /cloudant[_-]?service[_-]?database(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'cloudflare_api_key',
  pattern: /cloudflare[_-]?api[_-]?key(=| =|:| :)/,
  confidence: 'high',
},
{
  name: 'cloudflare_auth_email',
  pattern: /cloudflare[_-]?auth[_-]?email(=| =|:| :)/,
  confidence: 'high',
},
{
  name: 'cloudflare_auth_key',
  pattern: /cloudflare[_-]?auth[_-]?key(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'cloudflare_email',
  pattern: /cloudflare[_-]?email(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'cloudinary_url',
  pattern: /cloudinary[_-]?url(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'cloudinary_url_staging',
  pattern: /cloudinary[_-]?url[_-]?staging(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'clu_repo_url',
  pattern: /clu[_-]?repo[_-]?url(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'clu_ssh_private_key_base64',
  pattern: /clu[_-]?ssh[_-]?private[_-]?key[_-]?base64(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'cn_access_key_id',
  pattern: /cn[_-]?access[_-]?key[_-]?id(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'cn_secret_access_key',
  pattern: /cn[_-]?secret[_-]?access[_-]?key(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'cocoapods_trunk_email',
  pattern: /cocoapods[_-]?trunk[_-]?email(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'cocoapods_trunk_token',
  pattern: /cocoapods[_-]?trunk[_-]?token(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'codacy_project_token',
  pattern: /codacy[_-]?project[_-]?token(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'codeclimate',
  pattern: /(codeclima.{0,50}("|')?[0-9a-f]{64}("|')?)/,
  confidence: 'low',
},
{
  name: 'codeclimate_repo_token',
  pattern: /codeclimate[_-]?repo[_-]?token(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'codecov_token',
  pattern: /codecov[_-]?token(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'coding_token',
  pattern: /coding[_-]?token(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'conekta_apikey',
  pattern: /conekta[_-]?apikey(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'consumer_key',
  pattern: /consumer[_-]?key(=| =|:| :)/,
  confidence: 'high',
},
{
  name: 'consumerkey',
  pattern: /consumerkey(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'contentful_access_token',
  pattern: /contentful[_-]?access[_-]?token(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'contentful_cma_test_token',
  pattern: /contentful[_-]?cma[_-]?test[_-]?token(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'contentful_integration_management_token',
  pattern: /contentful[_-]?integration[_-]?management[_-]?token(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'contentful_php_management_test_token',
  pattern: /contentful[_-]?php[_-]?management[_-]?test[_-]?token(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'contentful_test_org_cma_token',
  pattern: /contentful[_-]?test[_-]?org[_-]?cma[_-]?token(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'contentful_v2_access_token',
  pattern: /contentful[_-]?v2[_-]?access[_-]?token(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'conversation_password',
  pattern: /conversation[_-]?password(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'conversation_username',
  pattern: /conversation[_-]?username(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'cos_secrets',
  pattern: /cos[_-]?secrets(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'coveralls_api_token',
  pattern: /coveralls[_-]?api[_-]?token(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'coveralls_repo_token',
  pattern: /coveralls[_-]?repo[_-]?token(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'coveralls_token',
  pattern: /coveralls[_-]?token(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'coverity_scan_token',
  pattern: /coverity[_-]?scan[_-]?token(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'cypress_record_key',
  pattern: /cypress[_-]?record[_-]?key(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'danger_github_api_token',
  pattern: /danger[_-]?github[_-]?api[_-]?token(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'database_host',
  pattern: /database[_-]?host(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'database_name',
  pattern: /database[_-]?name(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'database_password',
  pattern: /database[_-]?password(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'database_port',
  pattern: /database[_-]?port(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'database_user',
  pattern: /database[_-]?user(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'database_username',
  pattern: /database[_-]?username(=| =|:| :)/,
  confidence: 'high',
},
{
  name: 'datadog_api_key',
  pattern: /datadog[_-]?api[_-]?key(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'datadog_app_key',
  pattern: /datadog[_-]?app[_-]?key(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'db_connection',
  pattern: /db[_-]?connection(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'db_database',
  pattern: /db[_-]?database(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'db_host',
  pattern: /db[_-]?host(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'db_password',
  pattern: /db[_-]?password(=| =|:| :)/,
  confidence: 'high',
},
{
  name: 'db_pw',
  pattern: /db[_-]?pw(=| =|:| :)/,
  confidence: 'high',
},
{
  name: 'db_user',
  pattern: /db[_-]?user(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'db_username',
  pattern: /db[_-]?username(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'ddg_test_email',
  pattern: /ddg[_-]?test[_-]?email(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'ddg_test_email_pw',
  pattern: /ddg[_-]?test[_-]?email[_-]?pw(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'ddgc_github_token',
  pattern: /ddgc[_-]?github[_-]?token(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'deploy_password',
  pattern: /deploy[_-]?password(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'deploy_secure',
  pattern: /deploy[_-]?secure(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'deploy_token',
  pattern: /deploy[_-]?token(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'deploy_user',
  pattern: /deploy[_-]?user(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'dgpg_passphrase',
  pattern: /dgpg[_-]?passphrase(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'digitalocean_access_token',
  pattern: /digitalocean[_-]?access[_-]?token(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'digitalocean_ssh_key_body',
  pattern: /digitalocean[_-]?ssh[_-]?key[_-]?body(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'digitalocean_ssh_key_ids',
  pattern: /digitalocean[_-]?ssh[_-]?key[_-]?ids(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'docker_hub_password',
  pattern: /docker[_-]?hub[_-]?password(=| =|:| :)/,
  confidence: 'high',
},
{
  name: 'docker_key',
  pattern: /docker[_-]?key(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'docker_pass',
  pattern: /docker[_-]?pass(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'docker_passwd',
  pattern: /docker[_-]?passwd(=| =|:| :)/,
  confidence: 'high',
},
{
  name: 'docker_password',
  pattern: /docker[_-]?password(=| =|:| :)/,
  confidence: 'high',
},
{
  name: 'docker_postgres_url',
  pattern: /docker[_-]?postgres[_-]?url(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'docker_token',
  pattern: /docker[_-]?token(=| =|:| :)/,
  confidence: 'high',
},
{
  name: 'dockerhub_password',
  pattern: /dockerhub[_-]?password(=| =|:| :)/,
  confidence: 'high',
},
{
  name: 'dockerhubpassword',
  pattern: /dockerhubpassword(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'doordash_auth_token',
  pattern: /doordash[_-]?auth[_-]?token(=| =|:| :)/,
  confidence: 'high',
},
{
  name: 'dropbox_oauth_bearer',
  pattern: /dropbox[_-]?oauth[_-]?bearer(=| =|:| :)/,
  confidence: 'high',
},
{
  name: 'droplet_travis_password',
  pattern: /droplet[_-]?travis[_-]?password(=| =|:| :)/,
  confidence: 'high',
},
{
  name: 'dsonar_login',
  pattern: /dsonar[_-]?login(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'dsonar_projectkey',
  pattern: /dsonar[_-]?projectkey(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'elastic_cloud_auth',
  pattern: /elastic[_-]?cloud[_-]?auth(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'elasticsearch_password',
  pattern: /elasticsearch[_-]?password(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'encryption_password',
  pattern: /encryption[_-]?password(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'end_user_password',
  pattern: /end[_-]?user[_-]?password(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'env_github_oauth_token',
  pattern: /env[_-]?github[_-]?oauth[_-]?token(=| =|:| :)/,
  confidence: 'high',
},
{
  name: 'env_heroku_api_key',
  pattern: /env[_-]?heroku[_-]?api[_-]?key(=| =|:| :)/,
  confidence: 'high',
},
{
  name: 'env_key',
  pattern: /env[_-]?key(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'env_secret',
  pattern: /env[_-]?secret(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'env_secret_access_key',
  pattern: /env[_-]?secret[_-]?access[_-]?key(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'env_sonatype_password',
  pattern: /env[_-]?sonatype[_-]?password(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'eureka_awssecretkey',
  pattern: /eureka[_-]?awssecretkey(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'exp_password',
  pattern: /exp[_-]?password(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'facebook_access_token',
  pattern: /(EAACEdEose0cBA[0-9A-Za-z]+)/,
  confidence: 'high',
},
{
  name: 'facebook_oauth',
  pattern: /[f|F][a|A][c|C][e|E][b|B][o|O][o|O][k|K].*[''|"][0-9a-f]{32}[''|"]/,
  confidence: 'low',
},
{
  name: 'file_password',
  pattern: /file[_-]?password(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'firebase_api_json',
  pattern: /firebase[_-]?api[_-]?json(=| =|:| :)/,
  confidence: 'high',
},
{
  name: 'firebase_api_token',
  pattern: /firebase[_-]?api[_-]?token(=| =|:| :)/,
  confidence: 'high',
},
{
  name: 'firebase_key',
  pattern: /firebase[_-]?key(=| =|:| :)/,
  confidence: 'high',
},
{
  name: 'firebase_project_develop',
  pattern: /firebase[_-]?project[_-]?develop(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'firebase_token',
  pattern: /firebase[_-]?token(=| =|:| :)/,
  confidence: 'high',
},
{
  name: 'firefox_secret',
  pattern: /firefox[_-]?secret(=| =|:| :)/,
  confidence: 'high',
},
{
  name: 'flask_secret_key',
  pattern: /flask[_-]?secret[_-]?key(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'flickr_api_key',
  pattern: /flickr[_-]?api[_-]?key(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'flickr_api_secret',
  pattern: /flickr[_-]?api[_-]?secret(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'fossa_api_key',
  pattern: /fossa[_-]?api[_-]?key(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'ftp_host',
  pattern: /ftp[_-]?host(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'ftp_login',
  pattern: /ftp[_-]?login(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'ftp_password',
  pattern: /ftp[_-]?password(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'ftp_pw',
  pattern: /ftp[_-]?pw(=| =|:| :)/,
  confidence: 'high',
},
{
  name: 'ftp_user',
  pattern: /ftp[_-]?user(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'ftp_username',
  pattern: /ftp[_-]?username(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'gcloud_bucket',
  pattern: /gcloud[_-]?bucket(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'gcloud_project',
  pattern: /gcloud[_-]?project(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'gcloud_service_key',
  pattern: /gcloud[_-]?service[_-]?key(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'gcr_password',
  pattern: /gcr[_-]?password(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'gcs_bucket',
  pattern: /gcs[_-]?bucket(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'gh_api_key',
  pattern: /gh[_-]?api[_-]?key(=| =|:| :)/,
  confidence: 'high',
},
{
  name: 'gh_email',
  pattern: /gh[_-]?email(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'gh_next_oauth_client_secret',
  pattern: /gh[_-]?next[_-]?oauth[_-]?client[_-]?secret(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'gh_next_unstable_oauth_client_id',
  pattern: /gh[_-]?next[_-]?unstable[_-]?oauth[_-]?client[_-]?id(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'gh_next_unstable_oauth_client_secret',
  pattern: /gh[_-]?next[_-]?unstable[_-]?oauth[_-]?client[_-]?secret(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'gh_oauth_client_secret',
  pattern: /gh[_-]?oauth[_-]?client[_-]?secret(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'gh_oauth_token',
  pattern: /gh[_-]?oauth[_-]?token(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'gh_repo_token',
  pattern: /gh[_-]?repo[_-]?token(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'gh_token',
  pattern: /gh[_-]?token(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'gh_unstable_oauth_client_secret',
  pattern: /gh[_-]?unstable[_-]?oauth[_-]?client[_-]?secret(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'ghb_token',
  pattern: /ghb[_-]?token(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'ghost_api_key',
  pattern: /ghost[_-]?api[_-]?key(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'git_author_email',
  pattern: /git[_-]?author[_-]?email(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'git_author_name',
  pattern: /git[_-]?author[_-]?name(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'git_committer_email',
  pattern: /git[_-]?committer[_-]?email(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'git_committer_name',
  pattern: /git[_-]?committer[_-]?name(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'git_email',
  pattern: /git[_-]?email(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'git_name',
  pattern: /git[_-]?name(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'git_token',
  pattern: /git[_-]?token(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'github_access_token - 1',
  pattern: /github[_-]?access[_-]?token(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'github_access_token - 2',
  pattern: /[a-zA-Z0-9_-]*:[a-zA-Z0-9_-]+@github.com*/,
  confidence: 'low',
},
{
  name: 'github_api_key',
  pattern: /github[_-]?api[_-]?key(=| =|:| :)/,
  confidence: 'high',
},
{
  name: 'github_api_token',
  pattern: /github[_-]?api[_-]?token(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'github_auth',
  pattern: /github[_-]?auth(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'github_auth_token',
  pattern: /github[_-]?auth[_-]?token(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'github_client_secret',
  pattern: /github[_-]?client[_-]?secret(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'github_deploy_hb_doc_pass',
  pattern: /github[_-]?deploy[_-]?hb[_-]?doc[_-]?pass(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'github_deployment_token',
  pattern: /github[_-]?deployment[_-]?token(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'github_hunter_token',
  pattern: /github[_-]?hunter[_-]?token(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'github_hunter_username',
  pattern: /github[_-]?hunter[_-]?username(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'github_key',
  pattern: /github[_-]?key(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'github_oauth',
  pattern: /github[_-]?oauth(=| =|:| :)/,
  confidence: 'high',
},
{
  name: 'github_oauth_token',
  pattern: /github[_-]?oauth[_-]?token(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'github_password',
  pattern: /github[_-]?password(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'github_pwd',
  pattern: /github[_-]?pwd(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'github_release_token',
  pattern: /github[_-]?release[_-]?token(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'github_repo',
  pattern: /github[_-]?repo(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'github_token',
  pattern: /github[_-]?token(=| =|:| :)/,
  confidence: 'high',
},
{
  name: 'github_tokens',
  pattern: /github[_-]?tokens(=| =|:| :)/,
  confidence: 'high',
},
{
  name: 'gitlab_user_email',
  pattern: /gitlab[_-]?user[_-]?email(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'gogs_password',
  pattern: /gogs[_-]?password(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'google_account_type',
  pattern: /google[_-]?account[_-]?type(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'google_client_email',
  pattern: /google[_-]?client[_-]?email(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'google_client_id',
  pattern: /google[_-]?client[_-]?id(=| =|:| :)/,
  confidence: 'high',
},
{
  name: 'google_client_secret',
  pattern: /google[_-]?client[_-]?secret(=| =|:| :)/,
  confidence: 'high',
},
{
  name: 'google_maps_api_key',
  pattern: /google[_-]?maps[_-]?api[_-]?key(=| =|:| :)/,
  confidence: 'high',
},
{
  name: 'google_oauth',
  pattern: /(ya29.[0-9A-Za-z-_]+)/,
  confidence: 'high',
},
{
  name: 'google_patterns',
  pattern: /(?:google_client_id|google_client_secret|google_client_token)/,
  confidence: 'low',
},
{
  name: 'google_private_key',
  pattern: /google[_-]?private[_-]?key(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'google_url',
  pattern: /([0-9]{12}-[a-z0-9]{32}.apps.googleusercontent.com)/,
  confidence: 'low',
},
{
  name: 'gpg_key_name',
  pattern: /gpg[_-]?key[_-]?name(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'gpg_keyname',
  pattern: /gpg[_-]?keyname(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'gpg_ownertrust',
  pattern: /gpg[_-]?ownertrust(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'gpg_passphrase',
  pattern: /gpg[_-]?passphrase(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'gpg_private_key',
  pattern: /gpg[_-]?private[_-]?key(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'gpg_secret_keys',
  pattern: /gpg[_-]?secret[_-]?keys(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'gradle_publish_key',
  pattern: /gradle[_-]?publish[_-]?key(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'gradle_publish_secret',
  pattern: /gradle[_-]?publish[_-]?secret(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'gradle_signing_key_id',
  pattern: /gradle[_-]?signing[_-]?key[_-]?id(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'gradle_signing_password',
  pattern: /gradle[_-]?signing[_-]?password(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'gren_github_token',
  pattern: /gren[_-]?github[_-]?token(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'grgit_user',
  pattern: /grgit[_-]?user(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'hab_auth_token',
  pattern: /hab[_-]?auth[_-]?token(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'hab_key',
  pattern: /hab[_-]?key(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'hb_codesign_gpg_pass',
  pattern: /hb[_-]?codesign[_-]?gpg[_-]?pass(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'hb_codesign_key_pass',
  pattern: /hb[_-]?codesign[_-]?key[_-]?pass(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'heroku_api_key',
  pattern: /heroku[_-]?api[_-]?key(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'heroku_api_key_api_key',
  pattern: /([h|H][e|E][r|R][o|O][k|K][u|U].{0,30}[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12})/,
  confidence: 'low',
},
{
  name: 'heroku_email',
  pattern: /heroku[_-]?email(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'heroku_token',
  pattern: /heroku[_-]?token(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'hockeyapp',
  pattern: /hockey.{0,50}("|')?[0-9a-f]{32}("|')?/,
  confidence: 'low',
},
{
  name: 'hockeyapp_token',
  pattern: /hockeyapp[_-]?token(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'homebrew_github_api_token',
  pattern: /homebrew[_-]?github[_-]?api[_-]?token(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'hub_dxia2_password',
  pattern: /hub[_-]?dxia2[_-]?password(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'ij_repo_password',
  pattern: /ij[_-]?repo[_-]?password(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'ij_repo_username',
  pattern: /ij[_-]?repo[_-]?username(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'index_name',
  pattern: /index[_-]?name(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'integration_test_api_key',
  pattern: /integration[_-]?test[_-]?api[_-]?key(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'integration_test_appid',
  pattern: /integration[_-]?test[_-]?appid(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'internal_secrets',
  pattern: /internal[_-]?secrets(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'ios_docs_deploy_token',
  pattern: /ios[_-]?docs[_-]?deploy[_-]?token(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'itest_gh_token',
  pattern: /itest[_-]?gh[_-]?token(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'jdbc',
  pattern: /mysql: jdbc:mysql(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'jdbc_databaseurl',
  pattern: /jdbc[_-]?databaseurl(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'jdbc_host',
  pattern: /jdbc[_-]?host(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'jwt_secret',
  pattern: /jwt[_-]?secret(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'kafka_admin_url',
  pattern: /kafka[_-]?admin[_-]?url(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'kafka_instance_name',
  pattern: /kafka[_-]?instance[_-]?name(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'kafka_rest_url',
  pattern: /kafka[_-]?rest[_-]?url(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'keystore_pass',
  pattern: /keystore[_-]?pass(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'kovan_private_key',
  pattern: /kovan[_-]?private[_-]?key(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'kubecfg_s3_path',
  pattern: /kubecfg[_-]?s3[_-]?path(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'kubeconfig',
  pattern: /kubeconfig(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'kxoltsn3vogdop92m',
  pattern: /kxoltsn3vogdop92m(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'leanplum_key',
  pattern: /leanplum[_-]?key(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'lektor_deploy_password',
  pattern: /lektor[_-]?deploy[_-]?password(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'lektor_deploy_username',
  pattern: /lektor[_-]?deploy[_-]?username(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'lighthouse_api_key',
  pattern: /lighthouse[_-]?api[_-]?key(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'linux_signing_key',
  pattern: /linux[_-]?signing[_-]?key(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'll_publish_url',
  pattern: /ll[_-]?publish[_-]?url(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'll_shared_key',
  pattern: /ll[_-]?shared[_-]?key(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'looker_test_runner_client_secret',
  pattern: /looker[_-]?test[_-]?runner[_-]?client[_-]?secret(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'lottie_happo_api_key',
  pattern: /lottie[_-]?happo[_-]?api[_-]?key(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'lottie_happo_secret_key',
  pattern: /lottie[_-]?happo[_-]?secret[_-]?key(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'lottie_s3_secret_key',
  pattern: /lottie[_-]?s3[_-]?secret[_-]?key(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'lottie_upload_cert_key_password',
  pattern: /lottie[_-]?upload[_-]?cert[_-]?key[_-]?password(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'lottie_upload_cert_key_store_password',
  pattern: /lottie[_-]?upload[_-]?cert[_-]?key[_-]?store[_-]?password(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'magento_auth_password',
  pattern: /magento[_-]?auth[_-]?password(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'magento_auth_username',
  pattern: /magento[_-]?auth[_-]?username (=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'magento_password',
  pattern: /magento[_-]?password(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'mail_password',
  pattern: /mail[_-]?password(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'mailchimp',
  pattern: /(W(?:[a-f0-9]{32}(-us[0-9]{1,2}))a-zA-Z0-9)/,
  confidence: 'high',
},
{
  name: 'mailchimp_api_key',
  pattern: /mailchimp[_-]?api[_-]?key(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'mailchimp_key',
  pattern: /mailchimp[_-]?key(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'mailer_password',
  pattern: /mailer[_-]?password(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'mailgun',
  pattern: /(key-[0-9a-f]{32})/,
  confidence: 'low',
},
{
  name: 'mailgun_api_key',
  pattern: /mailgun[_-]?api[_-]?key(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'mailgun_apikey',
  pattern: /mailgun[_-]?apikey(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'mailgun_password',
  pattern: /mailgun[_-]?password(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'mailgun_priv_key',
  pattern: /mailgun[_-]?priv[_-]?key(=| =|:| :)/,
  confidence: 'high',
},
{
  name: 'mailgun_pub_apikey',
  pattern: /mailgun[_-]?pub[_-]?apikey(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'mailgun_pub_key',
  pattern: /mailgun[_-]?pub[_-]?key(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'mailgun_secret_api_key',
  pattern: /mailgun[_-]?secret[_-]?api[_-]?key(=| =|:| :)/,
  confidence: 'high',
},
{
  name: 'manage_key',
  pattern: /manage[_-]?key(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'manage_secret',
  pattern: /manage[_-]?secret(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'management_token',
  pattern: /management[_-]?token(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'managementapiaccesstoken',
  pattern: /managementapiaccesstoken(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'mandrill_api_key',
  pattern: /mandrill[_-]?api[_-]?key(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'manifest_app_token',
  pattern: /manifest[_-]?app[_-]?token(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'manifest_app_url',
  pattern: /manifest[_-]?app[_-]?url(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'mapbox_access_token',
  pattern: /mapbox[_-]?access[_-]?token(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'mapbox_api_token',
  pattern: /mapbox[_-]?api[_-]?token(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'mapbox_aws_access_key_id',
  pattern: /mapbox[_-]?aws[_-]?access[_-]?key[_-]?id(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'mapbox_aws_secret_access_key',
  pattern: /mapbox[_-]?aws[_-]?secret[_-]?access[_-]?key(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'mapboxaccesstoken',
  pattern: /mapboxaccesstoken(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'master_password',
  pattern: /(master_password).+/,
  confidence: 'high',
},
{
  name: 'mg_api_key',
  pattern: /mg[_-]?api[_-]?key(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'mg_public_api_key',
  pattern: /mg[_-]?public[_-]?api[_-]?key(=| =|:| :)/,
  confidence: 'high',
},
{
  name: 'mh_apikey',
  pattern: /mh[_-]?apikey(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'mh_password',
  pattern: /mh[_-]?password(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'mile_zero_key',
  pattern: /mile[_-]?zero[_-]?key(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'minio_access_key',
  pattern: /minio[_-]?access[_-]?key(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'minio_secret_key',
  pattern: /minio[_-]?secret[_-]?key(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'multi_bob_sid',
  pattern: /multi[_-]?bob[_-]?sid(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'multi_connect_sid',
  pattern: /multi[_-]?connect[_-]?sid(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'multi_disconnect_sid',
  pattern: /multi[_-]?disconnect[_-]?sid(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'multi_workflow_sid',
  pattern: /multi[_-]?workf'low'[_-]?sid(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'multi_workspace_sid',
  pattern: /multi[_-]?workspace[_-]?sid(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'my_secret_env',
  pattern: /my[_-]?secret[_-]?env(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'mysql_database',
  pattern: /mysql[_-]?database(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'mysql_hostname',
  pattern: /mysql[_-]?hostname(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'mysql_password',
  pattern: /mysql[_-]?password(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'mysql_root_password',
  pattern: /mysql[_-]?root[_-]?password(=| =|:| :)/,
  confidence: 'high',
},
{
  name: 'mysql_user',
  pattern: /mysql[_-]?user(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'mysql_username',
  pattern: /mysql[_-]?username(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'mysqlmasteruser',
  pattern: /mysqlmasteruser(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'mysqlsecret',
  pattern: /mysqlsecret(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'nativeevents',
  pattern: /nativeevents(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'netlify_api_key',
  pattern: /netlify[_-]?api[_-]?key(=| =|:| :)/,
  confidence: 'high',
},
{
  name: 'new_relic_beta_token',
  pattern: /new[_-]?relic[_-]?beta[_-]?token(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'nexus_password',
  pattern: /nexus[_-]?password(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'nexuspassword',
  pattern: /nexuspassword(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'ngrok_auth_token',
  pattern: /ngrok[_-]?auth[_-]?token(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'ngrok_token',
  pattern: /ngrok[_-]?token(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'node_env',
  pattern: /node[_-]?env(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'node_pre_gyp_accesskeyid',
  pattern: /node[_-]?pre[_-]?gyp[_-]?accesskeyid(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'node_pre_gyp_github_token',
  pattern: /node[_-]?pre[_-]?gyp[_-]?github[_-]?token(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'node_pre_gyp_secretaccesskey',
  pattern: /node[_-]?pre[_-]?gyp[_-]?secretaccesskey(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'non_token',
  pattern: /non[_-]?token(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'now_token',
  pattern: /now[_-]?token(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'npm_api_key',
  pattern: /npm[_-]?api[_-]?key(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'npm_api_token',
  pattern: /npm[_-]?api[_-]?token(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'npm_auth_token',
  pattern: /npm[_-]?auth[_-]?token(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'npm_email',
  pattern: /npm[_-]?email(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'npm_password',
  pattern: /npm[_-]?password(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'npm_secret_key',
  pattern: /npm[_-]?secret[_-]?key(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'npm_token - 1',
  pattern: /npm[_-]?token(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'nuget_api_key - 1',
  pattern: /(oy2[a-z0-9]{43})/,
  confidence: 'low',
},
{
  name: 'nuget_api_key - 2',
  pattern: /nuget[_-]?api[_-]?key(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'numbers_service_pass',
  pattern: /numbers[_-]?service[_-]?pass(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'oauth_token',
  pattern: /oauth[_-]?token(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'object_storage_password',
  pattern: /object[_-]?storage[_-]?password(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'object_storage_region_name',
  pattern: /object[_-]?storage[_-]?region[_-]?name(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'object_store_bucket',
  pattern: /object[_-]?store[_-]?bucket(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'object_store_creds',
  pattern: /object[_-]?store[_-]?creds(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'oc_pass',
  pattern: /oc[_-]?pass(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'octest_app_password',
  pattern: /octest[_-]?app[_-]?password(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'octest_app_username',
  pattern: /octest[_-]?app[_-]?username(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'octest_password',
  pattern: /octest[_-]?password(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'ofta_key',
  pattern: /ofta[_-]?key(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'ofta_region',
  pattern: /ofta[_-]?region(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'ofta_secret',
  pattern: /ofta[_-]?secret(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'okta_client_token',
  pattern: /okta[_-]?client[_-]?token(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'okta_oauth2_client_secret',
  pattern: /okta[_-]?oauth2[_-]?client[_-]?secret(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'okta_oauth2_clientsecret',
  pattern: /okta[_-]?oauth2[_-]?clientsecret(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'omise_key',
  pattern: /omise[_-]?key(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'omise_pkey',
  pattern: /omise[_-]?pkey(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'omise_pubkey',
  pattern: /omise[_-]?pubkey(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'omise_skey',
  pattern: /omise[_-]?skey(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'onesignal_api_key',
  pattern: /onesignal[_-]?api[_-]?key(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'onesignal_user_auth_key',
  pattern: /onesignal[_-]?user[_-]?auth[_-]?key(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'open_whisk_key',
  pattern: /open[_-]?whisk[_-]?key(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'openwhisk_key',
  pattern: /openwhisk[_-]?key(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'os_auth_url',
  pattern: /os[_-]?auth[_-]?url(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'os_password',
  pattern: /os[_-]?password(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'ossrh_jira_password',
  pattern: /ossrh[_-]?jira[_-]?password(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'ossrh_pass',
  pattern: /ossrh[_-]?pass(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'ossrh_password',
  pattern: /ossrh[_-]?password(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'ossrh_secret',
  pattern: /ossrh[_-]?secret(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'ossrh_username',
  pattern: /ossrh[_-]?username(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'outlook_team',
  pattern: /(https:\/\/outlook.office.com\/webhook\/[0-9a-f-]{36}@)/,
  confidence: 'low',
},
{
  name: 'packagecloud_token',
  pattern: /packagecloud[_-]?token(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'pagerduty_apikey',
  pattern: /pagerduty[_-]?apikey(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'parse_js_key',
  pattern: /parse[_-]?js[_-]?key(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'passwordtravis',
  pattern: /passwordtravis(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'paypal_braintree_access_token',
  pattern: /(access_token$production$[0-9a-z]{16}$[0-9a-f]{32})/,
  confidence: 'low',
},
{
  name: 'paypal_client_secret',
  pattern: /paypal[_-]?client[_-]?secret(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'percy_project',
  pattern: /percy[_-]?project(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'percy_token',
  pattern: /percy[_-]?token(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'personal_key',
  pattern: /personal[_-]?key(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'personal_secret',
  pattern: /personal[_-]?secret(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'pg_database',
  pattern: /pg[_-]?database(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'pg_host',
  pattern: /pg[_-]?host(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'places_api_key',
  pattern: /places[_-]?api[_-]?key(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'places_apikey',
  pattern: /places[_-]?apikey(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'plotly_apikey',
  pattern: /plotly[_-]?apikey(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'plugin_password',
  pattern: /plugin[_-]?password(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'postgres_env_postgres_db',
  pattern: /postgres[_-]?env[_-]?postgres[_-]?db(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'postgres_env_postgres_password',
  pattern: /postgres[_-]?env[_-]?postgres[_-]?password(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'postgresql_db',
  pattern: /postgresql[_-]?db(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'postgresql_pass',
  pattern: /postgresql[_-]?pass(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'prebuild_auth',
  pattern: /prebuild[_-]?auth(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'preferred_username',
  pattern: /preferred[_-]?username(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'pring_mail_username',
  pattern: /pring[_-]?mail[_-]?username(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'private_key',
  pattern: /-----(?:(?:BEGIN|END) )(?:(?:EC|PGP|DSA|RSA|OPENSSH).)?PRIVATE.KEY(.BLOCK)?-----/,
  confidence: 'low',
},
{
  name: 'private_signing_password',
  pattern: /private[_-]?signing[_-]?password(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'prod_access_key_id',
  pattern: /prod[_-]?access[_-]?key[_-]?id(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'prod_password',
  pattern: /prod[_-]?password(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'prod_secret_key',
  pattern: /prod[_-]?secret[_-]?key(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'project_config',
  pattern: /project[_-]?config(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'publish_access',
  pattern: /publish[_-]?access(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'publish_key',
  pattern: /publish[_-]?key(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'publish_secret',
  pattern: /publish[_-]?secret(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'pushover_token',
  pattern: /pushover[_-]?token(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'pypi_passowrd',
  pattern: /pypi[_-]?passowrd(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'qiita_token',
  pattern: /qiita[_-]?token(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'quip_token',
  pattern: /quip[_-]?token(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'rabbitmq_password',
  pattern: /rabbitmq[_-]?password(=| =|:| :)/,
  confidence: 'high',
},
{
  name: 'randrmusicapiaccesstoken',
  pattern: /randrmusicapiaccesstoken(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'redis_stunnel_urls',
  pattern: /redis[_-]?stunnel[_-]?urls(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'rediscloud_url',
  pattern: /rediscloud[_-]?url(=| =|:| :)/,
  confidence: 'high',
},
{
  name: 'refresh_token',
  pattern: /refresh[_-]?token(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'registry_pass',
  pattern: /registry[_-]?pass(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'registry_secure',
  pattern: /registry[_-]?secure(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'release_gh_token',
  pattern: /release[_-]?gh[_-]?token(=| =|:| :)/,
  confidence: 'high',
},
{
  name: 'release_token',
  pattern: /release[_-]?token(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'reporting_webdav_pwd',
  pattern: /reporting[_-]?webdav[_-]?pwd(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'reporting_webdav_url',
  pattern: /reporting[_-]?webdav[_-]?url(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'repotoken',
  pattern: /repotoken(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'rest_api_key',
  pattern: /rest[_-]?api[_-]?key(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'rinkeby_private_key',
  pattern: /rinkeby[_-]?private[_-]?key(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'ropsten_private_key',
  pattern: /ropsten[_-]?private[_-]?key(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'route53_access_key_id',
  pattern: /route53[_-]?access[_-]?key[_-]?id(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'rtd_key_pass',
  pattern: /rtd[_-]?key[_-]?pass(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'rtd_store_pass',
  pattern: /rtd[_-]?store[_-]?pass(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'rubygems_auth_token',
  pattern: /rubygems[_-]?auth[_-]?token(=| =|:| :)/,
  confidence: 'high',
},
{
  name: 's3_access_key',
  pattern: /s3[_-]?access[_-]?key(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 's3_access_key_id',
  pattern: /s3[_-]?access[_-]?key[_-]?id(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 's3_bucket_name_app_logs',
  pattern: /s3[_-]?bucket[_-]?name[_-]?app[_-]?logs(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 's3_bucket_name_assets',
  pattern: /s3[_-]?bucket[_-]?name[_-]?assets(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 's3_external_3_amazonaws_com',
  pattern: /s3[_-]?external[_-]?3[_-]?amazonaws[_-]?com(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 's3_key',
  pattern: /s3[_-]?key(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 's3_key_app_logs',
  pattern: /s3[_-]?key[_-]?app[_-]?logs(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 's3_key_assets',
  pattern: /s3[_-]?key[_-]?assets(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 's3_secret_app_logs',
  pattern: /s3[_-]?secret[_-]?app[_-]?logs(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 's3_secret_assets',
  pattern: /s3[_-]?secret[_-]?assets(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 's3_secret_key',
  pattern: /s3[_-]?secret[_-]?key(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 's3_user_secret',
  pattern: /s3[_-]?user[_-]?secret(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'sacloud_access_token',
  pattern: /sacloud[_-]?access[_-]?token(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'sacloud_access_token_secret',
  pattern: /sacloud[_-]?access[_-]?token[_-]?secret(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'sacloud_api',
  pattern: /sacloud[_-]?api(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'salesforce_bulk_test_password',
  pattern: /salesforce[_-]?bulk[_-]?test[_-]?password(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'salesforce_bulk_test_security_token',
  pattern: /salesforce[_-]?bulk[_-]?test[_-]?security[_-]?token(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'sandbox_access_token',
  pattern: /sandbox[_-]?access[_-]?token(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'sandbox_aws_access_key_id',
  pattern: /sandbox[_-]?aws[_-]?access[_-]?key[_-]?id(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'sandbox_aws_secret_access_key',
  pattern: /sandbox[_-]?aws[_-]?secret[_-]?access[_-]?key(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'sauce_access_key',
  pattern: /sauce[_-]?access[_-]?key(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'sauce_token',
  pattern: /(sauce.{0,50}("|')?[0-9a-f-]{36}("|')?)/,
  confidence: 'low',
},
{
  name: 'scrutinizer_token',
  pattern: /scrutinizer[_-]?token(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'sdr_token',
  pattern: /sdr[_-]?token(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'secret_0',
  pattern: /secret[_-]?0(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'secret_1',
  pattern: /secret[_-]?1(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'secret_10',
  pattern: /secret[_-]?10(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'secret_11',
  pattern: /secret[_-]?11(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'secret_2',
  pattern: /secret[_-]?2(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'secret_3',
  pattern: /secret[_-]?3(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'secret_4',
  pattern: /secret[_-]?4(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'secret_5',
  pattern: /secret[_-]?5(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'secret_6',
  pattern: /secret[_-]?6(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'secret_7',
  pattern: /secret[_-]?7(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'secret_8',
  pattern: /secret[_-]?8(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'secret_9',
  pattern: /secret[_-]?9(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'secret_key_base',
  pattern: /secret[_-]?key[_-]?base(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'secretaccesskey',
  pattern: /secretaccesskey(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'secretkey',
  pattern: /secretkey(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'segment_api_key',
  pattern: /segment[_-]?api[_-]?key(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'selion_log_level_dev',
  pattern: /selion[_-]?log[_-]?level[_-]?dev(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'selion_selenium_host',
  pattern: /selion[_-]?selenium[_-]?host(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'sendgrid - 2',
  pattern: /sendgrid(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'sendgrid_api_key - 1',
  pattern: /sendgrid[_-]?api[_-]?key(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'sendgrid_key',
  pattern: /sendgrid[_-]?key(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'sendgrid_password',
  pattern: /sendgrid[_-]?password(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'sendgrid_user',
  pattern: /sendgrid[_-]?user(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'sendgrid_username',
  pattern: /sendgrid[_-]?username(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'sendwithus_key',
  pattern: /sendwithus[_-]?key(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'sentry_auth_token',
  pattern: /sentry[_-]?auth[_-]?token(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'sentry_default_org',
  pattern: /sentry[_-]?default[_-]?org(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'sentry_endpoint',
  pattern: /sentry[_-]?endpoint(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'sentry_key',
  pattern: /sentry[_-]?key(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'service_account_secret',
  pattern: /service[_-]?account[_-]?secret(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'ses_access_key',
  pattern: /ses[_-]?access[_-]?key(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'ses_secret_key',
  pattern: /ses[_-]?secret[_-]?key(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'setdstaccesskey',
  pattern: /setdstaccesskey(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'setdstsecretkey',
  pattern: /setdstsecretkey(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'setsecretkey',
  pattern: /setsecretkey(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'signing_key',
  pattern: /signing[_-]?key(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'signing_key_password',
  pattern: /signing[_-]?key[_-]?password(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'signing_key_secret',
  pattern: /signing[_-]?key[_-]?secret(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'signing_key_sid',
  pattern: /signing[_-]?key[_-]?sid(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'slack_webhook_url',
  pattern: /(hooks.slack.com\/services\/T[A-Z0-9]{8}\/B[A-Z0-9]{8}\/[a-zA-Z0-9]{1,})/,
  confidence: 'low',
},
{
  name: 'slash_developer_space',
  pattern: /slash[_-]?developer[_-]?space(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'slash_developer_space_key',
  pattern: /slash[_-]?developer[_-]?space[_-]?key(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'slate_user_email',
  pattern: /slate[_-]?user[_-]?email(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'snoowrap_client_secret',
  pattern: /snoowrap[_-]?client[_-]?secret(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'snoowrap_password',
  pattern: /snoowrap[_-]?password(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'snoowrap_refresh_token',
  pattern: /snoowrap[_-]?refresh[_-]?token(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'snyk_api_token',
  pattern: /snyk[_-]?api[_-]?token(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'snyk_token',
  pattern: /snyk[_-]?token(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'socrata_app_token',
  pattern: /socrata[_-]?app[_-]?token(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'socrata_password',
  pattern: /socrata[_-]?password(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'sonar_organization_key',
  pattern: /sonar[_-]?organization[_-]?key(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'sonar_project_key',
  pattern: /sonar[_-]?project[_-]?key(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'sonar_token',
  pattern: /sonar[_-]?token(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'sonarqube_docs_api_key',
  pattern: /(sonar.{0,50}("|')?[0-9a-f]{40}("|')?)/,
  confidence: 'low',
},
{
  name: 'sonatype_gpg_key_name',
  pattern: /sonatype[_-]?gpg[_-]?key[_-]?name(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'sonatype_gpg_passphrase',
  pattern: /sonatype[_-]?gpg[_-]?passphrase(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'sonatype_nexus_password',
  pattern: /sonatype[_-]?nexus[_-]?password(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'sonatype_pass',
  pattern: /sonatype[_-]?pass(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'sonatype_password',
  pattern: /sonatype[_-]?password(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'sonatype_token_password',
  pattern: /sonatype[_-]?token[_-]?password(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'sonatype_token_user',
  pattern: /sonatype[_-]?token[_-]?user(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'sonatypepassword',
  pattern: /sonatypepassword(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'soundcloud_client_secret',
  pattern: /soundcloud[_-]?client[_-]?secret(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'soundcloud_password',
  pattern: /soundcloud[_-]?password(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'spaces_access_key_id',
  pattern: /spaces[_-]?access[_-]?key[_-]?id(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'spaces_secret_access_key',
  pattern: /spaces[_-]?secret[_-]?access[_-]?key(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'spotify_api_access_token',
  pattern: /spotify[_-]?api[_-]?access[_-]?token(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'spotify_api_client_secret',
  pattern: /spotify[_-]?api[_-]?client[_-]?secret(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'spring_mail_password',
  pattern: /spring[_-]?mail[_-]?password(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'sqsaccesskey',
  pattern: /sqsaccesskey(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'sqssecretkey',
  pattern: /sqssecretkey(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'square_app_secret',
  pattern: /(sq0[a-z]{3}-[0-9A-Za-z-_]{20,50})/,
  confidence: 'low',
},
{
  name: 'square_reader_sdk_repository_password',
  pattern: /square[_-]?reader[_-]?sdk[_-]?repository[_-]?password(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'srcclr_api_token',
  pattern: /srcclr[_-]?api[_-]?token(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'ssh_password',
  pattern: /(sshpass -p.*['|"])/,
  confidence: 'low',
},
{
  name: 'sshpass',
  pattern: /sshpass(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'ssmtp_config',
  pattern: /ssmtp[_-]?config(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'staging_base_url_runscope',
  pattern: /staging[_-]?base[_-]?url[_-]?runscope(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'star_test_aws_access_key_id',
  pattern: /star[_-]?test[_-]?aws[_-]?access[_-]?key[_-]?id(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'star_test_bucket',
  pattern: /star[_-]?test[_-]?bucket(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'star_test_location',
  pattern: /star[_-]?test[_-]?location(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'star_test_secret_access_key',
  pattern: /star[_-]?test[_-]?secret[_-]?access[_-]?key(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'starship_account_sid',
  pattern: /starship[_-]?account[_-]?sid(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'starship_auth_token',
  pattern: /starship[_-]?auth[_-]?token(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'stormpath_api_key_id',
  pattern: /stormpath[_-]?api[_-]?key[_-]?id(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'stormpath_api_key_secret',
  pattern: /stormpath[_-]?api[_-]?key[_-]?secret(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'strip_publishable_key',
  pattern: /strip[_-]?publishable[_-]?key(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'strip_secret_key',
  pattern: /strip[_-]?secret[_-]?key(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'stripe_private',
  pattern: /stripe[_-]?private(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'stripe_public',
  pattern: /stripe[_-]?public(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'stripe_restricted_api',
  pattern: /(rk_live_[0-9a-zA-Z]{24,34})/,
  confidence: 'low',
},
{
  name: 'stripe_standard_api',
  pattern: /(sk_live_[0-9a-zA-Z]{24,34})/,
  confidence: 'low',
},
{
  name: 'surge_login',
  pattern: /surge[_-]?login(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'surge_token',
  pattern: /surge[_-]?token(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'svn_pass',
  pattern: /svn[_-]?pass(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'tesco_api_key',
  pattern: /tesco[_-]?api[_-]?key(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'test_github_token',
  pattern: /test[_-]?github[_-]?token(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'test_test',
  pattern: /test[_-]?test(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'tester_keys_password',
  pattern: /tester[_-]?keys[_-]?password(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'thera_oss_access_key',
  pattern: /thera[_-]?oss[_-]?access[_-]?key(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'token_core_java',
  pattern: /token[_-]?core[_-]?java(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'travis_access_token',
  pattern: /travis[_-]?access[_-]?token(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'travis_api_token',
  pattern: /travis[_-]?api[_-]?token(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'travis_branch',
  pattern: /travis[_-]?branch(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'travis_com_token',
  pattern: /travis[_-]?com[_-]?token(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'travis_e2e_token',
  pattern: /travis[_-]?e2e[_-]?token(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'travis_gh_token',
  pattern: /travis[_-]?gh[_-]?token(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'travis_pull_request',
  pattern: /travis[_-]?pull[_-]?request(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'travis_secure_env_vars',
  pattern: /travis[_-]?secure[_-]?env[_-]?vars(=| =|:| :)/,
  confidence: 'high',
},
{
  name: 'travis_token',
  pattern: /travis[_-]?token(=| =|:| :)/,
  confidence: 'high',
},
{
  name: 'trex_client_token',
  pattern: /trex[_-]?client[_-]?token(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'trex_okta_client_token',
  pattern: /trex[_-]?okta[_-]?client[_-]?token(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'twilio_api_key',
  pattern: /twilio[_-]?api[_-]?key(=| =|:| :)/,
  confidence: 'high',
},
{
  name: 'twilio_api_secret',
  pattern: /twilio[_-]?api[_-]?secret(=| =|:| :)/,
  confidence: 'high',
},
{
  name: 'twilio_chat_account_api_service',
  pattern: /twilio[_-]?chat[_-]?account[_-]?api[_-]?service(=| =|:| :)/,
  confidence: 'high',
},
{
  name: 'twilio_configuration_sid',
  pattern: /twilio[_-]?configuration[_-]?sid(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'twilio_sid',
  pattern: /twilio[_-]?sid(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'twilio_token',
  pattern: /twilio[_-]?token(=| =|:| :)/,
  confidence: 'high',
},
{
  name: 'twine_password',
  pattern: /twine[_-]?password(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'twitter_consumer_key',
  pattern: /twitter[_-]?consumer[_-]?key(=| =|:| :)/,
  confidence: 'high',
},
{
  name: 'twitter_consumer_secret',
  pattern: /twitter[_-]?consumer[_-]?secret(=| =|:| :)/,
  confidence: 'high',
},
{
  name: 'twitteroauthaccesssecret',
  pattern: /twitteroauthaccesssecret(=| =|:| :)/,
  confidence: 'high',
},
{
  name: 'twitteroauthaccesstoken',
  pattern: /twitteroauthaccesstoken(=| =|:| :)/,
  confidence: 'high',
},
{
  name: 'unity_password',
  pattern: /unity[_-]?password(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'unity_serial',
  pattern: /unity[_-]?serial(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'urban_key',
  pattern: /urban[_-]?key(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'urban_master_secret',
  pattern: /urban[_-]?master[_-]?secret(=| =|:| :)/,
  confidence: 'high',
},
{
  name: 'urban_secret',
  pattern: /urban[_-]?secret(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'us_east_1_elb_amazonaws_com',
  pattern: /us[_-]?east[_-]?1[_-]?elb[_-]?amazonaws[_-]?com(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'use_ssh',
  pattern: /use[_-]?ssh(=| =|:| :)/,
  confidence: 'high',
},
{
  name: 'user_assets_access_key_id',
  pattern: /user[_-]?assets[_-]?access[_-]?key[_-]?id(=| =|:| :)/,
  confidence: 'high',
},
{
  name: 'user_assets_secret_access_key',
  pattern: /user[_-]?assets[_-]?secret[_-]?access[_-]?key(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'usertravis',
  pattern: /usertravis(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'v_sfdc_client_secret',
  pattern: /v[_-]?sfdc[_-]?client[_-]?secret(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'v_sfdc_password',
  pattern: /v[_-]?sfdc[_-]?password(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'vip_github_build_repo_deploy_key',
  pattern: /vip[_-]?github[_-]?build[_-]?repo[_-]?deploy[_-]?key(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'vip_github_deploy_key',
  pattern: /vip[_-]?github[_-]?deploy[_-]?key(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'vip_github_deploy_key_pass',
  pattern: /vip[_-]?github[_-]?deploy[_-]?key[_-]?pass(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'virustotal_apikey',
  pattern: /virustotal[_-]?apikey(=| =|:| :)/,
  confidence: 'high',
},
{
  name: 'visual_recognition_api_key',
  pattern: /visual[_-]?recognition[_-]?api[_-]?key(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'vscetoken',
  pattern: /vscetoken(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'wakatime_api_key',
  pattern: /wakatime[_-]?api[_-]?key(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'watson_conversation_password',
  pattern: /watson[_-]?conversation[_-]?password(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'watson_device_password',
  pattern: /watson[_-]?device[_-]?password(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'watson_password',
  pattern: /watson[_-]?password(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'widget_basic_password',
  pattern: /widget[_-]?basic[_-]?password(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'widget_basic_password_2',
  pattern: /widget[_-]?basic[_-]?password[_-]?2(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'widget_basic_password_3',
  pattern: /widget[_-]?basic[_-]?password[_-]?3(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'widget_basic_password_4',
  pattern: /widget[_-]?basic[_-]?password[_-]?4(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'widget_basic_password_5',
  pattern: /widget[_-]?basic[_-]?password[_-]?5(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'widget_fb_password',
  pattern: /widget[_-]?fb[_-]?password(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'widget_fb_password_2',
  pattern: /widget[_-]?fb[_-]?password[_-]?2(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'widget_fb_password_3',
  pattern: /widget[_-]?fb[_-]?password[_-]?3(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'widget_test_server',
  pattern: /widget[_-]?test[_-]?server(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'wincert_password',
  pattern: /wincert[_-]?password(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'wordpress_db_password',
  pattern: /wordpress[_-]?db[_-]?password(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'wordpress_db_user',
  pattern: /wordpress[_-]?db[_-]?user(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'wpjm_phpunit_google_geocode_api_key',
  pattern: /wpjm[_-]?phpunit[_-]?google[_-]?geocode[_-]?api[_-]?key(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'wporg_password',
  pattern: /wporg[_-]?password(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'wpt_db_password',
  pattern: /wpt[_-]?db[_-]?password(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'wpt_db_user',
  pattern: /wpt[_-]?db[_-]?user(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'wpt_prepare_dir',
  pattern: /wpt[_-]?prepare[_-]?dir(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'wpt_report_api_key',
  pattern: /wpt[_-]?report[_-]?api[_-]?key(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'wpt_ssh_connect',
  pattern: /wpt[_-]?ssh[_-]?connect(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'wpt_ssh_private_key_base64',
  pattern: /wpt[_-]?ssh[_-]?private[_-]?key[_-]?base64(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'www_googleapis_com',
  pattern: /www[_-]?googleapis[_-]?com(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'yangshun_gh_password',
  pattern: /yangshun[_-]?gh[_-]?password(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'yangshun_gh_token',
  pattern: /yangshun[_-]?gh[_-]?token(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'yt_account_client_secret',
  pattern: /yt[_-]?account[_-]?client[_-]?secret(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'yt_account_refresh_token',
  pattern: /yt[_-]?account[_-]?refresh[_-]?token(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'yt_api_key',
  pattern: /yt[_-]?api[_-]?key(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'yt_client_secret',
  pattern: /yt[_-]?client[_-]?secret(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'yt_partner_client_secret',
  pattern: /yt[_-]?partner[_-]?client[_-]?secret(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'yt_partner_refresh_token',
  pattern: /yt[_-]?partner[_-]?refresh[_-]?token(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'yt_server_api_key',
  pattern: /yt[_-]?server[_-]?api[_-]?key(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'zendesk_travis_github',
  pattern: /zendesk[_-]?travis[_-]?github(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'zensonatypepassword',
  pattern: /zensonatypepassword(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'zhuliang_gh_token',
  pattern: /zhuliang[_-]?gh[_-]?token(=| =|:| :)/,
  confidence: 'low',
},
{
  name: 'zopim_account_key',
  pattern: /zopim[_-]?account[_-]?key(=| =|:| :)/,
  confidence: 'low',
}];

patterns.forEach((pattern) => {
  pattern.id = pattern.name?.replace(' ', '_').toLowerCase() + '_spd';
  pattern.group = group;
  pattern.ref = ref;
});

export default patterns;