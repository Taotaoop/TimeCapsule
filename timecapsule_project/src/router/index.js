import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      isLogin: true,
    },
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/Login.vue"),
    meta: {
      isLogin: false,
    },
  },
  {
    path: "/signup",
    name: "signup",
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/Signup.vue"),
    meta: {
      isLogin: false,
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
