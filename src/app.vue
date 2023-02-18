<script setup lang="ts">
import { useTitle } from "@vueuse/core";

useTitle("Joel's Website");

</script>

<template>
  <v-app>
    <v-app-bar
      color="secondary"
      class="app-bar-styles"
      :elevation="0"
    >
      <template #prepend>
        <v-img
          src="/img/SharpGoatTransparent_primary.png"
          width="50"
        />
      </template>
      <v-app-bar-title>
        <RouterLink to="/">
          <h1 style="color: #C6AC8F">
            Joel's Website
          </h1>
        </RouterLink>
      </v-app-bar-title>

      <v-spacer />

      <v-btn
        icon
        to="/projects"
      >
        <v-icon
          color="primary"
          size="x-large"
          icon="mdi-tools"
        />
      </v-btn>

      <v-btn
        icon
        class="nav-button"
        to="/about"
      >
        <v-icon
          color="primary"
          size="x-large"
          icon="mdi-account"
        />
      </v-btn>
    </v-app-bar>
    <v-container class="main-container">
      <RouterView />
    </v-container>
  </v-app>
</template>

<style scoped>
.main-container {
  margin-top: 5rem;
  width: 70%;
}

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
