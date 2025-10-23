<script setup lang="ts">
import { useTitle } from "@vueuse/core";

useTitle("Joel Young's Resume");

const startedWorking = new Date(2021, 4, 1).getTime();
const today = new Date().getTime();
const yearXp = Math.floor((today - startedWorking) / (1000 * 60 * 60 * 24 * 365.25));

function onDownload() {
  window.print();
}
</script>

<template>
  <v-container class="print-container position-relative py-4 px-6 text-body-2">
    <h1 class="text-center">Joel Young</h1>
    <div class="d-flex justify-center align-center ga-2">
      <div>Minneapolis, MN</div>
      <div>•</div>
      <div>(612) 438-9418</div>
      <div>•</div>
      <a href="mailto:joeleyoung01@gmail.com">joeleyoung01@gmail.com</a>
      <div>•</div>
      <a href="https://www.JoelYoung.dev" target="_blank">JoelYoung.dev</a>
      <div>•</div>
      <a
        href="https://www.linkedin.com/in/joel-young-049627196/"
        target="_blank"
        class="d-flex align-center ga-1"
      >
        <v-icon icon="mdi-linkedin" size="x-small" class="mt-0" />
        LinkedIn</a
      >
      <div>•</div>
      <a href="https://github.com/JoelYoung01" target="_blank" class="d-flex align-center ga-1">
        <v-icon icon="mdi-github" size="x-small" class="mt-0" />
        GitHub</a
      >
    </div>

    <v-divider color="secondary" class="border-opacity-50 my-2" />

    <p class="text-center text-body-2">
      Passionate software developer with {{ yearXp }}+ years of professional experience developing
      full-stack solutions across a wide range of technologies. Enjoys collaborating with end users
      to understand and meet their needs. Excited about learning new skills, working with a
      close-knit team, and achieving group goals to create tangible value.
    </p>

    <h2 class="text-center mt-2">Technical Skills</h2>
    <v-divider color="secondary" class="border-opacity-50 my-1" />
    <div class="d-flex justify-space-between text-body-2 ga-3">
      <div>
        <div class="font-weight-bold">Languages</div>
        <ul class="mb-0">
          <li>JavaScript <span class="text-caption">(Expert)</span></li>
          <li>HTML <span class="text-caption">(Expert)</span></li>
          <li>CSS <span class="text-caption">(Expert)</span></li>
          <li>Python <span class="text-caption">(Proficient)</span></li>
          <li>C# <span class="text-caption">(Proficient)</span></li>
          <li>Java <span class="text-caption">(Familiar)</span></li>
        </ul>
      </div>
      <div>
        <div class="font-weight-bold">Frameworks</div>
        <ul class="mb-0">
          <li>Vue <span class="text-caption">(Expert)</span></li>
          <li>Django <span class="text-caption">(Proficient)</span></li>
          <li>.NET <span class="text-caption">(Proficient)</span></li>
          <li>GraphQL <span class="text-caption">(Proficient)</span></li>
          <li>React <span class="text-caption">(Familiar)</span></li>
          <li>Tailwind <span class="text-caption">(Familiar)</span></li>
          <li>Terraform <span class="text-caption">(Familiar)</span></li>
          <li>Kubernetes <span class="text-caption">(Familiar)</span></li>
          <li>Svelte(Kit) <span class="text-caption">(Familiar)</span></li>
        </ul>
      </div>
      <div>
        <div class="font-weight-bold">Tools & Platforms</div>
        <ul class="mb-0">
          <li>Git <span class="text-caption">(Expert)</span></li>
          <li>Vuetify <span class="text-caption">(Expert)</span></li>
          <li>Node <span class="text-caption">(Proficient)</span></li>
          <li>Docker <span class="text-caption">(Proficient)</span></li>
          <li>Playwright <span class="text-caption">(Proficient)</span></li>
          <li>AWS <span class="text-caption">(Familiar)</span></li>
        </ul>
      </div>
      <div>
        <div class="font-weight-bold">Software</div>
        <ul class="mb-0">
          <li>GitHub <span class="text-caption">(Expert)</span></li>
          <li>GitLab <span class="text-caption">(Expert)</span></li>
          <li>Cursor <span class="text-caption">(Expert)</span></li>
          <li>Jenkins <span class="text-caption">(Proficient)</span></li>
          <li>Bitbucket <span class="text-caption">(Proficient)</span></li>
          <li>Atlassian Suite <span class="text-caption">(Proficient)</span></li>
          <li>Datadog <span class="text-caption">(Familiar)</span></li>
        </ul>
      </div>
    </div>

    <h2 class="text-center mt-2">Professional Experience</h2>
    <v-divider color="secondary" class="border-opacity-50 my-1" />
    <div class="d-flex">
      <div>
        <div>Boston Scientific, Minneapolis MN</div>
        <div class="font-weight-bold">Lead Front-End / Fullstack Developer</div>
      </div>

      <v-spacer />

      <div>March 2024 - Present</div>
    </div>
    <ul>
      <li>
        Conducted requirements gathering for 40+ applications via weekly client sessions, aligning
        technical solutions with business needs to prevent misaligned development and ensure
        satisfaction.
      </li>
      <li>Led front-end development of a shipment visibility app, saving $5M in shipping costs.</li>
      <li>
        Automated 80% of the Capital Orders sales process, accelerating per-sale processing by 15x.
      </li>
      <li>
        Designed a Vue 2-to-3 migration plan enabling 2-4 hour migrations; led a team of 6 devs to
        migrate 23 apps in 2 weeks.
      </li>
      <li>
        Built a Vue 3 component library adopted by 35+ apps, with full documentation to enhance
        developer experience.
      </li>
      <li>Implemented Playwright E2E testing in 2 weeks, reducing testing time by 75%.</li>
      <li>
        Developed Python/Vue GitLab automation tools, reducing developer context switching and
        saving up to 4 hours per ticket.
      </li>
    </ul>

    <div class="d-flex mt-3">
      <div>
        <div>Sentry Insurance, Wausau WI</div>
        <div class="font-weight-bold">Software Developer</div>
      </div>

      <v-spacer />

      <div>April 2021 - March 2024</div>
    </div>

    <ul>
      <li>
        Developed a .NET/Vue app that unified data from 5+ sources via webhooks and REST, delivering
        through a fast GraphQL API—reducing 8-hour data retrievals to under a second.
      </li>
      <li>
        Developed a patented .NET/Vue app orchestrating and reporting on 100k+ system deployments,
        using TDD and iterating on user feedback to enhance UX and management visibility.
      </li>
      <li>
        Authored a migration plan for a 10k+ LOC app (Vue 2-to-3), including tests and component
        library Vuetify, cutting projected migration time by 2 months.
      </li>
      <li>
        Led adoption of new front-end and API technologies: Vue 3, Playwright, Vuetify 3, GraphQL,
        and Vite.
      </li>
      <li>
        Managed hundreds of AWS EC2/ECS instances, load balancers, ECR registries (5 OS's), and S3
        buckets.
      </li>
      <li>
        Maintained I.A.C. repos for hybrid on-prem and cloud (AWS), identifying and implementing
        cost savings from $100 to $10k.
      </li>
      <li>
        Migrated systems to auto-scaled servers, reducing high-traffic app infrastructure costs from
        $30k/month to $5k/month.
      </li>
      <li>
        Created and maintained comprehensive documentation: user guides, process docs, migration
        guides, developer resources, and future plans.
      </li>
    </ul>

    <h2 class="text-center mt-2">Education</h2>
    <v-divider color="secondary" class="border-opacity-50 my-1" />

    <div class="d-flex">
      <div>
        <div>University of Wisconsin-Stout</div>
        <div class="font-weight-bold">Bachelor of Applied Mathematics and Computer Science</div>
      </div>

      <v-spacer />

      <div>Dec 2022</div>
    </div>
    <ul>
      <li>
        Dean’s List for entirety of enrollment (top 10%), Graduating Summa Cum Laude (4.0 GPA)
      </li>
    </ul>
  </v-container>

  <div class="hide-on-print text-center pt-2 mb-10">
    <v-btn variant="outlined" size="small" prepend-icon="mdi-download" @click="onDownload()">
      Download Resume as PDF
    </v-btn>
  </div>
</template>

<style scoped>
@page {
  margin: 0;
}

.print-container {
  --resume-width: 816px;
  --resume-height: 1056px;

  margin-top: 32px;
  width: var(--resume-width);
  height: var(--resume-height);
  border-radius: 5px;
  color: #22333b;
  background-color: #ffffff;

  font-size: 12.8px;
  font-family: "Calibri", sans-serif;
  line-height: 1.4;

  zoom: calc(min(1, 98vw / var(--resume-width)));

  @media print {
    margin: -64px 0 0 0;
    padding: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }
}

h1 {
  color: rgb(var(--v-theme-primary-darken-1));
  font-weight: bold;
  font-size: 22px;
}

h2 {
  color: rgb(var(--v-theme-primary-darken-1));
  font-weight: normal;
  font-size: 20px;
}

ul {
  margin-left: 16px;
}
</style>
