<script setup lang="ts">
import { useClipboard } from "@vueuse/core";
import { ref, computed } from "vue";
import { useDisplay } from "vuetify";
import { projects as allProjects } from "@/data/projects";

import ProjectCard from "@/components/ProjectCard.vue";

const projects = allProjects.filter((project) => project.featured);

const contactList = [
  {
    title: "joel.young@joelyoung.dev",
    icon: "mdi-gmail",
    uri: null,
  },
  {
    title: "(612) 438-9418",
    icon: "mdi-phone",
    uri: null,
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

function showSupportError() {
  supportError.value = true;

  setTimeout(() => {
    supportError.value = false;
  }, 2000);
}

/**
 * Either navigate to a social (or copy it if no navigation applicable)
 */
function contactAction(contact: (typeof contactList)[number]) {
  // If the uri doesn't exist, do nothing
  if (contact.uri) {
    window.open(contact.uri);
  } else if (isSupported.value) {
    copy(contact.title);
  } else {
    showSupportError();
  }
}
</script>

<template>
  <v-container>
    <section :class="{ mobile }" class="align-start">
      <h1 class="text-md-h1 text-h3">My Name is Joel Young</h1>
      <h2 class="text-md-h3 text-h5">I enjoy building things and solving problems.</h2>
      <div class="d-flex flex-wrap ga-4 mt-5">
        <v-btn to="/about" color="primary">More About Me</v-btn>
        <v-btn to="/projects" color="primary"> Browse my Projects </v-btn>
        <v-btn to="/resume" color="primary"> View My Resume </v-btn>
      </div>
    </section>

    <section :class="{ mobile }">
      <h2 class="text-md-h2 text-h4 text-center">Featured Projects</h2>
      <v-row justify="space-around" class="flex-grow-0 mb-6">
        <v-col v-for="project in projects" :key="project.projectKey" cols="12" md="4">
          <ProjectCard :project="project" class="h-100" />
        </v-col>
      </v-row>

      <div class="d-flex justify-center">
        <v-btn to="/projects" size="x-large" variant="tonal">View All Projects</v-btn>
      </div>
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
          <v-btn stacked size="x-large" :prepend-icon="contact.icon" variant="text">{{
            contact.title
          }}</v-btn>
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
