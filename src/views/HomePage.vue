<script setup lang="ts">
import { computed } from "vue";
import { useWindowSize } from "@vueuse/core";
import AboutMeCard from "@/components/home/AboutMeCard.vue";
import ProjectsCard from "@/components/home/ProjectsCard.vue";
import ContactsCard from "@/components/home/ContactsCard.vue";
const windowSize = useWindowSize();

const topBackgroundStyle = computed(() => {
  return { height: windowSize.width.value / 4 + 200 + "px" };
});
</script>

<template>
  <div>
    <div class="top-background" :style="topBackgroundStyle" />
    <v-img src="/img/joel-banner.png" cover />
    <AboutMeCard class="mb-14" />
    <ProjectsCard class="mb-14" />
    <ContactsCard />
  </div>
</template>

<style scoped>
.top-background {
  background-color: rgb(var(--v-theme-secondary));
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
}
</style>
