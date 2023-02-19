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
    "plugin:vue/vue3-recommended",
    "eslint:recommended",
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
    "vue/max-attributes-per-line": ["error", {
      "singleline": {
        "max": 3
      },      
      "multiline": {
        "max": 1
      }
    }]
  }
};
