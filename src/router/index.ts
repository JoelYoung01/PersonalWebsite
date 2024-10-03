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

export default router;
