<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const elevation = computed(() => {
  return route.path === "/" ? 0 : 1;
});
</script>

<template>
  <v-app-bar class="py-3 px-5" :elevation="elevation">
    <RouterLink to="/">
      <div class="text-h5 text-lg-h2" style="color: rgb(var(--v-theme-secondary))">
        Joel's Website
      </div>
    </RouterLink>

    <v-spacer />

    <v-btn icon class="nav-button" to="/">
      <v-tooltip location="bottom" activator="parent">Home</v-tooltip>
      <v-icon color="secondary" size="x-large" icon="mdi-home" />
    </v-btn>

    <v-btn icon class="nav-button" to="/about">
      <v-tooltip location="bottom" activator="parent">About Me</v-tooltip>
      <v-icon color="secondary" size="x-large" icon="mdi-account" />
    </v-btn>

    <v-btn icon class="nav-button" to="/projects">
      <v-tooltip location="bottom" activator="parent">Projects</v-tooltip>
      <v-icon color="secondary" size="x-large" icon="mdi-folder" />
    </v-btn>
  </v-app-bar>
</template>

<style scoped>
.text-h4 {
  font-weight: 400;
}

:deep(.v-toolbar__content) {
  gap: 0.5rem;
}
</style>
