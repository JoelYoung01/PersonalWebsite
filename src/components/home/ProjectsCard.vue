<script setup lang="ts">
import { useDisplay } from "vuetify/lib/framework.mjs";


const { mobile } = useDisplay();

interface projectItem {
  title: string;
  key: string;
  imageSrc: string;
  projectUri?: string;
  gitUri: string;
  description: string;
}

const projects: projectItem[] = [
  {
    title: "This Website",
    key: "this-website",
    imageSrc: "/img/websiteImage.png",
    gitUri: "https://github.com/JoelYoung01/PersonalWebsite",
    description: "This website is a node-based Vue.js Single-Page application, built with Vite and styled with Vuetify. I host it myself, using Ubuntu Server 20.04 and Docker containers."
  },
  {
    title: "UW-Stout Capstone Project",
    key: "scheduler-assistant",
    imageSrc: "/img/scheduler-image.png",
    projectUri:"https://schedulerapp.vercel.app",
    gitUri: "https://github.com/Stout-2022-Capstone-Scheduler-Team/SchedulerApp",
    description: "This website is a node-based React.js Single-page scheduling application hosted through Vercel. I built this application during my senior year at UW-Stout, and acted as the Product Owner for the project, along with providing technical guidance to my teammates."
  }
];
</script>

<template>
  <v-card class="j-roundest pa-2">
    <v-row align="center" :class="mobile ? 'flex-column' : null">
      <v-col class="pa-5 my-auto d-flex flex-column">
        <v-card
          v-for="project in projects"
          :key="project.key"
          color="primary-lighten-1"
          class="d-flex j-hover j-rounder pa-3 ma-3"
          :to="`/projects/${project.key}`"
        >
          <v-row>
            <v-col v-if="!mobile" cols="auto">
              <v-img
                :src="project.imageSrc"
                cover
                class="j-round"
                width="100"
                aspect-ratio="1"
              />
            </v-col>
            <v-col>
              <div class="text-h5">
                {{ project.title }}
                <v-tooltip 
                  v-if="project.projectUri"
                  text="Open project in a new page"
                  location="top"
                >
                  <template #activator="{ props }">
                    <v-btn
                      v-bind="props"
                      size="small"
                      density="comfortable"
                      variant="text"
                      color="primary"
                      icon
                      :href="project.projectUri"
                      target="_blank"
                      @click.stop
                    >
                      <v-icon icon="mdi-open-in-new" />
                    </v-btn>
                  </template>
                </v-tooltip>
              </div>
              <div class="text-body-1">
                {{ project.description }}
              </div>
            </v-col>
          </v-row>
        </v-card>
      </v-col> 
      <v-col :cols="mobile ? 12 : 4" :order="mobile ? 'first' : undefined">
        <div class="text-h3 text-center">
          Projects
        </div>
      </v-col>
    </v-row>
  </v-card>
</template>