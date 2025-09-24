<script setup lang="ts">
import { useTitle } from "@vueuse/core";

useTitle("Joel Young's Resume");

function onDownload() {
  window.print();
}
</script>

<template>
  <v-container class="print-container position-relative py-4 px-6">
    <h1 class="text-center">Joel Young</h1>
    <div class="d-flex justify-center align-center ga-2">
      <div>Coon Rapids, MN</div>
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
        <v-icon icon="mdi-linkedin" size="x-small" class="mt-1" />
        LinkedIn</a
      >
      <div>•</div>
      <a href="https://github.com/JoelYoung01" target="_blank" class="d-flex align-center ga-1">
        <v-icon icon="mdi-github" size="x-small" class="mt-1" />
        GitHub</a
      >
    </div>

    <v-divider color="secondary" class="border-opacity-50 my-2" />

    <p class="text-center">
      Passionate software developer with 5+ years of professional experience developing ergonomic
      user experiences using industry standard technologies. Excited about learning new skills and
      using them to improve business operations.
    </p>

    <h2 class="text-center mt-2">Technical Skills</h2>
    <v-divider color="secondary" class="border-opacity-50 my-1" />
    <div class="d-flex ga-3">
      <div>
        <div class="font-weight-bold">Languages</div>
        HTML, CSS, JavaScript, Python, C#, Java, Markdown, YAML, PowerShell, Bash
      </div>
      <div>
        <div class="font-weight-bold">Frameworks</div>
        Vue, Svelte(Kit), Tailwind, React, .NET, Django, FastAPI, Terraform, Kubernetes, GraphQL
      </div>
      <div>
        <div class="font-weight-bold">Tools & Platforms</div>
        Git, Vite, Playwright, Vuetify, Node, NPM, PNPM, Yarn, AWS, Debian, Ubuntu, Docker
      </div>
      <div>
        <div class="font-weight-bold">Patterns & Practices</div>
        RESTful API, Open API, Oath2, Unit Testing, Gitflow, Agile Software Development, Test Driven
        Development
      </div>
      <div>
        <div class="font-weight-bold">Software</div>
        GitHub, GitLab, VSCode, Cursor, Bitbucket, Jira, Visual Studio, Intelli-J IDEA, AWS Console,
        Jenkins, Docker Desktop
      </div>
    </div>

    <h2 class="text-center mt-2">Professional Experience</h2>
    <v-divider color="secondary" class="border-opacity-50 my-1" />
    <div class="d-flex">
      <div>
        <div>Boston Scientific, Minneapolis MN</div>
        <div class="font-weight-bold">Lead Front-End Developer</div>
      </div>

      <v-spacer />

      <div>March 2024 - Present</div>
    </div>
    <ul>
      <li>
        Built GitLab Automation tools using Python and Vue that reduces context switching required
        for developers and improves time to-completion per ticket by up to 4 hours by automating the
        handoff between development and testing.
      </li>
      <li>
        Led front-end development on an application which increased visibility on shipment holdings,
        saving an estimated $5,000,000 in shipping costs.
      </li>
      <li>
        Created a plan for migrating Vue + Django applications from Vue 2 to Vue 3 that allowed the
        migration of an application in 2-4 hours, greatly reducing the cost of an otherwise
        challenging migration. Utilized this guide to lead a team of 6 developers to migrate 23 web
        applications in a single 2-week sprint.
      </li>
      <li>
        Developed a Vue 3 component library providing reusable and simple components implemented by
        35+ applications. Published full documentation detailing this library and how to use it to
        improve developer experience.
      </li>
      <li>
        Led development on a web application project automating 80% of the Capital Orders sales
        process for the focus system, saving an estimated $50,000 in employee hours.
      </li>
      <li>
        Researched and fully implemented End to End testing using Playwright in a single 2-week
        sprint, cutting testing duration for shipped projects by an estimated 75%.
      </li>
    </ul>

    <div class="d-flex mt-3">
      <div>
        <div>Sentry Insurance, Wausau WI</div>
        <div class="font-weight-bold">Software Developer</div>
      </div>

      <v-spacer />

      <div>January 2024 - March 2024</div>
    </div>

    <ul>
      <li>
        Built an application using .NET and Vue 3 that consumed data from 5+ sources via webhooks
        and its REST API, and served it through a performant GraphQL API, enabled access to
        consolidated data that normally would take up to 8 hours to retrieve to be served in less
        than a second.
      </li>
      <li>
        Developed a patented .NET and Vue 2 application responsible for the orchestration of and
        reporting for hundreds of thousands of business-wide system deployments, following Test
        Driven Development practices for both the front and backend. Iterated on this application
        implementing customer feedback to improve user experience and data visibility for upper
        management.
      </li>
      <li>
        Wrote a plan for migrating a large application (> 10,000 LOC) from Vue 2 to Vue 3, including
        a migration of tests and the app's component library, reducing the time of the migration by
        2 months.
      </li>
      <li>
        Led an effort to research and implement new technologies in the front-end and API space such
        as Vue 3, Microsoft's Playwright, Vuetify 3, ChilliCream's Banana Cake Pop (.NET + GraphQL),
        and Vite.
      </li>
      <li>
        Maintained a wide portfolio of AWS Resources, including hundreds of EC2 and ECS instances
        and their respective AWS Load balancing resources, ECR registries for 5 different operating
        systems, and hundreds of S3 buckets.
      </li>
      <li>
        Maintained a large portfolio of infrastructure-as-code repositories responsible for both
        on-prem resources as well as AWS resources, identifying and implementing cost-savings areas
        ranging from $1 to $10,000.
      </li>
      <li>
        Migrated business systems from traditional servers to auto-scaled servers to efficiently
        match user demand to system resources, reducing infrastructure costs for high-traffic
        applications from $30,000/month to $5,000/month.
      </li>
      <li>
        Created and maintained a repository of documentation covering a large range of topics
        including external-facing user guides for the applications we maintained, process
        documentation for infrastructure maintenance, migration guides and other developer guidance
        documentation, and future work plans.
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

  margin-top: 2rem;
  width: var(--resume-width);
  height: var(--resume-height);
  border-radius: 5px;
  color: #22333b;
  background-color: #ffffff;

  font-size: 0.8rem;
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
  font-size: 1.2rem;
}

h2 {
  color: rgb(var(--v-theme-primary-darken-1));
  font-weight: normal;
  font-size: 1rem;
}

ul {
  margin-left: 1rem;
}
</style>
