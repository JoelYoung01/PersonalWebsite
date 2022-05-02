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
      <v-col cols="auto">
        <nuxt-link to="/about" class="text-decoration-none">
          <v-card>
            <v-img
              width="300px"
              aspect-ratio="1"
              position="bottom center"
              src="/images/portrait1.jpeg"
              alt="An image of joel"
            />
            <v-card-title class="justify-center"> About Me </v-card-title>
          </v-card>
        </nuxt-link>
      </v-col>
      <v-col cols="auto">
        <nuxt-link to="/projects" class="text-decoration-none">
          <v-card>
            <v-img
              width="300px"
              aspect-ratio="1"
              src="/images/banner_developer.jpg"
              alt="Fancy coding background"
            />
            <v-card-title class="justify-center">
              Personal Projects
            </v-card-title>
          </v-card>
        </nuxt-link>
      </v-col>
      <v-col cols="auto">
        <nuxt-link to="/minecraft" class="text-decoration-none">
          <v-card>
            <v-img
              width="300px"
              aspect-ratio="1"
              src="/images/minecraft1.png"
              alt="Minecraft boo ya"
            />
            <v-card-title class="justify-center"> Minecraft </v-card-title>
          </v-card>
        </nuxt-link>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "index",
};
</script>
