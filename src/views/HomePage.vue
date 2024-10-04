<script setup lang="ts">
import { useClipboard } from "@vueuse/core";
import { ref, computed, watch } from "vue";
import { useDisplay } from "vuetify";
import type { Project } from "@/types";
import portfolioImageUrl from "@/assets/images/portfolioImage.png";
import timeTrackingSiteUrl from "@/assets/images/timeTrackingSite.png";
import costEstimateSiteUrl from "@/assets/images/costEstimateDemo.png";
import greensightImageUrl from "@/assets/images/greensight.png";
import ProjectCard from "@/components/ProjectCard.vue";

interface listItem {
  title: string;
  icon: string;
  uri?: string;
}

const projects: Project[] = [
  {
    projectId: 0,
    projectKey: "this-website",
    title: "This Website",
    imageSrc: portfolioImageUrl,
    sourceUri: "https://github.com/JoelYoung01/PersonalWebsite",
    description:
      "This website is a node-based Vue.js Single-Page application, built with Vite and styled with Vuetify. I deploy it to AWS using CloudFront and S3.",
  },
  {
    projectId: 1,
    projectKey: "cost-estimate-tool",
    title: "Cost Estimate Tool",
    imageSrc: costEstimateSiteUrl,
    sourceUri: "",
    description:
      "This is a tool to estimate the cost of a sod installation project based on the square footage of the area to be sodded. It is build with Vue.js and Vuetify, and is served via CDN on AWS.",
  },
  {
    projectId: 2,
    projectKey: "greensight",
    title: "GreenSight",
    imageSrc: greensightImageUrl,
    sourceUri: "https://github.com/JoelYoung01/GreenSight",
    description:
      "this is an app that can take data about your garden and generate interesting reports about it.",
  },
  {
    projectId: 3,
    projectKey: "time-tracker",
    title: "Time Tracker",
    imageSrc: timeTrackingSiteUrl,
    sourceUri: "",
    description:
      "This is a time tracking application that allows users to track their time spent on various projects. It supports adding customers to projects, and can generate invoices based on time spent.",
  },
];

const contactList: listItem[] = [
  {
    title: "joel.young@joelyoung.dev",
    icon: "mdi-gmail",
  },
  {
    title: "(612) 438-9418",
    icon: "mdi-phone",
  },
  {
    title: "Joel Young",
    icon: "mdi-linkedin",
    uri: "https://www.linkedin.com/in/joel-young-049627196/",
  },
];

const { copy, copied, isSupported } = useClipboard();
const { mobile } = useDisplay();

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
    <section :class="{ mobile }" class="align-start">
      <h1 class="text-md-h1 text-h3">My Name is Joel Young</h1>
      <h2 class="text-md-h3 text-h5">
        I enjoy building things and solving problems.
      </h2>
      <v-btn to="/about" color="primary" class="mt-5">More About Me</v-btn>
    </section>

    <section :class="{ mobile }">
      <h2 class="text-md-h2 text-h4 text-center">Featured Projects</h2>
      <v-row justify="space-around" class="flex-grow-0">
        <v-col
          v-for="project in projects"
          :key="project.projectId"
          cols="12"
          md="4"
        >
          <ProjectCard :project="project" class="h-100" />
        </v-col>
      </v-row>
    </section>

    <section :class="{ mobile }">
      <h2 class="text-md-h2 text-h4 text-center">Get In Touch</h2>
      <v-row class="flex-grow-0" justify="space-around">
        <v-col
          v-for="contact in contactList"
          :key="contact.title"
          md="4"
          cols="12"
          class="text-center"
          @click.stop="contactAction(contact)"
        >
          <v-btn
            stacked
            size="x-large"
            :prepend-icon="contact.icon"
            variant="text"
            >{{ contact.title }}</v-btn
          >
        </v-col>
      </v-row>
    </section>

    <v-snackbar v-model="showSnackbar" class="text-center">
      <div v-if="isSupported" class="text-center">
        Copied!
        <v-icon icon="mdi-check" color="success" />
      </div>
      <div v-else class="text-center">
        Copying to clipboard is not supported!
      </div>
    </v-snackbar>
  </v-container>
</template>

<style scoped>
section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 0;
  margin-bottom: 0;
}

section.mobile {
  min-height: 75vh;
}

section:not(.mobile) {
  min-height: 100vh;
}

section:not(.mobile) h2.text-center {
  margin-bottom: 5rem;
}
section.mobile h2.text-center {
  margin-bottom: 2rem;
}
</style>
