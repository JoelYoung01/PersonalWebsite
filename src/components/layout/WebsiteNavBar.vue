<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import sharpGoatLogo from "@/assets/images/SharpGoatTransparent_secondary.png";

const route = useRoute();

const elevation = computed(() => {
  return route.path === "/" ? 0 : 1;
});
</script>

<template>
  <v-app-bar class="pa-3" :elevation="elevation">
    <v-col cols="auto">
      <RouterLink to="/">
        <v-img :src="sharpGoatLogo" width="50" />
      </RouterLink>
    </v-col>
    <v-col cols="3" md="auto">
      <RouterLink to="/">
        <div
          class="text-h5 text-lg-h2"
          style="color: rgb(var(--v-theme-secondary))"
        >
          Joel's Website
        </div>
      </RouterLink>
    </v-col>

    <v-spacer />

    <v-btn icon class="nav-button" to="/">
      <v-tooltip location="bottom" activator="parent">Home</v-tooltip>
      <v-icon color="secondary" size="x-large" icon="mdi-home" />
    </v-btn>

    <v-btn icon class="nav-button" to="/about">
      <v-tooltip location="bottom" activator="parent">About Me</v-tooltip>
      <v-icon color="secondary" size="x-large" icon="mdi-account" />
    </v-btn>

    <v-btn href="https://wedding.joelyoung.dev" target="_blank" icon>
      <v-tooltip location="bottom" activator="parent"
        >Wedding Website</v-tooltip
      >
      <v-icon color="secondary" size="x-large" icon="mdi-heart" />
    </v-btn>
  </v-app-bar>
</template>

<style scoped>
.text-h4 {
  font-weight: 400;
}
</style>
