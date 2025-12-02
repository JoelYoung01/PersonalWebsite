import HomePage from "../views/HomePage.vue";
import ErrorPage from "../views/ErrorPage.vue";
import ResumePdf from "../views/ResumePdf.vue";
import AboutMe from "../views/AboutMe.vue";
import ProjectDetails from "../views/ProjectDetails.vue";
import ProjectGallery from "../views/Projects/ProjectGallery.vue";

import projectRoutes from "./projects";
import toolRoutes from "./tools";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/about",
    name: "about",
    component: AboutMe,
  },
  {
    path: "/projects",
    name: "projects",
    component: ProjectGallery,
  },
  {
    path: "/project",
    name: "Project Details",
    children: projectRoutes,
    component: ProjectDetails,
  },
  {
    path: "/tools",
    name: "tools",
    children: toolRoutes,
    redirect: "/tools/home",
  },
  {
    path: "/resume",
    name: "resume",
    component: ResumePdf,
  },

  // Catch-all path for 404 page
  { path: "/:pathMatch(.*)*", component: ErrorPage },
];

export default routes;
