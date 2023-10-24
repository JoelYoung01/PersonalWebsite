import { createApp } from "vue";
import App from "./app.vue";

import "./assets/main.css";

import vuetify from "@/plugins/vuetify";
import router from "./router";
import VueGoogleMaps from "vue-google-maps-community-fork";

const app = createApp(App);

app.use(router);
app.use(vuetify);

app.use(VueGoogleMaps, {
  load: {
    key: import.meta.env.VITE_GOOGLE_API_KEY
  }
});

app.mount("#app");
