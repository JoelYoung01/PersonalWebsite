<script setup lang="ts">
import type { Project } from "@/types";

interface Props {
  project: Project;
}

defineProps<Props>();
</script>

<template>
  <v-card class="d-flex flex-column" :to="`/project/${project.projectKey}`">
    <v-img :src="project.imageSrc" position="top" cover max-height="300" aspect-ratio="16/9">
      <template #placeholder>
        <v-row align="center" class="fill-height ma-0" justify="center">
          <v-progress-circular color="grey-lighten-5" indeterminate />
        </v-row>
      </template>
    </v-img>
    <v-card-title>{{ project.title }}</v-card-title>
    <v-card-text>{{ project.description }}</v-card-text>
    <v-card-actions v-if="project.sourceUri">
      <v-btn :href="project.sourceUri" target="_blank" @click.stop>View Code</v-btn>
    </v-card-actions>
  </v-card>
</template>
