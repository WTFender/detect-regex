// credits
// https://github.com/Yelp/detect-secrets/tree/master/detect_secrets/plugins
// https://github.com/h33tlit/secret-regex-list
// https://github.com/gitleaks/gitleaks/blob/1b3f10cb79e2d87bb5098f9b6a10b3c36eb48f6e/config/gitleaks.toml
// https://github.com/mazen160/secrets-patterns-db/blob/master/db/rules-stable.yml

export const modifiers = 'g';

export const patterns = {
    TEST_PATTERN_1: /TEST_PATTERN_1/,
    TEST_PATTERN_2: /TEST_PATTERN_2/,
    TEST_PATTERN_3: /970290971583479384990205235889491696359494/,
    TEST_PATTERN_4: /97029097\d+696359494/,
    AWS: /AKIA[0-9A-Z]{16}/,
}

export const limit = 2097152;