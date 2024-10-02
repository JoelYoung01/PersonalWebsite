<script setup lang="ts">
import { useDisplay } from "vuetify";

// Mobile flag (true if viewer is mobile user)
const { mobile } = useDisplay();
</script>

<template>
  <v-container
    :class="mobile ? 'w-100' : 'w-75'"
    :style="{ marginTop: '5rem' }"
  >
    <h1 class="text-h2 mt-10 mb-3">{{ $route.name }}</h1>
    <router-view />
  </v-container>
</template>
