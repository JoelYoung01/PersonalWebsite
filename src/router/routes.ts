import HomePage from "../views/HomePage.vue";
import ErrorPage from "../views/ErrorPage.vue";

import projectRoutes from "./projects";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/AboutMe.vue")
  },
  {
    path: "/projects",
    name: "projects",
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/ProjectsPage.vue")
  },
  {
    path: "/project",
    name: "project details",
    children: projectRoutes,
    component: () => import("../views/ProjectDetails.vue")
  },
  // Catch-all path for 404 page
  { path: "/:pathMatch(.*)*", component: ErrorPage }
];

export default routes;
