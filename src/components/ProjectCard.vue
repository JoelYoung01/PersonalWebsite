<script setup lang="ts">
import type { Project } from "@/types";
import { useRouter } from "vue-router";

interface Props {
  project: Project;
  selectedTags?: string[];
}

const props = withDefaults(defineProps<Props>(), {
  selectedTags: () => [],
});

const emit = defineEmits<{
  tagClicked: [tag: string];
}>();

const router = useRouter();

function tagClicked(tag: string) {
  emit("tagClicked", tag);
}

function handleClick() {
  router.push(`/project/${props.project.projectKey}`);
}

function tagVariant(tag: string) {
  return props.selectedTags.includes(tag) ? "elevated" : undefined;
}
</script>

<template>
  <v-card rounded="xl" @click="handleClick">
    <div class="d-flex flex-column h-100">
      <v-img
        :src="project.imageSrc"
        position="top"
        cover
        class="w-100"
        max-height="300"
        aspect-ratio="16/9"
      >
        <template #placeholder>
          <v-row align="center" class="fill-height ma-0" justify="center">
            <v-progress-circular color="grey-lighten-5" indeterminate />
          </v-row>
        </template>
      </v-img>
      <v-card-title>{{ project.title }}</v-card-title>
      <v-card-text @click.stop>
        <div class="d-flex flex-wrap ga-1 align-start" @click.stop>
          <v-chip
            v-for="tag in project.tags"
            :key="tag"
            :variant="tagVariant(tag)"
            @click.stop="tagClicked(tag)"
            >{{ tag }}</v-chip
          >
        </div>
      </v-card-text>
      <v-card-text>{{ project.description }}</v-card-text>
      <v-card-actions v-if="project.sourceUri">
        <v-btn :href="project.sourceUri" target="_blank" @click.stop
          >View Code</v-btn
        >
      </v-card-actions>
    </div>
  </v-card>
</template>
