<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useDisplay } from "vuetify";

const route = useRoute();
const { mobile } = useDisplay();

const btnSize = computed(() => (mobile.value ? "small" : undefined));
const elevation = computed(() => {
  return route.path === "/" ? 0 : 1;
});
</script>

<template>
  <v-app-bar class="hide-on-print py-1 py-md-3 px-5" :elevation="elevation">
    <RouterLink to="/">
      <div class="text-h5 text-lg-h2" style="color: rgb(var(--v-theme-secondary))">
        Joel's Website
      </div>
    </RouterLink>

    <v-spacer />

    <template v-if="!mobile">
      <v-btn icon class="nav-button" to="/" :size="btnSize">
        <v-tooltip location="bottom" activator="parent">Home</v-tooltip>
        <v-icon color="secondary" size="x-large" icon="mdi-home" />
      </v-btn>

      <v-btn icon class="nav-button" to="/about" :size="btnSize">
        <v-tooltip location="bottom" activator="parent">About Me</v-tooltip>
        <v-icon color="secondary" size="x-large" icon="mdi-account" />
      </v-btn>

      <v-btn icon class="nav-button" to="/projects" :size="btnSize">
        <v-tooltip location="bottom" activator="parent">Projects</v-tooltip>
        <v-icon color="secondary" size="x-large" icon="mdi-folder" />
      </v-btn>

      <v-btn icon class="nav-button" to="/resume" :size="btnSize">
        <v-tooltip location="bottom" activator="parent">Resume</v-tooltip>
        <v-icon color="secondary" size="x-large" icon="mdi-file-document" />
      </v-btn>
    </template>
    <template v-else>
      <v-menu>
        <template #activator="{ props }">
          <v-btn icon class="nav-button" :size="btnSize" v-bind="props">
            <v-tooltip location="bottom" activator="parent">Menu</v-tooltip>
            <v-icon color="secondary" size="x-large" icon="mdi-menu" />
          </v-btn>
        </template>
        <v-list>
          <v-list-item to="/" :size="btnSize">
            <template #prepend>
              <v-icon color="secondary" size="x-large" icon="mdi-home" />
            </template>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>
          <v-list-item to="/about" :size="btnSize">
            <template #prepend>
              <v-icon color="secondary" size="x-large" icon="mdi-account" />
            </template>
            <v-list-item-title>About Me</v-list-item-title>
          </v-list-item>
          <v-list-item to="/projects" :size="btnSize">
            <template #prepend>
              <v-icon color="secondary" size="x-large" icon="mdi-folder" />
            </template>
            <v-list-item-title>Projects</v-list-item-title>
          </v-list-item>
          <v-list-item to="/resume" :size="btnSize">
            <template #prepend>
              <v-icon color="secondary" size="x-large" icon="mdi-file-document" />
            </template>
            <v-list-item-title>Resume</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </template>
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
