import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
    redirect: "/editor",
  },
  {
    path: "/editor",
    name: "Editor",
    component: () =>
      import(/* webpackChunkName: "editor" */ "../views/Editor.vue"),
  },
  {
    path: "/community",
    name: "Community",
    component: () =>
      import(/* webpackChunkName: "community" */ "../views/Community.vue"),
  },
  {
    path: "/project/:id",
    name: "ProjectDetail",
    component: () =>
      import(
        /* webpackChunkName: "project-detail" */ "../views/ProjectDetail.vue"
      ),
  },
  {
    path: "/search",
    name: "Search",
    meta: {
      search: true,
    },
    component: () =>
      import(/* webpackChunkName: "community" */ "../views/Community.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
