// Vuetify Plugin
import { createVuetify, type ThemeDefinition } from "vuetify";
import "@mdi/font/css/materialdesignicons.css"; // Ensure we are using css-loader
import "@/assets/main.scss";

const primary = "#D7CDCC";
const secondary = "#22333b";

/**
 * Main site theme and colors
 */
const theme = {
  dark: false,
  colors: {
    /**
     * https://coolors.co/palette/0a0908-22333b-eae0d5-9AA0A8-5e503f
     * https://coolors.co/palette/b00020-FB8C00-2196F3-4CAF50
     * https://coolors.co/344e5b-79a49e
     */

    // Layout colors
    background: secondary,
    surface: primary,

    // Main Colors
    primary,
    secondary,

    // Status colors
    error: "#b00020",
    warning: "#FB8C00",
    info: "#2196F3",
    success: "#4CAF50",
  },
} as ThemeDefinition;

/**
 * Main Export, to be referenced in main.ts
 */
const vuetify = createVuetify({
  theme: {
    defaultTheme: "theme",
    themes: {
      theme,
    },
  },
});

export default vuetify;
