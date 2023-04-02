<script setup lang="ts">
import RandomMeme from "@/components/misc/RandomMeme.vue";
import { useDisplay } from "vuetify/lib/framework.mjs";

const { mobile } = useDisplay();
</script>

<template>
  <v-card class="mx-auto text-center" :width="mobile ? 325 : 375" prepend-icon="mdi-progress-wrench">
    <template #title> This page is not done yet! </template>
    <v-card-subtitle class="mb-5">
      Coming soon to a website near you...<br >
      Here's a random meme from reddit instead!
    </v-card-subtitle>
    <RandomMeme class="mb-5" />
  </v-card>
</template>
