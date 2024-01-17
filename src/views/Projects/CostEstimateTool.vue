<script setup lang="ts">
import { ref } from "vue";

const technologies = [
  {
    title: "Vue.js",
    subtitle: "Vue.js is a progressive framework for building user interfaces.",
    icon: "mdi-vuejs"
  },
  {
    title: "Vuetify",
    subtitle: "Vuetify is a Material Design component framework for Vue.js.",
    icon: "mdi-vuetify"
  },
  {
    title: "Typescript",
    subtitle: "TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.",
    icon: "mdi-language-typescript"
  },
  {
    title: "Vite",
    subtitle: "Vite is a fast build tool that provides a faster dev experience and faster builds.",
    icon: "mdi-language-typescript"
  },
  {
    title: "Node.js",
    subtitle: "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.",
    icon: "mdi-nodejs"
  },
  {
    title: "Express.js",
    subtitle: "Express.js is a fast, unopinionated, minimalist web framework for Node.js.",
    icon: "mdi-nodejs"
  },
  {
    title: "PostgreSQL",
    subtitle: "PostgreSQL is a powerful, open source object-relational database system.",
    icon: "mdi-database"
  },
  {
    title: "Swagger",
    subtitle:
      "Swagger is a set of open-source tools built around the OpenAPI Specification that can help you design, build, document and consume REST APIs.",
    icon: "mdi-language-typescript"
  },
  {
    title: "Git",
    subtitle:
      "Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.",
    icon: "mdi-git"
  },
  {
    title: "GitHub",
    subtitle:
      "GitHub is a code hosting platform for version control and collaboration. It lets you and others work together on projects from anywhere.",
    icon: "mdi-github"
  },
  {
    title: "Ubuntu Server",
    subtitle:
      "Ubuntu Server is a powerful, reliable, and flexible platform for workloads with mission-critical security in physical, virtual, and cloud environments.",
    icon: "mdi-ubuntu"
  },
  {
    title: "Docker",
    subtitle:
      "Docker is a set of platform as a service products that use OS-level virtualization to deliver software in packages called containers.",
    icon: "mdi-docker"
  },
  {
    title: "AWS S3",
    subtitle:
      "Amazon Simple Storage Service is a service offered by Amazon Web Services that provides object storage through a web service interface.",
    icon: "mdi-aws"
  }
];

const demoActivated = ref(false);

function demo() {
  var script = document.createElement("script");
  script.src = "https://d3o7bndcxbs47b.cloudfront.net/cost-estimate-tool/index.js";
  const scriptMount = document.getElementById("cost-estimate-script-mount-point");
  if (!scriptMount) {
    console.error("Could not find script mount point");
    return;
  }
  demoActivated.value = true;
  scriptMount.appendChild(script);
}

function reset() {
  const scriptMount = document.getElementById("cost-estimate-script-mount-point");
  if (!scriptMount) {
    console.error("Could not find script mount point");
    return;
  }
  demoActivated.value = false;
  // Reload the page
  location.reload();
}
</script>

<template>
  <div class="d-flex flex-gap-4">
    <div class="d-flex flex-column flex-gap-4" style="flex-basis: 50%; flex-grow: 0">
      <h1 class="text-h4 mt-10">About the project</h1>
      <v-card>
        <v-card-text>
          This project was created to provide high-level cost estimates for sod work. It is a widget that can be
          dynamically injected into a page using a script tag. The widget is hosted on a CDN, and the Vue.js application
          is hosted on AWS S3.
        </v-card-text>
      </v-card>
      <v-expansion-panels>
        <v-expansion-panel>
          <v-expansion-panel-title class="text-h6"> Technologies Used </v-expansion-panel-title>
          <v-expansion-panel-text>
            <v-list>
              <v-list-item v-for="tech in technologies" :key="tech.title" :prepend-icon="tech.icon" :title="tech.title">
                <div class="text-subtitle-2 text-dimmed">
                  {{ tech.subtitle }}
                </div>
              </v-list-item>
            </v-list>
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
    <div class="d-flex flex-column flex-gap-4">
      <h1 class="text-h4 mt-10">Demo</h1>
      <v-theme-provider>
        <div id="cost-estimate-script-mount-point">
          <div id="cost-estimation-tool-mount-point">
            <v-chip>Mount Point Here</v-chip>
          </div>
        </div>
      </v-theme-provider>
      <v-btn :disabled="demoActivated" @click="demo">Activate Demo</v-btn>
      <v-btn :disabled="!demoActivated" @click="reset">Reset</v-btn>
    </div>
  </div>
</template>

<style scoped>
.text-dimmed {
  color: rgba(var(--v-theme-on-surface), var(--v-medium-emphasis-opacity));
}
</style>
