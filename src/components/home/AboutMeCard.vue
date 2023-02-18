<template>
  <v-card class="px-8 py-10">
    <v-row>
      <v-col cols="3">
        <v-img
          class="about-image"
          src="/img/joel-in-da-woods.png"
          alt="Joel in the woods"
          aspect-ratio="1"
          cover
        />
      </v-col>
      <v-col class="px-5 my-auto">
        <div class="text-h3 mb-2">
          My Name is Joel Young
        </div>
        <div class="text-h4 mb-3">
          I graduated from UW-Stout in Dec 2022 with a bachelor's in Applied Mathematics and Computer Science.
        </div>
        <div class="text-body-1 mb-2">
          I enjoy writing software as a career with Sentry Insurance as well as in my free time. I am currently most interested in Machine Learning and Web Applications, and have a couple <RouterLink to="/projects">
            personal projects
          </RouterLink> where I explore these ideas.
        </div>
        <div class="text-body-1">
          I also enjoy spending time in Nature whether it be a backpacking trip or a picnic in the park, and am always happy with my friends around a campfire. I must admit I also enjoy video games quite a bit, including (but not limited to) Minecraft, Forza Horizon 4, Terraria, Battlefield 4, and really anything else you can play with the bros.
        </div>
      </v-col> 
    </v-row>
  </v-card>
</template>

<style scoped>
.about-image {
  border-radius: 100%;
  box-shadow: 0 0 5px 1px;
  margin: 1rem;
}
</style>