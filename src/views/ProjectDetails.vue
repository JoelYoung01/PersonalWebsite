<script setup lang="ts">
import { useRoute } from "vue-router";

const { params: { projectKey } } = useRoute();
</script>

<template>
  Project: {{ projectKey }}
</template>