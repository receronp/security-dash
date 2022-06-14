import DashboardViewVue from "@/views/DashboardView.vue";
import ReportViewVue from "@/views/ReportView.vue";
import HomeViewVue from "@/views/HomeView.vue";
import LoginViewVue from "@/views/LoginView.vue";
import RegisterViewVue from "@/views/RegisterView.vue";
import LogoutViewVue from "../views/LogoutView.vue";
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
    path: "/reports",
    name: "reports",
    component: ReportViewVue,
  },
  {
    path: "/logout",
    name: "logout",
    component: LogoutViewVue,
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
