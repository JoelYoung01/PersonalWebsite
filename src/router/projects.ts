const projectRoutes = [
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
    redirect: "https://recipe-db.joelyoung.dev/home",
  },
  {
    path: "play-4096",
    name: "Play 4096",
    redirect: "https://play-4096.com",
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
    redirect: "https://monthly-app.joelyoung.dev",
  },
  {
    path: "craft-caddy",
    name: "Craft Caddy",
    redirect: "https://craft-caddy.joelyoung.dev",
  },
  {
    path: "bug-zapper",
    name: "Bug Zapper",
    redirect: "https://bug-zapper.joelyoung.dev",
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
