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
}
const { data: meme, isFetching } = await useFetch<memeResponse>("https://meme-api.com/gimme");
</script>

<template>
  <v-progress-circular
    v-if="isFetching"
    indeterminate
  />
  <template v-else>
    <h3>{{ meme?.title }}</h3>
    <v-img
      :src="meme?.url"
      width="500"
    />
  </template>
</template>
