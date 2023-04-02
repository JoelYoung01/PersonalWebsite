<script setup lang="ts">
import { useTitle } from "@vueuse/core";
import { useDisplay } from "vuetify";
import WebsiteNavBar from "./components/layout/WebsiteNavBar.vue";

useTitle("Joel's Website");
const { mobile } = useDisplay();
</script>

<template>
  <v-app>
    <WebsiteNavBar />
    <v-container :class="mobile ? 'w-100' : 'w-75'" :style="{ marginTop: '5rem' }">
      <RouterView />
    </v-container>
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
