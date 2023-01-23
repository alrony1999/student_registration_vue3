import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import AdminDashboard from "../views/Admin/Dashboard.vue";
import store from "../store/index.js";
const routes = [
  // {
  //   path: "/",
  //   name: "home",
  //   component: Home,
  // },
  {
    path: "/login",
    name: "login",
    alias: "/",
    component: Login,
    meta: {
      requiresGuest: true,
    },
  },
  {
    path: "/register",
    name: "register",
    component: Register,
    meta: {
      requiresGuest: true,
    },
  },
  {
    path: "/admin-dashboard",
    name: "adminDashboard",
    component: AdminDashboard,
    meta: {
      requiresAuth: true,
    },
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !store.state.user.token) {
    next({ name: "login" });
  } else if (to.meta.requiresGuest && store.state.user.token) {
    next({ name: "adminDashboard" });
  } else {
    next();
  }
});
export default router;
