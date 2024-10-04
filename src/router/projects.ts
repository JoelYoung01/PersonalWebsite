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
];

export default projectRoutes;
