// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
})
