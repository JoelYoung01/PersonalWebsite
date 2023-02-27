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
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-recommended",
    "@vue/eslint-config-typescript"
  ],
  overrides: [
    {
      files: [
        "cypress/e2e/**/*.{cy,spec}.{js,ts,jsx,tsx}"
      ],
      "extends": [
        "plugin:cypress/recommended"
      ]
    }
  ],
  rules: {
    quotes: ["warn", "double"],
    semi: ["warn", "always"],
    "comma-dangle": ["warn"],
    "@typescript-eslint/no-unused-vars": "warn",
    "vue/max-attributes-per-line": ["warn", {
      "singleline": {
        "max": 3
      },      
      "multiline": {
        "max": 1
      }
    }],
    "vue/no-unused-vars": "warn"
  }
};
