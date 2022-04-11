<template>
  <v-app dark>
    <NavBar v-if="showNavbar" />
    <v-main>
      <MenuBar @toggleNavBar="showNavbar = !showNavbar" />
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import MenuBar from "../components/Main/MenuBar.vue";
import NavBar from "../components/Main/NavBar.vue";

export default {
  name: "DefaultLayout",
  components: {
    MenuBar,
    NavBar,
  },
  data() {
    return {
      showNavbar: false,
    };
  },
  head() {
    return {
      title: "Joel's Node Server",
    };
  },
};
</script>
