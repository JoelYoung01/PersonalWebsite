<script setup lang="ts">
/// <reference types="google.maps" />
import { ref } from "vue";
import { GoogleMap } from "vue3-google-map";

const sodSmith: google.maps.LatLngLiteral = { lat: 44.886297901877114, lng: -93.30808521796632 };

const zoom = ref(5);

const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;
</script>

<template>
  <GoogleMap
    :background-color="$vuetify.theme.current.colors.background"
    :api-key="apiKey"
    :center="sodSmith"
    :zoom="zoom"
    :max-zoom="15"
    :min-zoom="1"
    map-type-id="satellite"
    disable-default-ui
    zoom-control
  >
  </GoogleMap>
</template>
