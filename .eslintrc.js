"use strict";

module.exports = {
  env: {
    commonjs: true,
    node: true
  },
  extends: [
    "@aminnairi/eslint-config"
  ],
  overrides: [
    {
      env: {
        commonjs: false,
        es2021: true
      },
      extends: ["@aminnairi/eslint-config-typescript"],
      files: "*.ts",
      parser: "@typescript-eslint/parser",
      parserOptions: {
        project: "./test.tsconfig.json",
        sourceType: "module"
      },
      rules: {
        "@typescript-eslint/no-type-alias": "off"
      }
    },
    {
      extends: ["plugin:json/recommended"],
      files: "*.json"
    },
    {
      env: {
        commonjs: false,
        es2021: true
      },
      files: "rollup.config.js",
      parserOptions: {
        ecmaVersion: 12,
        sourceType: "module"
      }
    },
    {
      env: {
        commonjs: false,
        es2021: true,
        jest: true
      },
      extends: ["@aminnairi/eslint-config-typescript", "plugin:jest/all"],
      files: "*.spec.ts",
      parser: "@typescript-eslint/parser",
      parserOptions: {
        project: "./test.tsconfig.json",
        sourceType: "module"
      },
      rules: {
        "@typescript-eslint/no-magic-numbers": "off"
      }
    }
  ],
  plugins: [
    "@typescript-eslint"
  ],
  rules: {
    "@typescript-eslint/indent": ["error", 2],
    "indent": [
      "error",
      2
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [
      "error",
      "double"
    ],
    "semi": [
      "error",
      "always"
    ]
  }
};
