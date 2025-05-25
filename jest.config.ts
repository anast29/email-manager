/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  moduleNameMapper: {
    "^constants/(.*)$": "<rootDir>/src/constants/$1",
    "^interfaces/(.*)$": "<rootDir>/src/interfaces/$1",
    "^helpers/(.*)$": "<rootDir>/src/helpers/$1",
  },
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
};

export default config;
