const jsconfig = require('./jsconfig.json')

module.exports = {
  rootDir: __dirname,
  testEnvironment: 'jsdom',
  testMatch: [
    '**/__tests__/**/*.spec.js?(x)',
  ],
  moduleDirectories: ['node_modules', jsconfig.compilerOptions.baseUrl],
  moduleFileExtensions: ['js', 'jsx', 'json'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/src/__tests__/__mocks__/fileMock.js',
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
  },
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
    '^.+\\.css$': '<rootDir>/config/jest/cssTransform.js',
  },
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  setupFilesAfterEnv: ['<rootDir>/config/jest/test-framework-setup.js'],
}
