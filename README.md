# detect-regex

Detect regex patterns in strings

## Install

```
npm i detect-regex
```

## Demo

```
npm run demo
```

## Usage

```javascript
import Detector from 'detect-regex';

const detector = new Detector();
const detections = detector.detect(detector.patterns, 'AKIAIOSFODNN7EXAMPLE');

console.log(detections.matches[0]);
/*  id: 'aws_api_key_spd',
    match: 'AKIAIOSFODNN7EXAMPLE',
    line: 0,
    column: 0,
    replaced: false                 */
console.log(detector.getPatternById('aws_api_key_spd'));
/*  id: 'aws_api_key_spd',
    name: 'AWS API Key',
    pattern: /AKIA[0-9A-Z]{16}/,
    confidence: 'high',
    tags: [ 'cloud', 'aws' ],
    group: {
      id: 'spd',
      name: 'mazen160/secrets-patterns-db',
      ref: 'https://github.com/mazen160/secrets-patterns-db/blob/master/db/rules-stable.yml'
    }                              */
console.log(detector.genDetectionStats(detections));
/*
    patternTags: { cloud: 6, aws: 6 },
    patternExampleIds: [],
    patternGroups: { spd: 4, srl: 2, warp: 1, yelp: 1, gl: 1 },
    numPatterns: 9,
    patternIds: [
      'aws-access-token_gl',
      'aws_-_1_spd',
      'aws_access_id_warp',
      'aws_access_key_id_srl',
      'aws_access_key_id_value_spd',
      'aws_access_key_id_yelp',
      'aws_api_key_spd',
      'aws_api_key_srl',
      'aws_client_id_spd'
    ]                              */
```
