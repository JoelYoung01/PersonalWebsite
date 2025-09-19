<script setup lang="ts">
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard.vue";
</script>

<template>
  <div class="container">
    <h3 class="text-md-h3 text-h5 mb-4">My Projects</h3>

    <v-row justify="center">
      <v-col
        v-for="project in projects"
        :key="project.projectKey"
        cols="12"
        sm="6"
        md="3"
      >
        <ProjectCard :project="project" class="h-100" />
      </v-col>
    </v-row>
  </div>
</template>

<style scoped>
.container {
  margin: 3rem 3rem;
}
</style>
