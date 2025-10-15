/** @type {import('jest').Config} */
module.exports = {
  roots: ['<rootDir>/src/'],
  rootDir: '.',
  testEnvironment: 'jsdom',
  collectCoverage: process.env.COLLECT_COVERAGE === 'true',
  collectCoverageFrom: ['src/**/*.ts', '!src/**/*.d.ts', '!src/**/*.spec.ts', '!index.ts'],
  coverageDirectory: './coverage/jest',
  coverageReporters: ['text', 'json', 'lcov'],
  moduleFileExtensions: ['ts', 'js'],
  testMatch: ['**/?(*.)+(spec).(ts)'],
  transform: {
    '^.+\\.ts$': [
      'ts-jest',
      {
        tsconfig: 'tsconfig.spec.json',
        useESM: true,
      },
    ],
  },
  extensionsToTreatAsEsm: ['.ts'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@shared/(.*)$': '<rootDir>/src/shared/$1',
    '^@entities/(.*)$': '<rootDir>/src/entities/$1',
    '^@features/(.*)$': '<rootDir>/src/features/$1',
    '^@widgets/(.*)$': '<rootDir>/src/widgets/$1',
    '^@pages/(.*)$': '<rootDir>/src/pages/$1',
    '^@app/(.*)$': '<rootDir>/src/app/$1',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};
