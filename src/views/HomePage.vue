<script setup lang="ts">
import { computed } from "vue";
import { useWindowSize } from "@vueuse/core";
import AboutMeCard from "@/components/home/AboutMeCard.vue";
const windowSize = useWindowSize();

const topBackgroundStyle = computed(() => {
  return { height: windowSize.width.value / 4 + 200 + "px" };
});

</script>

<template>
  <div>
    <div class="top-background" :style="topBackgroundStyle" />
    <v-img src="/img/joel-banner.png" cover />
    <AboutMeCard />
  </div>
</template>

<style scoped>
.top-background {
  background-image: linear-gradient(to bottom, #EAE0D5 100%, #22333b 100%);
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
}
</style>
