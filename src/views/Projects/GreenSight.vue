<script setup lang="ts">
import projectImage from "@/assets/images/greensight.png";

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
          The GreenSight project was created in order to build some interesting
          and hopefully useful reports based on data from a user's garden. I
          built it primarily for use by some family members, but made it public
          so anyone else who is interested might have access.
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
              title="GreenSight GitHub Repository"
              prepend-icon="mdi-github"
              href="https://github.com/JoelYoung01/GreenSight"
              target="_blank"
            />
            <v-list-item
              title="GreenSight Site"
              prepend-icon="mdi-leaf"
              href="https://greensight.joelyoung.dev"
              target="_blank"
            />
            <v-list-item
              title="GreenSight Site (STAGE)"
              prepend-icon="mdi-leaf-circle"
              href="https://greensight-stage.joelyoung.dev"
              target="_blank"
            />
          </v-list>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>
