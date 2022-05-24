import DashboardViewVue from "@/views/DashboardView.vue";
import HomeViewVue from "@/views/HomeView.vue";
import LoginViewVue from "@/views/LoginView.vue";
import RegisterViewVue from "@/views/RegisterView.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeViewVue,
  },
  {
    path: "/login",
    name: "login",
    component: LoginViewVue,
  },
  {
    path: "/register",
    name: "register",
    component: RegisterViewVue,
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: DashboardViewVue,
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
