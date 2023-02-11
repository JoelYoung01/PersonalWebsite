<script setup lang="ts">
const appConfig = useAppConfig();
useHead({ title: appConfig.title })
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>

</style>