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
  vite: {
    define: {
      "process.env.DEBUG": false
    }
  },
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
