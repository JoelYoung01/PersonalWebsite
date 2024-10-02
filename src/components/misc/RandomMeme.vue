<script setup lang="ts">
import { useFetch } from "@vueuse/core";

type memeResponse = {
  postLink: string;
  subreddit: string;
  title: string;
  url: string;
  nsfw: boolean;
  spoiler: boolean;
  author: string;
  ups: number;
  preview: string[];
};

const {
  data: meme,
  isFetching,
  execute,
} = useFetch<memeResponse>("https://meme-api.com/gimme").json();
</script>

<template>
  <v-card class="mx-auto pb-2" color="white" width="300">
    <v-card-title>
      <v-row align="center">
        <v-col cols="11" class="text-left d-inline-block text-truncate pa-0">
          {{ meme?.title }}
        </v-col>

        <v-spacer />

        <v-col cols="auto" class="pa-0">
          <v-btn
            class="my-2"
            color="secondary"
            variant="text"
            density="compact"
            icon
            :loading="isFetching"
            size="small"
            @click="execute()"
          >
            <v-icon icon="mdi-refresh" size="large" />
          </v-btn>
        </v-col>
      </v-row>
    </v-card-title>
    <v-img :src="meme?.url" width="300" aspect-ratio="1" class="mx-auto" />
  </v-card>
</template>
