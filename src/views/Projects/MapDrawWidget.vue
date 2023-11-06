<script setup lang="ts">
import MapWidgetRoot from "@/components/projects/mapDrawingWidget/MapWidgetRoot.vue";
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
    <p class="mb-5">
      This is an instance of the Google Maps drawing widget I wrote. This is designed to allow the user to select an
      area on the map, and then report the area of the drawn polygons in square footage.
    </p>
    <MapWidgetRoot />
  </div>
</template>
