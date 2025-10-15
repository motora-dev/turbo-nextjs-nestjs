/** @type {import('jest').Config} */
module.exports = {
  roots: ['<rootDir>/src/'],
  rootDir: '.',
  collectCoverage: process.env.COLLECT_COVERAGE === 'true',
  collectCoverageFrom: ['src/**/*.ts', '!src/**/*.spec.ts', '!src/main.ts'],
  coverageProvider: 'babel',
  coverageDirectory: './coverage',
  coverageReporters: ['text', 'json', 'lcov'],
  moduleFileExtensions: ['js', 'json', 'ts'],
  testRegex: '.*\\.spec.ts$',
  transform: {
    '^.+\\.(t|j)s$': [
      'ts-jest',
      {
        tsconfig: 'tsconfig.spec.json',
      },
    ],
  },
  testEnvironment: 'node',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@adapters$': '<rootDir>/src/shared/adapters/index.ts',
    '^@decorators': '<rootDir>/src/shared/decorators/index.ts',
    '^@guards': '<rootDir>/src/shared/guards/index.ts',
    '^@interceptors': '<rootDir>/src/shared/interceptors/index.ts',
    '^@modules/(.*)$': '<rootDir>/src/modules/$1',
    '^@shared/(.*)$': '<rootDir>/src/shared/$1',
  },
};
