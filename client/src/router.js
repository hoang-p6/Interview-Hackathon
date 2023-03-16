import { createWebHistory, createRouter } from "vue-router";

const routes = [{ path: "/", component: HomePage, name: "HomePage" }];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
