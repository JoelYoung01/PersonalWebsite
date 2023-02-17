<script setup lang="ts">
const appConfig = useAppConfig();
useHead({ title: appConfig.title });
</script>

<template>
  <v-app>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </v-app>
</template>
