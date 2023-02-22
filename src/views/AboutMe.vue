<script setup lang="ts">
</script>

<template>
  <div class="d-flex flex-column" style="margin-top: 8rem;">
    <!-- Header Section -->
    <div class="d-flex" style="margin-bottom: 15rem;">
      <v-col cols="auto">
        <v-img
          src="/img/about-me-portrait.jpeg"
          alt="Joel wearing a hat in the winter"
          class="about-me-portrait j-round mx-2"
          width="500"
          cover
          :aspect-ratio="8/10"
        />
      </v-col>
      <v-col>
        <v-card class="ml-auto pa-10 mt-big" style="width: 80%">
          <div class="text-h2 text-center mb-5">
            About Me
          </div>
          <div class="text-h5">
            My name is Joel Young and I love writing all things code!
            I enjoy both the creativity and problem solving skills that are required to write a good program.
            I thrive on applying what I know combined with what I learned 30 minutes earlier on YouTube or StackOverflow to solve any problem thrown my way!
          </div>
          <v-row
            align="center"
            justify="space-between"
            style="width: 300px"
            class="mx-auto mt-3"
          >
            <v-col cols="auto">
              <v-chip
                text="Skills"
                to="#skills"
                color="secondary"
                variant="elevated"
              />
            </v-col>
            <span class="text-h6">•</span>
            <v-col cols="auto">
              <v-chip
                text="Hobbies"
                to="#hobbies"
                color="secondary"
                variant="elevated"
              />
            </v-col>
            <span class="text-h6">•</span>
            <v-col cols="auto">
              <v-chip
                text="Socials"
                to="#socials"
                color="secondary"
                variant="elevated"
              />
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </div>

    <!-- Skills -->
    <v-card class="pa-8">
      <div id="skills" class="text-h2 text-center">
        Skills and Abilities
      </div>
    </v-card>

    <!-- Hobbies -->

    <!-- Socials -->
  </div>
</template>

<style scoped>
.about-me-portrait {
  margin-top: 20px;
  box-shadow: -30px -30px 0px 0px rgb(var(--v-theme-surface));
}

.mt-big {
  margin-top: 10rem;
}
</style>
