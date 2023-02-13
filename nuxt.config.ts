// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      meta: [{ name: "description", content: "My personal site" }],
    },
  },
  runtimeConfig: {
    googleAnalyticsId: "",
    pythonApiUrl: "",
    public: {
      name: "",
    },
  },
  typescript: {
    strict: true,
    typeCheck: true,
  },
});
