module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  plugins: ["vue", "@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:vue/vue3-recommended",
    "@nuxtjs/eslint-config-typescript"
  ],
  rules: {
    quotes: ["warn", "double"],
    semi: ["warn", "always"],
    "comma-dangle": ["warn"],
    "@typescript-eslint/no-unused-vars": "warn"
  }
};
