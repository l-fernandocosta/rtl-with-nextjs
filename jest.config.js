/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  covarageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  setupFilesAfterEnv: ["./src/jest.setup.ts"],

  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.jest.json",
    },
  },
};
