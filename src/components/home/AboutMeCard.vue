<script setup lang="ts">
import { useDisplay } from "vuetify/lib/framework.mjs";

// Mobile flag (true if viewer is mobile user)
const { mobile } = useDisplay();
</script>

<template>
  <v-card class="px-8 py-10 j-roundest">
    <v-row align="center" :class="mobile ? 'flex-column' : null">
      <v-col cols="auto">
        <RouterLink to="about">
          <v-img
            class="about-image"
            :class="mobile ? '' : 'ma-1'"
            src="/img/joel-in-da-woods.png"
            alt="Joel in the woods"
            width="350"
            aspect-ratio="1"
            cover
          />
        </RouterLink>
      </v-col>
      <v-col class="px-5 my-auto">
        <div class="text-h3 mb-2">My Name is Joel Young</div>
        <div class="text-h5 text-md-h4 mb-3">
          I graduated from UW-Stout in Dec 2022 with a bachelor's in Applied Mathematics and Computer Science.
        </div>
        <div class="text-body-1 mb-2">
          I enjoy writing software as a career with Boston Scientific as well as in my free time. I am currently most
          interested in Machine Learning and Web Applications, and have a couple
          <RouterLink to="/projects"> personal projects </RouterLink> where I explore these ideas.
        </div>
        <div class="text-body-1">
          I also enjoy spending time in Nature whether it be a backpacking trip or a picnic in the park, and am always
          happy with my friends around a campfire. I also enjoy video games quite a bit, including (but not limited to)
          Minecraft, Forza Horizon 4, Terraria, Battlefield 4, and really anything else you can play with friends.
        </div>
      </v-col>
    </v-row>
  </v-card>
</template>

<style scoped>
.about-image {
  border-radius: 100%;
  box-shadow: 0 0 5px 1px;
}
</style>
