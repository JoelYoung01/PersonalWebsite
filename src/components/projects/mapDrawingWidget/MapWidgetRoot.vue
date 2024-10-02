<script setup lang="ts">
import DrawMap from "@/components/projects/mapDrawingWidget/DrawMap.vue";

import { Loader } from "@googlemaps/js-api-loader";
import { ref } from "vue";
import PlaceSelector from "./PlaceSelector.vue";

const loadingApi = ref(false);
const mapDrawer = ref<InstanceType<typeof DrawMap>>();

const onPlaceSelect = (placeId: string) => {
  if (!placeId) return;
  mapDrawer.value?.centerOnPlace(placeId);
};

const initGoogleApi = async () => {
  loadingApi.value = true;
  try {
    const loader = new Loader({
      apiKey: import.meta.env.VITE_GOOGLE_API_KEY,
      version: "weekly",
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
    {{ loadingApi ? " - Loading..." : "" }}
    <PlaceSelector style="width: 700px" @place-selected="onPlaceSelect" />
    <DrawMap ref="mapDrawer" style="height: 500px; width: 700px" />
  </div>
</template>
