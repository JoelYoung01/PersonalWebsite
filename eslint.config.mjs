// @ts-check

import eslint from "@eslint/js";

import {
  configureVueProject,
  defineConfigWithVueTs,
  vueTsConfigs,
} from "@vue/eslint-config-typescript";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import eslintPluginVue from "eslint-plugin-vue";
import globals from "globals";

configureVueProject({ scriptLangs: ["ts"] });

export default defineConfigWithVueTs(
  { files: ["**/*.{ts,vue,js,mjs,cjs}"] },
  { ignores: ["**/node_modules", "**/dist", "**/api", "*.d.ts", "*.md"] },
  eslint.configs.recommended,
  vueTsConfigs.recommendedTypeChecked,
  ...eslintPluginVue.configs["flat/recommended"],
  eslintPluginPrettierRecommended,
  {
    languageOptions: {
      ecmaVersion: "latest",
      parserOptions: {},
      globals: {
        ...globals.browser,
      },
    },
    rules: {
      "prettier/prettier": "warn",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/restrict-template-expressions": "off",
      "@typescript-eslint/no-floating-promises": "off",
      "@typescript-eslint/no-misused-promises": "off",
    },
  }
);
