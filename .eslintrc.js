module.exports = {
    env: {
        es2020: true,
        node: true,
        jest: true
    },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "@aminnairi/eslint-config"
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: 12
    },
    overrides: [{
        files: "*.ts",
        extends: "@aminnairi/eslint-config-typescript",
        parserOptions: {
            sourceType: "module",
            project: "./test.tsconfig.json"
        },
        parser: "@typescript-eslint/parser",
        env: {
            node: false
        }
    }],
    plugins: [
        "@typescript-eslint"
    ],
    rules: {
        "indent": [
            "error",
            4
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
