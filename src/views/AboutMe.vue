<script setup lang="ts">

interface Skill {
  title: string;
  description: string;
  mdiIcon: string;
}

const hardSkillList: Skill[] = [
  {
    title: "Typescript",
    description: "desc",
    mdiIcon: "mdi-language-typescript"
  }
];

const softSkillList: Skill[] = [
  {
    title: "SAFe",
    description: "desc",
    mdiIcon: "mdi-image-filter-hdr"
  }
];
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
      <div id="skills" class="text-h3 text-center mb-6">
        Skills and Abilities
      </div>
      <div class="d-flex">
        <div style="width: 45%">
          <div class="text-h5 text-center mb-2">
            Hard Skills
          </div>
          <v-expansion-panels color="secondary">
            <v-expansion-panel
              v-for="skill in hardSkillList"
              :key="skill.title"
              bg-color="primary-lighten-1"
              :text="skill.description"
            >
              <template #title>
                <v-icon :icon="skill.mdiIcon" class="mr-3" /><span class="text-h6">{{ skill.title }}</span>
              </template>
              <template #description>
                <span class="text-body-1">{{ skill.description }}</span>
              </template>
            </v-expansion-panel> 
          </v-expansion-panels>
        </div>
        <v-spacer />
        <div style="width: 45%">
          <div class="text-h5 text-center mb-2">
            Soft Skills
          </div>
          <v-expansion-panels color="secondary">
            <v-expansion-panel
              v-for="skill in softSkillList"
              :key="skill.title"
              bg-color="primary-lighten-1"
              :text="skill.description"
            >
              <template #title>
                <v-icon :icon="skill.mdiIcon" class="mr-3" /><span class="text-h6">{{ skill.title }}</span>
              </template>
              <template #description>
                <span class="text-body-1">{{ skill.description }}</span>
              </template>
            </v-expansion-panel> 
          </v-expansion-panels>
        </div>
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
