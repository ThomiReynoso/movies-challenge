module.exports = {
    testEnvironment: 'jsdom',
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', "json", "node"],
    transform: {
      '^.+\\.(js|jsx|ts|tsx)$': 'ts-jest',
    },
    moduleNameMapper: {
      '\\.(css|less)$': 'identity-obj-proxy',
    },
    testMatch: [
      '<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}',
      '<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}',
    ],
    setupFilesAfterEnv: ['./src/setupTests.ts'],
    moduleDirectories: [
        "node_modules",
        "src"
      ],
    transformIgnorePatterns: [
        "node_modules/(?!(jest-)?react-native|@react-navigation)"
    ],
  };
  