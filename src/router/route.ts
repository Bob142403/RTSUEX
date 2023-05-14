import HomeView from "../views/HomeView.vue";
import AddView from "../views/AddView.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: HomeView,
  },
  {
    path: "/add",
    component: AddView,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
