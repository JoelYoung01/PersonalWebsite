<script setup lang="ts">
import { useScroll } from "@vueuse/core";

const el = ref<Window | null>(process.client ? window : null);

// https://vueuse.org/core/useScroll/
const { y } = useScroll(el, { behavior: "smooth" });

const appBarElevation = computed(() => {
  return Math.min(15, y.value / 2);
});
</script>

<template>
  <v-container class="main-container">
    <v-app-bar color="secondary" class="app-bar-styles" :elevation="appBarElevation">
      <template #prepend>
        <v-img src="/img/SharpGoatTransparent_light.png" width="50" />
      </template>
      <v-app-bar-title><h1>Joel's Website</h1></v-app-bar-title>
    </v-app-bar>
    <slot />
  </v-container>
</template>

<style scoped>
.main-container {
  margin-top: 5rem;
  background-color: "";
}

.app-bar-styles {
  padding: 1rem;
  border-radius: 1rem;
  width: 100%;
}
</style>
