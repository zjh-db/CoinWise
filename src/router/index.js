import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/home/index.vue"),
    
  },
];

const routerHistory = createWebHistory();
const router = createRouter({
  history: routerHistory,
  routes,
});

export default router;
