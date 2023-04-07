/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    ecmaVersion: "latest"
  },
  plugins: ["@typescript-eslint", "prettier"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "plugin:vue/vue3-recommended",
    "@vue/eslint-config-typescript"
  ],
  overrides: [
    {
      files: ["cypress/e2e/**/*.{cy,spec}.{js,ts,jsx,tsx}"],
      extends: ["plugin:cypress/recommended"]
    }
  ],
  rules: {
    quotes: ["warn", "double"],
    semi: ["warn", "always"],
    "prettier/prettier": [
      "warn",
      {
        semi: true,
        trailingComma: "none",
        singleQuote: false,
        printWidth: 120
      }
    ],
    "comma-dangle": "warn",
    "@typescript-eslint/no-unused-vars": "warn",
    "vue/multiline-html-element-content-newline": "off",
    "vue/singleline-html-element-content-newline": "off",
    "vue/max-attributes-per-line": "off",
    "vue/no-unused-vars": "warn",
    "vue/html-self-closing": "off"
  }
};
