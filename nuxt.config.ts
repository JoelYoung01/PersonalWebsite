// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      meta: [{ name: "description", content: "My personal site" }]
    }
  },
  css: ["vuetify/lib/styles/main.sass", "@mdi/font/css/materialdesignicons.min.css"],
  build: {
    transpile: ["vuetify"]
  },
  modules: [
    "@vueuse/nuxt"
  ],
  runtimeConfig: {
    googleAnalyticsId: "",
    pythonApiUrl: "",
    public: {
      name: ""
    }
  },
  typescript: {
    strict: true,
    typeCheck: true
  }
});
