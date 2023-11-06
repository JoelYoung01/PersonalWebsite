<script setup lang="ts">
/// <reference types="google.maps" />
import { ref } from "vue";
import { GoogleMap } from "vue3-google-map";
import DrawingManager from "./DrawingManager.vue";

const sodSmith: google.maps.LatLngLiteral = { lat: 44.886297901877114, lng: -93.30808521796632 };

const zoom = ref(17);
const mapRef = ref<InstanceType<typeof GoogleMap>>();
const drawManagerRef = ref<InstanceType<typeof DrawingManager>>();

const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;

const centerOnPlace = (place_id: string) => {
  drawManagerRef.value?.centerOnPlace(place_id);
};

defineExpose({
  centerOnPlace
});
</script>

<template>
  <GoogleMap
    ref="mapRef"
    :background-color="$vuetify.theme.current.colors.background"
    :api-key="apiKey"
    :center="sodSmith"
    :zoom="zoom"
    :max-zoom="20"
    :min-zoom="16"
    :tilt="0"
    :libraries="[]"
    disable-double-click-zoom
    map-type-id="satellite"
    disable-default-ui
    zoom-control
    fullscreen-control
  >
    <DrawingManager ref="drawManagerRef" :map-ref="mapRef" />
  </GoogleMap>
</template>
