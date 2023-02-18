<script setup lang="ts">
import { useTitle } from "@vueuse/core";

useTitle("Joel's Website");

</script>

<template>
  <v-app>
    <RouterView />
  </v-app>
</template>
