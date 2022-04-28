<template>
  <v-container>
    <v-row>
      <v-col>
        <div class="text-h1">Welcome!</div>
        <div class="text-h3">
          Feel free to mouse around and explore my website.
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col xs="12" sm="6" md="4" lg="3">
        <NuxtLink to="/about" style="text-decoration: none">
          <v-card>
            <v-card-title class="justify-center text-decoration-none">
              About Me
            </v-card-title>
          </v-card>
        </NuxtLink>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "index",
};
</script>
