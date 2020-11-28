module.exports = {
  env: {
    es2020: true,
    jest: true,
    node: true
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "@aminnairi/eslint-config"
  ],
  overrides: [{
    env: {
      node: false
    },
    extends: "@aminnairi/eslint-config-typescript",
    files: "*.ts",
    parser: "@typescript-eslint/parser",
    parserOptions: {
      project: "./test.tsconfig.json",
      sourceType: "module"
    }
  }],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 12
  },
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
