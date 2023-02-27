<script setup lang="ts">
import SocialCard from "@/components/aboutMe/SocialCard.vue";


interface Skill {
  title: string;
  description: string;
  mdiIcon: string;
}

interface Hobby {
  title: string;
  description: string;
  imgSrc: string;
}

interface Social {
  profileUri: string;
  profileImageUri: string;
  mdiIcon: string;
  handle: string;
}

const hardSkillList: Skill[] = [
  {
    title: "Vue.js",
    description: "As I've stepped into the front-end framework scene, I've dipped my toe into the big three; Angular, React, and Vue. Although all three certainly have their place, I was drawn to Vue because of it's pretty manageable learning curve and vast community. The more I develop Vue.js apps, the more I really start to love the idea of a community-first front end framework. I recognize there is risks when putting eggs into the Vue basket, but I think that this project has really taken off in the recent years and really see the beauty of open source shine through it.",
    mdiIcon: "mdi-vuejs"
  },
  {
    title: "Typescript",
    description: "I've been using Typescript for 3 years now, first tentavely as it seems just an overcomplication on JavaSript and now with much love. I have been saved by it through many projects; from React apps to Vue apps to just Node.js Scripts, and have never looked back to learning the ins and outs!",
    mdiIcon: "mdi-language-typescript"
  },
  {
    title: ".NET",
    description: "I have been writing in the .NET framework for 2 years in both front-end situations using MVC with Razor syntax and back-end situations writing resiliant SOAP and RESTful APIs. The nifty tricks that C# boasts along with the usability make it my favorite statically typed language. Before you write me off, Rust and GO are on my list to learn.",
    mdiIcon: "mdi-language-csharp"
  },
  {
    title: "Python",
    description: "During my junior year of college, I took a machine learning class and ever since then have really been pulled into Python, loving both its simplicity and community. Learning Python was one of the quickest experiences, and I just kept finding myself saying 'that is so slick'. The shortcuts and tricks that are built into the language make it such a fun language to work with!",
    mdiIcon: "mdi-language-python"
  },
  {
    title: "Visual Studio (Code)",
    description: "The majority of my coding life, I have written in Visual Studio. However, as of recently, I have really started to turn towards the much sleeker and faster Visual Studio Code. Now, whenver starting a project, I tend to start with VS Code and I don't really have to look back! The community support and extension library really does give you the power to shape the IDE into the exact tool you need for virtually any job.",
    mdiIcon: "mdi-microsoft-visual-studio-code"
  }
];

const softSkillList: Skill[] = [
  {
    title: "SAFe",
    description: "I have been working in a Scaled Agile Framework environment for 2 years now, along with a semester of classes structured to train Agile practices. At first, the rituals seemed to just take up time that could be better spent writing code, but as I mature in my field and am exposed to larger projects, I truly understand the value of SAFe and the organization and efficiency benefits that an enterprise gains through following a SAFe-like system.",
    mdiIcon: "mdi-image-filter-hdr"
  },
  {
    title: "Communication Abilities",
    description: "My family and I have lived in 3 different countries, all during my time in highschool, which has thrown me into new social circles repeatedly and forced me to adapt to new situations quickly. One of the skills that resulted from all that upheaval was some great communication abilities. I am now comfortable in a room full of strangers, and don't mind one bit being the first one to open the floor and loosen the mood!",
    mdiIcon: "mdi-forum"
  },
  {
    title: "Constant Learning",
    description: "I took my first coding class my freshman year of highschool and have not stopped learning since then! I love the software development industry because there is always new technologies rising up that are more efficient or more effective than the last. I believe learning is what keeps us sharp, and that constant flow of new tech is the perfect environment to be in a perpetual state of learning!",
    mdiIcon: "mdi-school"
  },
  {
    title: "Problem Solving",
    description: "One of the best feelings is sitting down and chewing away at a hard problem, and after a time of hard work and energy finally reaching that moment where the solution just clicks into place. I am a junky for this sensation, which drives me to hunt down problems that need solutions. What better place to find this high than software development? I can confidently say I am addicted to solving problems, and my personal favorite way to satiate the addiction is to write code to improve others' lives.",
    mdiIcon: "mdi-lightbulb-on"
  },
  {
    title: "Positive Attitude",
    description: "The one thing that can consistently make any situation better is doing your best to keep the positive angle. I do my best to apply this concept to everything in my life, and it has really paid off. Even when the work seems too much, or the weather seems to dreary, or the deadlines seem to creep up too quickly, a positive attitude has always set my foot in the right direction and kept me productive.",
    mdiIcon: "mdi-comment-plus"
  }
];

const socials: Social[] = [
  {
    profileUri: "https://twitter.com/JoelYou39645359",
    profileImageUri: "/img/socials/twitter.jpg",
    mdiIcon: "mdi-twitter",
    handle: "@JoelYou39645359"
  },
  {
    profileUri: "https://github.com/JoelYoung01",
    profileImageUri: "https://github.com/joelyoung01.png?size=250",
    mdiIcon: "mdi-github",
    handle: "JoelYoung01"
  },
  {
    profileUri: "https://www.instagram.com/j.oelyoung/",
    profileImageUri: "/img/socials/instagram.jpg",
    mdiIcon: "mdi-instagram",
    handle: "@j.oelyoung"
  },
  {
    profileUri: "https://www.linkedin.com/in/joel-young-049627196/",
    profileImageUri: "/img/socials/linkedin.jpg",
    mdiIcon: "mdi-linkedin",
    handle: "Joel Young"
  }
];

const hobbies: Hobby[] = [
  {
    title: "Games With Friends",
    description: "I love sitting down with the homies and playing any type of game, ranging from slower-paced games like Catan or Wingspan to faster-paced like Battlefield or Forza.",
    imgSrc: "/img/joel-bird-game.JPEG"
  },
  {
    title: "Experiencing Nature",
    description: "There is nothing more relaxing or freeing than getting out and spending some time living on the minimal out in nature, bonus if you take some friends or family!",
    imgSrc: "/img/joel-camping.JPEG"
  },
  {
    title: "Eating Great Food",
    description: "Food is one of humanity's greatest inventions. The rich diversity and vast range of food in our world never ceases to amaze me, I will never try enough of them.",
    imgSrc: "/img/banger-masubi.JPEG"
  },
  {
    title: "Coding!!!!",
    description: "I truly enjoy sitting down with a goal in mind or a problem to solve, banging away at the keyboard while jamming to some tunes, and creating!",
    imgSrc: "/img/joel-workspace.JPEG"
  }
];
</script>

<template>
  <div class="d-flex flex-column" style="margin-top: 8rem;">
    <!-- Header Section -->
    <div id="header" class="d-flex" style="margin-bottom: 15rem;">
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
        <v-card class="ml-auto pa-10" style="margin-top: 10rem; width: 80%">
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
    <v-card id="skills" class="pa-8" style="margin-bottom: 15rem;">
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
    <v-card id="hobbies" class="pa-12" style="margin-bottom: 15rem;">
      <div id="skills" class="text-h3 text-center mb-10">
        Hobbies
      </div>
      <v-row justify="center">
        <v-col
          v-for="hobby in hobbies"
          :key="hobby.title"
          cols="auto"
          class="pa-0 d-flex ma-3 j-rounder"
        >
          <v-img
            :src="hobby.imgSrc"
            :alt="hobby.title"
            class="j-rounder j-raised"
            cover
            width="250"
            aspect-ratio="1"
          />
          <div class="px-4" style="width: 350px">
            <div class="text-h4">
              {{ hobby.title }}
            </div>
            <div class="text-h6">
              {{ hobby.description }}
            </div>
          </div>
        </v-col>
      </v-row>
    </v-card>

    <!-- Socials -->
    <v-card id="socials" class="pa-12" style="margin-bottom: 15rem;">
      <div id="skills" class="text-h3 text-center mb-10">
        Socials
      </div>
      <v-row justify="space-around">
        <v-col 
          v-for="social in socials"
          :key="social.mdiIcon"
          cols="auto"
        >
          <SocialCard
            :profile-uri="social.profileUri"
            :profile-image-uri="social.profileImageUri"
            :mdi-icon="social.mdiIcon"
            :handle="social.handle"
            :size="200"
          />
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<style scoped>
.about-me-portrait {
  margin-top: 20px;
  box-shadow: -30px -30px 0px 0px rgb(var(--v-theme-surface));
}
</style>
