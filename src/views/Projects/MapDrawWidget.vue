<script setup lang="ts">
import DrawMap from "@/components/projects/mapDrawingWidget/DrawMap.vue";

import { Loader } from "@googlemaps/js-api-loader";
import { ref } from "vue";

const loadingApi = ref(false);

const initGoogleApi = async () => {
  loadingApi.value = true;
  try {
    const loader = new Loader({
      apiKey: import.meta.env.VITE_GOOGLE_API_KEY,
      version: "weekly"
    });
    loader.importLibrary("drawing");
    loader.importLibrary("places");
  } catch (er) {
    console.error(er);
  }
  loadingApi.value = false;
};

initGoogleApi();
</script>

<template>
  <div>
    Google Maps Widget Demo {{ loadingApi ? " - Loading..." : "" }}

    <DrawMap style="height: 500px; width: 700px" />
  </div>
</template>
