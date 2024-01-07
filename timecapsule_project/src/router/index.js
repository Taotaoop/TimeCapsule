
import { createRouter, createWebHashHistory } from 'vue-router'
import Home from "@/components/Home.vue";
import About from "@/components/About.vue";
import Login from "@/components/Login.vue"
import Signup from "@/components/Signup.vue"
const routes = [
      {
        path: "/",
        name: "Home",
        component: Home,
      },
      {
        path: "/about",
        name: "About",
        component: About,
      },
      {
        path: "/login",
        name: "Login",
        component: Login,
      },
      {
        path: "/signup",
        name: "Signup",
        component: Signup,
      },
    ];

const router = createRouter({
    history:createWebHashHistory(),
    routes,
})

export default router