<script setup lang="ts">
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard.vue";
import { TAGS } from "@/types";

const items = Object.values(TAGS);

const selectedTags = ref<string[]>([]);

const filteredProjects = computed(() => {
  if (selectedTags.value.length === 0) {
    return projects;
  }

  return projects.filter((project) => {
    return selectedTags.value.every((tag) => project.tags.includes(tag));
  });
});

function tagClicked(tag: string) {
  selectedTags.value = selectedTags.value.includes(tag)
    ? selectedTags.value.filter((t) => t !== tag)
    : [...selectedTags.value, tag];
}
</script>

<template>
  <div class="my-4 mx-2 ma-sm-10">
    <h3 class="text-md-h3 text-h5 mb-4">My Projects</h3>

    <v-combobox
      v-model="selectedTags"
      :items="items"
      prepend-inner-icon="mdi-filter-variant"
      label="Filter by tag"
      variant="solo"
      class="mb-2"
      chips
      clearable
      closable-chips
      multiple
    >
      <template #chip="{ props, item }">
        <v-chip v-bind="props">
          <strong>{{ item.raw }}</strong>
        </v-chip>
      </template>
    </v-combobox>

    <v-row justify="center">
      <v-col v-for="project in filteredProjects" :key="project.projectKey" cols="12" sm="6" md="3">
        <ProjectCard
          class="h-100"
          :project="project"
          :selected-tags="selectedTags"
          @tag-clicked="tagClicked"
        />
      </v-col>
      <v-col v-if="filteredProjects.length === 0">
        <v-card>
          <v-card-title>No projects found</v-card-title>
          <v-card-text> No projects found with the selected tags. </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
