<script setup lang="ts">
import { useTitle } from "@vueuse/core";
import WebsiteNavBar from "./components/layout/WebsiteNavBar.vue";

useTitle("Joel's Website");
</script>

<template>
  <v-app>
    <WebsiteNavBar />
    <v-main>
      <RouterView />
    </v-main>
  </v-app>
</template>
