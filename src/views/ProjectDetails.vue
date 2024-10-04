<script setup lang="ts">
import { useDisplay } from "vuetify";
import { useRoute } from "vue-router";

// Mobile flag (true if viewer is mobile user)
const { mobile } = useDisplay();
const route = useRoute();
</script>

<template>
  <v-container :class="[mobile ? 'w-100' : 'w-75 mt-5r']">
    <h1 class="text-md-h2 text-h4 mt-10 mb-3">{{ route.name }}</h1>
    <router-view />
  </v-container>
</template>

<style scoped>
.mt-5r {
  margin-top: 5rem;
}
</style>
