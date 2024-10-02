<script setup lang="ts">
import { useDisplay } from "vuetify/lib/framework.mjs";
import { useClipboard } from "@vueuse/core";
import { ref, computed, watch } from "vue";
import SodSmithImage from "@/assets/images/sod-smith.png";

interface projectItem {
  title: string;
  key: string;
  imageSrc: string;
  projectUri?: string;
  gitUri: string;
  description: string;
}

interface listItem {
  title: string;
  icon: string;
  uri?: string;
}

const projects: projectItem[] = [
  {
    title: "This Website",
    key: "this-website",
    imageSrc: "/img/websiteImage.png",
    gitUri: "https://github.com/JoelYoung01/PersonalWebsite",
    description:
      "This website is a node-based Vue.js Single-Page application, built with Vite and styled with Vuetify. I deploy it to AWS using CloudFront and S3."
  },
  {
    title: "Cost Estimate Tool",
    key: "cost-estimate-tool",
    imageSrc: SodSmithImage,
    // projectUri: "https://sodsmith.com",
    gitUri: "https://github.com/JoelYoung01/CostEstimateTool",
    description:
      "This project is a cdn-delivered widget for a site that serves a vue app designed to streamline customer interaction and increase engagement."
  },
  {
    title: "UW-Stout Capstone Project",
    key: "scheduler-assistant",
    imageSrc: "/img/scheduler-image.png",
    projectUri: "https://schedulerapp.vercel.app",
    gitUri: "https://github.com/Stout-2022-Capstone-Scheduler-Team/SchedulerApp",
    description:
      "This website is a node-based React.js Single-page scheduling application hosted through Vercel. I built this application during my senior year at UW-Stout, and acted as the Product Owner for the project, along with providing technical guidance to my teammates."
  }
];

const contactList: listItem[] = [
  {
    title: "joeleyoung01@gmail.com",
    icon: "mdi-gmail"
  },
  {
    title: "(612) 438-9418",
    icon: "mdi-phone"
  },
  {
    title: "JoelYoung01",
    icon: "mdi-github",
    uri: "https://github.com/JoelYoung01"
  },
  {
    title: "Joel Young",
    icon: "mdi-linkedin",
    uri: "https://www.linkedin.com/in/joel-young-049627196/"
  }
];

// Mobile flag (true if viewer is mobile user)
const { mobile } = useDisplay();
const { copy, copied, isSupported } = useClipboard();

const supportError = ref(false);

const showSnackbar = computed(() => {
  return copied.value || supportError.value;
});

watch(supportError, () => {
  if (supportError.value) {
    setTimeout(() => {
      supportError.value = false;
    }, 2000);
  }
});

/**
 * Either navigate to a social (or copy it if no navigation applicable)
 */
function contactAction(contact: listItem) {
  // If the uri doesn't exist, do nothing
  if (contact.uri) {
    window.open(contact.uri);
  } else if (isSupported.value) {
    copy(contact.title);
  } else {
    supportError.value = true;
  }
}
</script>

<template>
  <v-container>
    <section class="intro-section align-start">
      <h1 class="text-h1 mb-2">My Name is Joel Young</h1>
      <h2 class="text-h3">I enjoy building things and solving problems.</h2>
      <v-btn to="/about" color="primary" class="mt-5">More About Me</v-btn>
    </section>

    <section>
      <h2 class="text-h2 text-center">Featured Projects</h2>
      <v-row class="flex-grow-0">
        <v-col v-for="project in projects" :key="project.key" cols="4">
          <v-card color="primary-lighten-1" class="d-flex j-hover j-rounder pa-3 ma-3" :to="`/project/${project.key}`">
            <v-row>
              <v-col v-if="!mobile" cols="auto">
                <v-img :src="project.imageSrc" cover class="j-round" width="100" aspect-ratio="1" />
              </v-col>
              <v-col>
                <div class="text-h5">
                  {{ project.title }}
                  <v-tooltip v-if="project.projectUri" text="Open project in a new page" location="top">
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
      </v-row>
    </section>

    <section>
      <h2 class="text-h2 text-center mb-10">Get In Touch</h2>
      <v-row class="flex-grow-0" justify="space-around">
        <v-col v-for="contact in contactList" :key="contact.title" cols="auto" @click.stop="contactAction(contact)">
          <v-btn stacked size="x-large" :prepend-icon="contact.icon" variant="text">{{ contact.title }}</v-btn>
        </v-col>
      </v-row>
    </section>

    <v-snackbar v-model="showSnackbar" class="text-center">
      <div v-if="isSupported" class="text-center">
        Copied!
        <v-icon icon="mdi-check" color="success" />
      </div>
      <div v-else class="text-center">Copying to clipboard is not supported!</div>
    </v-snackbar>
  </v-container>
</template>

<style scoped>
section {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 0;
  margin-bottom: 0;
}
</style>
