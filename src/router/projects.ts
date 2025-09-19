const projectRoutes = [
  {
    path: "map-draw-widget",
    name: "Map Drawing Widget POC",
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/Projects/MapDrawWidget.vue"),
  },
  {
    path: "cost-estimate-tool",
    name: "Cost Estimate Tool",
    component: () => import("../views/Projects/CostEstimateTool.vue"),
  },
  {
    path: "this-website",
    name: "This Website",
    component: () => import("../views/Projects/ThisWebsite.vue"),
  },
  {
    path: "greensight",
    name: "GreenSight",
    component: () => import("../views/Projects/GreenSight.vue"),
  },
  {
    path: "time-tracking",
    name: "Time Tracking",
    component: () => import("../views/Projects/TimeTracking.vue"),
  },
  {
    path: "recipe-db",
    name: "Recipe DB",
    redirect: "https://github.com/JoelYoung01/RecipeDB",
  },
  {
    path: "play-4096",
    name: "Play 4096",
    redirect: "https://github.com/JoelYoung01/Play4096",
  },
  {
    path: "atmosphyr",
    name: "Atmosphyr",
    redirect: "https://atmosphyr.app",
  },
  {
    path: "wedding-site",
    name: "Wedding Site",
    redirect: "https://wedding.joelyoung.dev",
  },
  {
    path: "monthly-app",
    name: "Monthly App",
    redirect: "https://github.com/JoelYoung01/MonthlyApp",
  },
  {
    path: "craft-caddy",
    name: "Craft Caddy",
    redirect: "https://github.com/JoelYoung01/CraftCaddy",
  },
  {
    path: "bug-zapper",
    name: "Bug Zapper",
    redirect: "https://github.com/JoelYoung01/BugZapper",
  },
  {
    path: "irrigreen-cost-calculator",
    name: "Irrigreen Cost Calculator",
    redirect: "https://irrigreen-cost-calculator.sodsmith.com",
  },
  {
    path: "static-template",
    name: "Static Template",
    redirect: "https://github.com/JoelYoung01/VueStaticSiteTemplate",
  },
  {
    path: "eater-game",
    name: "Eater Game",
    redirect: "https://github.com/JoelYoung01/EaterGame",
  },
];

export default projectRoutes;
