<template>
  <div class="base-container">
    <v-app-bar
      color="secondary"
      class="app-bar-styles"
      :elevation="0"
    >
      <template #prepend>
        <v-img
          src="/img/SharpGoatTransparent_primary.png"
          width="50"
        />
      </template>
      <v-app-bar-title>
        <NuxtLink to="/">
          <h1 style="color: #C6AC8F">
            Joel's Website
          </h1>
        </NuxtLink>
      </v-app-bar-title>

      <v-spacer />

      <v-btn icon>
        <nuxt-link to="/projects">
          <v-icon
            color="primary"
            size="x-large"
            icon="mdi-tools"
          />
        </nuxt-link>
      </v-btn>

      <v-btn
        icon
        class="nav-button"
      >
        <nuxt-link to="/about">
          <v-icon
            color="primary"
            size="x-large"
            icon="mdi-account"
          />
        </nuxt-link>
      </v-btn>
    </v-app-bar>
    <v-container class="main-container">
      <slot />
    </v-container>
  </div>
</template>

<style scoped>
.base-container {
  height: 100%;
}

.main-container {
  margin-top: 5rem;
  width: 70%;
}

.app-bar-styles {
  padding: 1rem;
  width: 100%;
}

a {
  color: inherit;
}

.nav-button {
  margin-left: 1rem;
}
</style>
