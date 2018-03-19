module.exports = {
  clearMocks: true,
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: ['<rootDir>/test'],
  coverageReporters: ['html', 'json', 'lcov', 'text'],
  preset: 'react-native',
  setupTestFrameworkScriptFile: '<rootDir>/testSetup.js',
};
