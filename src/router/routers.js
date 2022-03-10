import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      component: () => import("../pages/login.vue"),
    },
    {
      path: "/Ramenitems",
      component: () => import("../pages/Ramenitems.vue"),
    },
    {
      path: "/shopInfo",
      component: () => import("../pages/shopInfo.vue"),
    },
    // {
    //   path: "/zihanki",
    //   component: () => import("../pages/zihanki.vue"),
    // }
  ]
});
export default router;