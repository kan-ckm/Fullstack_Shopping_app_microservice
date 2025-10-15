import path from "path";
import { nextJsConfig } from "@repo/eslint-config/next-js";

/** @type {import("eslint").Linter.Config[]} */
export default [
  ...nextJsConfig,
  {
    languageOptions: {
      parserOptions: {
        tsconfigRootDir: path.resolve(__dirname),
        project: ["./tsconfig.json"],
      },
    },
  },
];
