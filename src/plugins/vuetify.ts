// Vuetify Plugin
import "vuetify/styles";
import "@mdi/font/css/materialdesignicons.css"; // Ensure you are using css-loader
import { createVuetify, type ThemeDefinition } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const theme = {
  dark: false,
  colors: {
    // https://coolors.co/palette/0a0908-22333b-eae0d5-c6ac8f-5e503f
    // https://coolors.co/palette/b00020-FB8C00-2196F3-4CAF50
    background: "#22333b",
    surface: "#F8EDEB",
    primary: "#C6AC8F",
    "primary-darken-1": "#5e503f",
    secondary: "#22333b",
    "secondary-darken-1": "#0a0908",
    error: "#b00020",
    warning: "#FB8C00",
    info: "#2196F3",
    success: "#4CAF50"
  }
} as ThemeDefinition;

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: "theme",
    themes: {
      theme
    }
  }
});

export default vuetify;