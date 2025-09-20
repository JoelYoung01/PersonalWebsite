<script setup lang="ts">
import projectImage from "@/assets/images/timeTrackingSite.png";

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
  {
    title: "Supabase",
    subtitle:
      "Supabase is an open-source Firebase alternative. It provides a set of tools and services that help developers build web and mobile applications.",
    icon: "mdi-database",
  },
  {
    title: "Linux",
    subtitle:
      "Linux is a family of open-source Unix-like operating systems based on the Linux kernel, an operating system kernel first released on September 17, 1991, by Linus Torvalds.",
    icon: "mdi-ubuntu",
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
          Time Tracking was a project I built to help me track the time I spent on various projects;
          for myself or otherwise. The main goal was to have a tool to make it easier to generate
          invoices and track hours on those invoices. It was a classic example of spreadsheet to web
          app evolution.
        </v-card-text>
        <v-card-text>
          I chose to use Supabase as it allowed me to build on my own silicone and not pay for a
          server or any hosting alternatives. I host it on my own dedicated server.
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
            <div>
              <v-list-item
                title="TimeTracking GitHub Repository"
                prepend-icon="mdi-github"
                disabled
              />
              <v-tooltip activator="parent" location="top" offset="-5">
                Private Repository
              </v-tooltip>
            </div>
            <v-list-item
              title="TimeTracking Site"
              prepend-icon="mdi-clock-time-four-outline"
              href="https://time-tracking.joelyoung.dev"
              target="_blank"
            />
          </v-list>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>
