module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,tsx}',
    //'!<rootDir>/src/main/**/*',
    //'!<rootDir>/src/**/index.ts',
    //'!**/*.d.ts'
  ],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  transform: {
    '.+\\.(ts|tsx)$': 'ts-jest'
  },
  /*setupFilesAfterEnv: ['<rootDir>/src/main/config/jest-setup.ts'],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/tests/e2e/cypress'
  ],*/
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1',
    /*'@/(.*)': '<rootDir>/src/$1',
    '\\.scss$': 'identity-obj-proxy'*/
  }
}