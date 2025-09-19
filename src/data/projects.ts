import { type Project, TAGS } from "@/types";

import portfolioImageUrl from "@/assets/images/portfolioImage.png";
import recipeDbImageUrl from "@/assets/images/recipeDb.png";
import play4096ImageUrl from "@/assets/images/play-4096.png";
import costEstimateSiteUrl from "@/assets/images/costEstimateDemo.png";
import greensightImageUrl from "@/assets/images/greensight.png";
import timeTrackingSiteUrl from "@/assets/images/timeTrackingSite.png";
import craftCaddyImageUrl from "@/assets/images/craft-caddy.png";
import bugZapperImageUrl from "@/assets/images/bug-zapper.png";
import atmosphyrSite from "@/assets/images/atmosphyr.png";
import irrigreenCostCalculatorSite from "@/assets/images/irrigreen-cost-calculator.png";
import weddingSite from "@/assets/images/wedding-site.png";
import staticTemplate from "@/assets/images/static-template.png";
import eaterGame from "@/assets/images/eater-game.png";
import monthlyAppSite from "@/assets/images/monthly-app.png";

export const projects: Project[] = [
  {
    projectKey: "this-website",
    title: "This Website",
    imageSrc: portfolioImageUrl,
    sourceUri: "https://github.com/JoelYoung01/PersonalWebsite",
    featured: true,
    tags: [
      TAGS.vue,
      TAGS.vite,
      TAGS.vuetify,
      TAGS.aws,
      TAGS.opsc,
      TAGS.spa,
      TAGS.mobile,
    ],
    description:
      "A Vue.js Single-Page application, built with Vite and styled with Vuetify. Deployed to AWS using CloudFront and S3.",
  },
  {
    projectKey: "recipe-db",
    title: "Recipe DB",
    imageSrc: recipeDbImageUrl,
    sourceUri: "https://github.com/JoelYoung01/RecipeDB",
    featured: true,
    tags: [
      TAGS.vue,
      TAGS.vite,
      TAGS.vuetify,
      TAGS.python,
      TAGS.opsc,
      TAGS.spa,
      TAGS.mobile,
    ],
    description:
      "A web app for storing and managing recipes, built using Vue.js + Vuetify with a Python backend.",
  },
  {
    projectKey: "play-4096",
    title: "Play 4096",
    imageSrc: play4096ImageUrl,
    sourceUri: "https://github.com/JoelYoung01/Play4096",
    featured: true,
    tags: [
      TAGS.sveltekit,
      TAGS.vite,
      TAGS.tailwind,
      TAGS.stripe,
      TAGS.opsc,
      TAGS.mobile,
      TAGS.node,
    ],
    description:
      "A simple recreation of a puzzle game I enjoy playing, built with SvelteKit and Tailwind CSS. Integrates with Stripe for payment processing.",
  },
  {
    projectKey: "atmosphyr",
    title: "Atmosphyr",
    imageSrc: atmosphyrSite,
    sourceUri: "",
    tags: [
      TAGS.vue,
      TAGS.vite,
      TAGS.vuetify,
      TAGS.python,
      TAGS.spa,
      TAGS.mobile,
      TAGS.stripe,
      TAGS.professional,
    ],
    description: "A platform for hosting and renting unique spaces and venues.",
  },
  {
    projectKey: "wedding-site",
    title: "Wedding Website",
    imageSrc: weddingSite,
    sourceUri: "",
    tags: [TAGS.vue, TAGS.vite, TAGS.vuetify, TAGS.spa, TAGS.mobile, TAGS.aws],
    description: "A website for my wedding!",
  },
  {
    projectKey: "cost-estimate-tool",
    title: "Cost Estimate Tool",
    imageSrc: costEstimateSiteUrl,
    sourceUri: "",
    tags: [TAGS.vue, TAGS.vite, TAGS.vuetify, TAGS.aws, TAGS.spa],
    description:
      "A tool to estimate the cost of a sod installation project based on the square footage of the area to be sodded. It is build with Vue.js and Vuetify, and is served via CDN on AWS.",
  },
  {
    projectKey: "greensight",
    title: "GreenSight",
    imageSrc: greensightImageUrl,
    sourceUri: "https://github.com/JoelYoung01/GreenSight",
    tags: [TAGS.vue, TAGS.vite, TAGS.vuetify, TAGS.aws, TAGS.spa, TAGS.opsc],
    description:
      "A web app that can take data about your garden and generate interesting reports about it.",
  },
  {
    projectKey: "time-tracking",
    title: "Time Tracking",
    imageSrc: timeTrackingSiteUrl,
    sourceUri: "",
    tags: [TAGS.vue, TAGS.vite, TAGS.vuetify, TAGS.supabase, TAGS.spa],
    description:
      "This is a time tracking application that allows users to track their time spent on various projects. It supports adding customers to projects, and can generate invoices based on time spent.",
  },
  {
    projectKey: "monthly-app",
    title: "Monthly App",
    imageSrc: monthlyAppSite,
    sourceUri: "https://github.com/JoelYoung01/MonthlyApp",
    tags: [TAGS.vue, TAGS.vite, TAGS.vuetify, TAGS.python, TAGS.spa, TAGS.opsc],
    description:
      "A web app for a challenge I started in January 2025 to build a new app every month.",
  },
  {
    projectKey: "craft-caddy",
    title: "Craft Caddy",
    imageSrc: craftCaddyImageUrl,
    sourceUri: "https://github.com/JoelYoung01/CraftCaddy",
    tags: [
      TAGS.vue,
      TAGS.vite,
      TAGS.vuetify,
      TAGS.python,
      TAGS.spa,
      TAGS.mobile,
      TAGS.opsc,
    ],
    description:
      "A web app for hobby project management, designed to help the hobbyist track their projects and materials and plan their next project.",
  },
  {
    projectKey: "bug-zapper",
    title: "Bug Zapper",
    imageSrc: bugZapperImageUrl,
    sourceUri: "https://github.com/JoelYoung01/BugZapper",
    tags: [
      TAGS.vue,
      TAGS.vite,
      TAGS.vuetify,
      TAGS.python,
      TAGS.spa,
      TAGS.mobile,
      TAGS.opsc,
    ],
    description:
      "A web app for hobby project management, designed to help the hobbyist track their projects and materials and plan their next project.",
  },
  {
    projectKey: "irrigreen-cost-calculator",
    title: "Irrigreen Cost Calculator",
    imageSrc: irrigreenCostCalculatorSite,
    sourceUri: "",
    tags: [
      TAGS.vue,
      TAGS.vite,
      TAGS.vuetify,
      TAGS.spa,
      TAGS.aws,
      TAGS.professional,
    ],
    description:
      "A static web app to help sales reps calculate the cost of an irrigation system.",
  },
  {
    projectKey: "static-template",
    title: "Static Template",
    imageSrc: staticTemplate,
    sourceUri: "",
    tags: [TAGS.vue, TAGS.vite, TAGS.vuetify, TAGS.aws, TAGS.spa, TAGS.static],
    description:
      "A template for static Vue.js SPAs, complete with GitHub actions CI/CD pipeline that deployes to AWS S3.",
  },
  {
    projectKey: "eater-game",
    title: "Eater Game",
    imageSrc: eaterGame,
    sourceUri: "",
    tags: [TAGS.java],
    description: "My first programming project! A simple game written in Java.",
  },
];
