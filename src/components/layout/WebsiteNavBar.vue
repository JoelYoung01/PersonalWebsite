<template>
  <v-app-bar color="surface" class="app-bar-styles" :elevation="10">
    <v-col cols="auto">
      <v-img src="/img/SharpGoatTransparent_secondary.png" width="50" />
    </v-col>
    <v-col cols="3" sm="auto">
      <RouterLink to="/">
        <div class="text-h4 text-md-h3 text-lg-h2" style="color: rgb(var(--v-theme-secondary))">Joel's Website</div>
      </RouterLink>
    </v-col>

    <v-spacer />

    <v-btn icon class="nav-button" to="/">
      <v-tooltip location="bottom" activator="parent">Home</v-tooltip>
      <v-icon color="secondary" size="x-large" icon="mdi-home" />
    </v-btn>

    <v-btn icon class="nav-button" to="/about">
      <v-tooltip location="bottom" activator="parent">About Me</v-tooltip>
      <v-icon color="secondary" size="x-large" icon="mdi-account" />
    </v-btn>

    <v-btn href="https://wedding.joelyoung.dev" target="_blank" icon>
      <v-tooltip location="bottom" activator="parent">Wedding Website</v-tooltip>
      <v-icon color="secondary" size="x-large" icon="mdi-heart" />
    </v-btn>
  </v-app-bar>
</template>
