import { ThemeDefinition } from "vuetify/lib/framework.mjs";

const appConfig = {
  title: "Joel's Website",
  theme: {
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
  } as ThemeDefinition
};

export { appConfig }; // Made available for vuetify plugin
export default defineAppConfig(appConfig);
