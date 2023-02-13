<script setup lang="ts">
const appConfig = useAppConfig();
useHead({ title: appConfig.title + " | Home" });
</script>

<template>
  <div>
    <h1>Home</h1>
    <img src="https://media.tenor.com/-kZOB16tELEAAAAC/this-is-fine-fire.gif" />
  </div>
</template>
