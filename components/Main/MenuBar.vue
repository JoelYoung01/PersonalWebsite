<template>
  <v-card color="grey lighten-4" flat tile>
    <v-app-bar dense clipped-left>
      <v-app-bar-nav-icon
        @click.stop="$emit('toggleNavBar')"
      ></v-app-bar-nav-icon>

      <v-toolbar-title>Joel is neat</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";

@Component({
  name: "MenuBar",
})
export default class MenuBar extends Vue {}
</script>