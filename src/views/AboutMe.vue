<script setup lang="ts">
import SocialCard from "@/components/aboutMe/SocialCard.vue";
import svelteLogo from "@/assets/images/Svelte_Logo_bw.svg";
import { useDisplay } from "vuetify";

// Mobile flag (true if viewer is mobile user)
const { mobile } = useDisplay();

interface Skill {
  title: string;
  description: string;
  mdiIcon?: string;
  svgIcon?: string;
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
    description:
      "I've written countless Vue.js applications, both professionally and personally. I enjoy the simplicity and ease of use of Vue.js, the community support, and the wide range of toolings and libraries available. I've written Vue 2 and Vue 3 applications, using both Composition and Options API, and have migrated >20 applications from 2 to 3. And I still love the framework!",
    mdiIcon: "mdi-vuejs",
  },
  {
    title: "Svelte",
    description:
      "I've written an app with Svelte and another with SvelteKit. Svelte is great for quick, small projects but can scale to larger projects with the right direction, which makes it a powerful tool for any developer.",
    svgIcon: svelteLogo,
  },
  {
    title: "Typescript",
    description:
      "Typescript is a great tool that I've used for many large Vue projects professionally and personally. The peace of mind and robustness it provides is invaluable to larger scale projects that involve bigger teams.",
    mdiIcon: "mdi-language-typescript",
  },
  {
    title: ".NET",
    description:
      ".NET has been a staple in my software development career for business critical applications that require reliability and maintainability. I've written both front-end and back-end applications using .NET, and have a deep understanding of the framework and its capabilities.",
    mdiIcon: "mdi-language-csharp",
  },
  {
    title: "Python",
    description:
      "I've used python in a variety of projects, from small scripting tasks to training machine learning models to building large scale web applications. Professionally, I have built and maintained 30+ Django applications, and love the simplicity and power of the language.",
    mdiIcon: "mdi-language-python",
  },
  {
    title: "VS Code",
    description:
      "The majority of my coding life, I have written in Visual Studio. However, as of recently, I have really started to turn towards the much sleeker and faster Visual Studio Code. Now, whenver starting a project, I tend to start with VS Code and I don't really have to look back! The community support and extension library really does give you the power to shape the IDE into the exact tool you need for virtually any job.",
    mdiIcon: "mdi-microsoft-visual-studio-code",
  },
];

const softSkillList: Skill[] = [
  {
    title: "Agile",
    description:
      "I have worked in various Agile environments, ranging from an organization-wide Agile program including 300+ developers to a small team of 3. I've used various Agile methodologies, including Scrum, Kanban, and SAFe, and see the value in all versions of Agile.",
    mdiIcon: "mdi-image-filter-hdr",
  },
  {
    title: "Communication Abilities",
    description:
      "I believe that communication is the key to success in any relatiionship, personal or professional. I enjoy working together with other intelligent and motivated individuals to achieve a common goal, and am always looking for ways to learn and grow.",
    mdiIcon: "mdi-forum",
  },
  {
    title: "Constant Learning",
    description:
      "I approach life with curiosity and a desire to learn. This has helped me to grow and develop in many ways, especially in my career as a software developer; there is always new things to learn and ways to improve!",
    mdiIcon: "mdi-school",
  },
  {
    title: "Problem Solving",
    description:
      "There is nothing more satisfying than solving a problem, whether that be a difficult bug that has been confusing me for hours or a complex requirement from a client that my team needs to implement. I love the challenge of finding the best solution to a problem, and balancing the tradeoffs between different solutions.",
    mdiIcon: "mdi-lightbulb-on",
  },
  {
    title: "Positive Attitude",
    description:
      "No matter what the situation, a positive attitude can only help. I try to approach every situation with a positive attitude, and it has helped me to be more productive and successful in my career.",
    mdiIcon: "mdi-comment-plus",
  },
  {
    title: "Leadership",
    description:
      "I have led a couple of development teams, and have built a strong understanding of the importance of communication and collaboration in a team. I enjoy the challenge of building a plan and executing it across the team, and I love watching the team come together to achieve a common goal.",
    mdiIcon: "mdi-account-group",
  },
];

const socials: Social[] = [
  {
    profileUri: "https://twitter.com/JoelYoung01",
    profileImageUri: "/img/socials/twitter.jpg",
    mdiIcon: "mdi-twitter",
    handle: "@JoelYoung01",
  },
  {
    profileUri: "https://github.com/JoelYoung01",
    profileImageUri: "https://github.com/joelyoung01.png?size=250",
    mdiIcon: "mdi-github",
    handle: "JoelYoung01",
  },
  {
    profileUri: "https://www.instagram.com/j.oelyoung/",
    profileImageUri: "/img/socials/instagram.jpg",
    mdiIcon: "mdi-instagram",
    handle: "@j.oelyoung",
  },
  {
    profileUri: "https://www.linkedin.com/in/joel-young-049627196/",
    profileImageUri: "/img/socials/linkedin.jpg",
    mdiIcon: "mdi-linkedin",
    handle: "Joel Young",
  },
];
</script>

<template>
  <v-container :class="[mobile ? 'w-100' : 'w-75']">
    <!-- Header Section -->
    <section :class="{ mobile, 'mt-8': mobile }">
      <v-row id="header" class="align-center mb-16 flex-grow-0">
        <v-col md="5" cols="12" class="d-flex justify-center">
          <v-img
            src="/img/about-me-portrait.jpeg"
            alt="Joel wearing a hat in the winter"
            class="about-me-portrait j-round mx-2"
            :max-width="mobile ? 200 : 500"
            cover
            :aspect-ratio="8 / 10"
          />
        </v-col>
        <v-col md="7" cols="12">
          <v-card :class="[mobile ? 'pa-5' : 'pa-10', 'w-100']">
            <h2 class="text-md-h2 text-h4 text-center mb-5">About Me</h2>
            <p class="text-md-h5 text-body-1">
              My name is Joel Young and I love writing code! I enjoy both the
              creativity and problem solving skills involved in coding. I love
              watching my ideas become reality or the feeling of implementing a
              new technology to solve a problem more efficiently. Most
              importantly, I love the feeling of creating something that can
              help improve someone's life!
            </p>
            <v-row
              align="center"
              justify="space-between"
              style="width: 300px"
              class="mx-auto mt-md-3 mt-1"
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
      </v-row>
    </section>

    <!-- Skills -->
    <section :class="{ mobile }">
      <v-card id="skills" class="pa-8" style="margin-bottom: 15rem">
        <h2 id="skills" class="text-md-h2 text-h4 text-center mb-6">
          Skills and Abilities
        </h2>
        <v-row justify="space-between">
          <v-col md="6" cols="12" class="pe-md-8">
            <h3 class="text-md-h4 text-h5 text-center mb-2">Hard Skills</h3>
            <v-expansion-panels color="secondary">
              <v-expansion-panel
                v-for="skill in hardSkillList"
                :key="skill.title"
                bg-color="primary-lighten-1"
                :text="skill.description"
              >
                <template #title>
                  <v-icon
                    v-if="skill.mdiIcon"
                    :icon="skill.mdiIcon"
                    class="mr-3"
                  />
                  <div>
                    <v-img
                      v-if="skill.svgIcon"
                      :src="skill.svgIcon"
                      width="24"
                      height="24"
                      class="mr-3"
                    />
                  </div>
                  <span class="text-h6">{{ skill.title }} </span>
                </template>
                <template #text>
                  <span class="text-body-1">{{ skill.description }}</span>
                </template>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-col>

          <v-spacer />

          <v-col md="6" cols="12" class="ps-md-8">
            <div class="text-md-h4 text-h5 text-center mb-2">Soft Skills</div>
            <v-expansion-panels color="secondary">
              <v-expansion-panel
                v-for="skill in softSkillList"
                :key="skill.title"
                bg-color="primary-lighten-1"
                :text="skill.description"
              >
                <template #title>
                  <v-icon :icon="skill.mdiIcon" class="mr-3" /><span
                    class="text-h6"
                    >{{ skill.title }}</span
                  >
                </template>
                <template #text>
                  <span class="text-body-1">{{ skill.description }}</span>
                </template>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-col>
        </v-row>
      </v-card>
    </section>

    <!-- Hobbies -->
    <section :class="{ mobile }">
      <v-card id="hobbies" class="pa-12" style="margin-bottom: 15rem">
        <h2 id="skills" class="text-md-h2 text-h4 text-center mb-10">
          Hobbies
        </h2>
        <v-row justify="center">
          <v-col md="6" cols="12">
            <h3 class="text-md-h3 text-h5">Experiencing Nature</h3>
            <p class="text-md-h6 text-body-1">
              There is nothing more relaxing or freeing that escaping the
              schedules and stress of everyday life to get out and experience
              the beauty of nature. I love going on hikes, camping, fishing,
              backpacking, and pretty much anything else that gets me outside!
            </p>
          </v-col>
          <v-col md="6" cols="12">
            <h3 class="text-md-h3 text-h5">Sports</h3>
            <p class="text-md-h6 text-body-1">
              I am not a pro at any sport, but I do enjoy playing a variety of
              casual sports with friends and family. You can catch me playing
              pickleball with friends, on the wall at my nearby climbing gym, or
              playing pickup spikeball with my family!
            </p>
          </v-col>
          <v-col md="6" cols="12">
            <h3 class="text-md-h3 text-h5">Cooking</h3>
            <p class="text-md-h6 text-body-1">
              I love cooking and more importantly, eating great food! One of the
              best experiences in life is sharing a meal with the ones you love,
              laughing and enjoying the company and food together.
            </p>
          </v-col>
          <v-col md="6" cols="12">
            <h3 class="text-md-h3 text-h5">Gaming</h3>
            <p class="text-md-h6 text-body-1">
              Games are a great way to relax and have fun with anyone! I can be
              found playing a variety of games, ranging from board games like
              Catan or Wingspan to video games like Forza or Minecraft!
            </p>
          </v-col>
        </v-row>
      </v-card>
    </section>

    <!-- Socials -->
    <section :class="{ mobile }">
      <v-card id="socials" :class="['pa-12', mobile ? 'mt-6' : 'mt-8r']">
        <div id="skills" class="text-md-h2 text-h4 text-center mb-10">
          Socials
        </div>
        <v-row justify="space-around">
          <v-col v-for="social in socials" :key="social.mdiIcon" cols="auto">
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
    </section>
  </v-container>
</template>

<style scoped>
.about-me-portrait {
  margin-top: 20px;
  box-shadow: -30px -30px 0px 0px rgb(var(--v-theme-surface));
}
.mt-8r {
  margin-top: 8rem;
}

section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 0;
  margin-bottom: 0;
}

section.mobile {
  min-height: 75vh;
}
section:not(.mobile) {
  min-height: 100vh;
}
</style>
