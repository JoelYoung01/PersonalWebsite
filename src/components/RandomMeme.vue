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

const { data: meme, isFetching, execute } = useFetch<memeResponse>("https://meme-api.com/gimme").json();

</script>

<template>
  <v-card
    width="500"
    color="white"
  >
    <v-card-title>
      <v-row class="mx-0">
        <v-col cols="10">
          {{ meme?.title }}
        </v-col>

        <v-spacer />

        <v-col
          cols="auto"
        >
          <v-btn
            color="secondary"
            variant="text"
            icon
            :loading="isFetching"
            size="small"
            @click="execute()"
          >
            <v-icon
              icon="mdi-refresh"
              size="large"
            />
          </v-btn>
        </v-col>
      </v-row>
    </v-card-title>
    <v-card-item>
      <v-img
        :src="meme?.url"
      />
    </v-card-item>
  </v-card>
</template>
