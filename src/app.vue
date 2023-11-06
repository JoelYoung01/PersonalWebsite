<script setup lang="ts">
import { useTitle } from "@vueuse/core";
import { useDisplay } from "vuetify";
import WebsiteNavBar from "./components/layout/WebsiteNavBar.vue";
import { ref } from "vue";

useTitle("Joel's Website");
const { mobile } = useDisplay();

const neatDetails = ref(import.meta.env.VITE_PYTHON_API_URL);
</script>

<template>
  <v-app>
    <WebsiteNavBar />
    <v-container :class="mobile ? 'w-100' : 'w-75'" :style="{ marginTop: '5rem' }">
      <RouterView />
    </v-container>
    <span style="display: none">{{ neatDetails }}</span>
  </v-app>
</template>

<style scoped>
.app-bar-styles {
  padding: 1rem;
  width: 100%;
}

a {
  color: inherit;
}

.nav-button {
  margin-left: 1rem;
}
</style>
