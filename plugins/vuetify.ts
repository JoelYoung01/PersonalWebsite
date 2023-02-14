import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

import { appConfig } from "../app.config";

const { theme } = appConfig;

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    ssr: true,
    components,
    directives,
    theme: {
      defaultTheme: "theme",
      themes: {
        theme
      }
    }
  });

  nuxtApp.vueApp.use(vuetify);
});
