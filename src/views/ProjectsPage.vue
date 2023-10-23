<script setup lang="ts">
import type { Project } from "@/types/Project";
import { useFetch } from "@vueuse/core";
import { computed } from "vue";

const uri = `${import.meta.env.VITE_PYTHON_API_URL}/project`;
const { isFetching, error, data, execute: refresh } = useFetch<string>(uri);

const projects = computed(() => {
  if (data.value) {
    return JSON.parse(data.value) as Project[];
  }
  return [];
});
</script>

<template>
  <div class="text-h2 d-flex" style="margin-top: 50px; margin-bottom: 25px">
    Personal Projects
    <v-spacer />
    <v-btn variant="text" icon="mdi-refresh" @click="refresh" />
  </div>
  <v-alert v-if="error" type="error" :icon="false">
    <div class="d-flex align-center">
      <v-icon icon="mdi-close-circle" class="mr-4" />
      {{ error }}
      <v-spacer />
      <v-btn variant="text" @click="refresh">Retry</v-btn>
    </div>
  </v-alert>
  <div v-if="isFetching">Loading...</div>
  <div v-if="projects && projects.length > 0" class="d-flex flex-gap-10">
    <v-card v-for="project in projects" :key="project.projectId" class="d-flex flex-column" style="flex-basis: 24%">
      <v-card-title>{{ project.title }}</v-card-title>
      <v-card-text>{{ project.description }}</v-card-text>
      <v-spacer />
      <v-card-actions>
        <v-spacer />
        <v-btn variant="text" :to="`/project/${project.projectKey}`">
          Learn More <v-icon end icon="mdi-open-in-new" />
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>
