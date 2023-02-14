<script setup lang="ts">
const appConfig = useAppConfig();
useHead({ title: appConfig.title + " | Home" });
</script>

<template>
  <v-card height="5000">
    <v-card-title><h2>Home</h2></v-card-title>
    <v-card-item>
      <v-img src="https://media.tenor.com/-kZOB16tELEAAAAC/this-is-fine-fire.gif" width="80%" />
    </v-card-item>
  </v-card>
</template>
