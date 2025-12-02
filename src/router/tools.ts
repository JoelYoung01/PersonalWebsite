import ToolsHome from "../views/Tools/ToolsHome.vue";
import HorseScore from "../views/Tools/HorseScore.vue";

const routes = [
  {
    path: "home",
    name: "Tools Home",
    component: ToolsHome,
  },
  {
    path: "horse-score",
    name: "Horse Score",
    component: HorseScore,
  },
];

export default routes;
