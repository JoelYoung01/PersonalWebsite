<script setup lang="ts">
import RandomMeme from "@/components/RandomMeme.vue";
</script>

<template>
  <v-card class="mx-auto text-center" width="400">
    <v-card-title>
      <v-icon icon="mdi-progress-wrench" class="mr-1" /> This page is not quite done yet!
    </v-card-title>
    <v-card-subtitle class="mb-5">
      Coming soon to a website near you...<br>
      Here's a random meme from reddit instead!
    </v-card-subtitle>
    <RandomMeme class="mx-auto mb-5" />
  </v-card>
</template>
