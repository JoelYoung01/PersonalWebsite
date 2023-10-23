const projectRoutes = [
  {
    path: "map-draw-widget",
    name: "Map Drawing Widget POC",
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/Projects/MapDrawWidget.vue")
  }
];

export default projectRoutes;
