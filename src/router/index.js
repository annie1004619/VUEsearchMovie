import { createRouter, createWebHistory } from "vue-router";
import MainPage from "../views/MainPage";
import SearchPage from "../views/SearchPage";

const routes = [
  {
    path: "/",
    name: "Home",
    component: MainPage,
  },
  {
    path: "/search/:title",
    name: "Search",
    component: SearchPage,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
