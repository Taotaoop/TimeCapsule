import { createApp } from 'vue'
import Antd from 'ant-design-vue'
import App from './App'
import 'ant-design-vue/dist/reset.css';
import { createRouter, createWebHashHistory } from 'vue-router'
import Home from "@/components/Home.vue";
import About from "@/components/About.vue";

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
    ];

const router = createRouter({
    history:createWebHashHistory(),
    routes,
})
const app = createApp(App);
app.use(router);
app.use(Antd).mount('#app');