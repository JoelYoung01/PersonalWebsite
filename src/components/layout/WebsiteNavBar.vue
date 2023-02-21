<template>
  <v-app-bar
    color="secondary"
    class="app-bar-styles"
    :elevation="0"
  >
    <v-col cols="auto">
      <v-img
        src="/img/SharpGoatTransparent_primary.png"
        width="50"
      />
    </v-col>
    <v-col cols="3" md="auto">
      <RouterLink to="/">
        <div class="text-h4 text-md-h2" style="color: #C6AC8F">
          Joel's Website
        </div>
      </RouterLink>
    </v-col>

    <v-spacer />

    <v-btn
      icon
      to="/projects"
    >
      <v-icon
        color="primary"
        size="x-large"
        icon="mdi-tools"
      />
    </v-btn>

    <v-btn
      icon
      class="nav-button"
      to="/about"
    >
      <v-icon
        color="primary"
        size="x-large"
        icon="mdi-account"
      />
    </v-btn>
  </v-app-bar>
</template>