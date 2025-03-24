import { createRouter, createWebHistory } from "vue-router";

import Users from "../views/Users.vue";
import AddUser from "../views/AddUser.vue";
import UpdateUser from "../views/UpdateUser.vue";
import SignIn from "../views/SignIn.vue";
import SignUp from "../views/SignUp.vue";

const routeHistory = createWebHistory();

const routes = [
  {
    path: "/users",
    name: "Users",
    component: Users,
  },
  {
    path: "/adduser",
    name: "AddUser",
    component: AddUser,
  },
  {
    path: "/updateuser/:userId",
    name: "UpdateUser",
    component: UpdateUser,
  },
  {
    path: "/signin",
    name: "SignIn",
    component: SignIn,
  },
  {
    path: "/signup",
    name: "SignUp",
    component: SignUp,
  },
  {
    path: "/",
    name: "Home",
    redirect: "/users", // Redirect to users or set a component
  },
];

const router = createRouter({
  history: routeHistory,
  routes,
});

export default router;
