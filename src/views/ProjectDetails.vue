<script setup lang="ts">
import NotReadyYet from "@/components/misc/NotReadyYet.vue";
import { useRoute } from "vue-router";
const { params: { projectKey } } = useRoute();
</script>

<template>
  <div class="text-h2">
    {{ projectKey }}
  </div>
  <NotReadyYet />
</template>
