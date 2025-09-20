import {
  createRouter,
  createWebHistory,
  type RouterScrollBehavior,
} from "vue-router";
import routes from "./routes";

/**
 * Scroll Behavior
 */
const scrollBehavior: RouterScrollBehavior = (to) => {
  if (to.hash) {
    return {
      el: to.hash,
      top: 150,
      behavior: "smooth",
    };
  }
};

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior,
});

router.beforeEach((to, from, next) => {
  if (to.path.match(/^\/http/)) {
    window.open(to.path.slice(1), "_blank");
    // Cancel navigation in the current tab
    next(false);
  } else {
    next();
  }
});

export default router;
