import typescript from "@rollup/plugin-typescript";
import {terser} from "rollup-plugin-terser";

export default {
    input: "src/main.ts",
    plugins: [
        typescript()
    ],
    output: [
        {
            format: "esm",
            file: "lib/index.esm.js"
        },
        {
            format: "cjs",
            file: "lib/index.js"
        },
        {
            format: "iife",
            name: "Faykah",
            file: "lib/index.browser.js"
        },
        {
            format: "iife",
            name: "Faykah",
            file: "lib/index.browser.min.js",
            plugins: [
                terser()
            ]
        }
    ]
};
