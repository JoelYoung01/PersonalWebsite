<script setup lang="ts">
import projectImage from "@/assets/images/portfolioImage.png";

const technologies = [
  {
    title: "Vue.js",
    subtitle: "Vue.js is a progressive framework for building user interfaces.",
    icon: "mdi-vuejs",
  },
  {
    title: "Vuetify",
    subtitle: "Vuetify is a Material Design component framework for Vue.js.",
    icon: "mdi-vuetify",
  },
  {
    title: "AWS S3",
    subtitle:
      "Amazon Simple Storage Service (Amazon S3) is an object storage service that offers industry-leading scalability, data availability, security, and performance.",
    icon: "mdi-aws",
  },
  {
    title: "Vue Router",
    subtitle:
      "Vue Router is the official router for Vue.js. It deeply integrates with Vue.js core to make building Single Page Applications with Vue.js a breeze.",
    icon: "mdi-router",
  },
];
</script>

<template>
  <v-row>
    <v-col md="6" cols="12">
      <v-card class="w-100">
        <v-img :src="projectImage" />
        <v-card-title>Project Description</v-card-title>
        <v-card-text>
          This website was created to showcase my projects and provide a platform for me to share my
          thoughts and experiences. The website is built using Vue.js and Vuetify, and is hosted on
          AWS S3. The website is a single-page application that uses Vue Router to navigate between
          pages.
        </v-card-text>
      </v-card>
    </v-col>
    <v-col md="6" cols="12">
      <v-card class="w-100 mb-6">
        <v-card-title>Technologies Used</v-card-title>
        <v-card-text>
          <v-list>
            <v-list-item
              v-for="tech in technologies"
              :key="tech.title"
              :prepend-icon="tech.icon"
              :title="tech.title"
            >
              <div class="text-subtitle-2 text-dimmed">
                {{ tech.subtitle }}
              </div>
            </v-list-item>
          </v-list>
        </v-card-text>
      </v-card>
      <v-card class="w-100">
        <v-card-title>Project Links</v-card-title>
        <v-card-text>
          <v-list>
            <v-list-item
              title="Website Repository"
              prepend-icon="mdi-github"
              href="https://github.com/JoelYoung01/PersonalWebsite"
              target="_blank"
            />
            <v-list-item
              title="Live Site"
              prepend-icon="mdi-home"
              href="https://www.joelyoung.dev"
              target="_blank"
            />
          </v-list>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>
