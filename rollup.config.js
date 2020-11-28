import {terser} from "rollup-plugin-terser";
import typescript from "@rollup/plugin-typescript";

export default {
  input: "src/index.ts",
  output: [
    {
      file: "lib/index.esm.js",
      format: "esm"
    },
    {
      file: "lib/index.esm.min.js",
      format: "esm",
      plugins: [
        terser()
      ]
    },
    {
      file: "lib/index.common.js",
      format: "cjs"
    },
    {
      file: "lib/index.common.min.js",
      format: "cjs",
      plugins: [
        terser()
      ]
    },
    {
      file: "lib/index.browser.js",
      format: "iife",
      name: "Faykah"
    },
    {
      file: "lib/index.browser.min.js",
      format: "iife",
      name: "Faykah",
      plugins: [
        terser()
      ]
    }
  ],
  plugins: [
    typescript()
  ]
};
