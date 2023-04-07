// Vuetify Plugin
import "vuetify/styles";
import "@mdi/font/css/materialdesignicons.css"; // Ensure you are using css-loader
import { createVuetify, type ThemeDefinition } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

/**
 * Main site theme and colors
 */
const theme = {
  dark: false,
  colors: {
    /**
     * https://coolors.co/palette/0a0908-22333b-eae0d5-c6ac8f-5e503f
     * https://coolors.co/palette/b00020-FB8C00-2196F3-4CAF50
     */

    // Layout colors
    background: "#22333b",
    "on-background": "#C6AC8F",

    surface: "#C6AC8F",
    "on-surface": "#22333b",

    // Main Colors
    primary: "#C6AC8F",
    "on-primary": "#22333b",

    "primary-darken-1": "#5e503f",
    "on-primary-darken-1": "#EAE0D5",

    "primary-lighten-1": "#EAE0D5",
    "on-primary-lighten-1": "#22333b",

    secondary: "#22333b",
    "on-secondary": "#C6AC8F",

    "secondary-darken-1": "#0a0908",
    "on-secondary-darken-1": "#EAE0D5",

    // Status colors
    error: "#b00020",
    warning: "#FB8C00",
    info: "#2196F3",
    success: "#4CAF50"
  }
} as ThemeDefinition;

/**
 * Main Export, to be referenced in main.ts
 */
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
