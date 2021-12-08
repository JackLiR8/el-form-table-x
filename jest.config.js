module.exports = {
  preset: '@vue/cli-plugin-unit-jest',

  moduleNameMapper: {
    "^packages/(.*)$": "<rootDir>/packages/$1",
  },

  testMatch: [
    "**/tests/unit/**/*.spec.(js|jsx|ts|tsx)",
    "**/__tests__/*.spec.(js|jsx|ts|tsx)",
  ],
}
