<script setup lang="ts">
defineProps<{
  profileUri: string;
  profileImageUri: string;
  mdiIcon: string;
  handle: string;
  size?: number;
}>();

const defaultSize = 250;
</script>

<template>
  <v-card
    :href="profileUri"
    target="_blank"
    class="pa-6 j-rounder"
    color="secondary"
  >
    <v-img
      :src="profileImageUri"
      cover
      aspect-ratio="1"
      :width="size || defaultSize"
      style="border-radius: 100%"
      class="mx-auto"
    />
    <div class="text-center mt-3">
      <v-icon
        :icon="mdiIcon"
        size="75"
        color="primary-lighten-1"
        class="shift-icon-up"
      />
      <span class="font-weight-bold text-h5">{{ handle }}</span>
    </div>
  </v-card>
</template>

<style scoped>
.shift-icon-up {
  position: absolute;
  bottom: 62px;
  left: 10px;
}
</style>
