import { createRouter, createWebHistory } from "vue-router";

import HelloWorld from "../components/HelloWorld.vue";
import Home from "../views/Home.vue";
import Practice01 from "../views/Practice01.vue";

const routerHistory = createWebHistory();

const routes = [
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/hello",
    name: "HelloWorld",
    component: HelloWorld,
  },
  {
    path: "/:catchAll(.*)",
    redirect: "/home",
  },
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/practice1",
    name: "Practice01",
    component: Practice01,
  },
];

const router = createRouter({
  history: routerHistory,
  routes,
});

export default router;
