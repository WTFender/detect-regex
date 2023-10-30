export default {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/*.test.ts'],
  testPathIgnorePatterns: ['/node_modules/'],
  coverageDirectory: './coverage',
  coveragePathIgnorePatterns: ['node_modules'],
  moduleNameMapper: {
    "^(\\.\\/.+)\\.js$": "$1"
  },
  transform: {
    '^.+\\.ts?$': ['ts-jest', { diagnostics: false }],
    
  },
};