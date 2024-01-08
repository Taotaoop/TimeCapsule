import { createApp } from 'vue'
import Antd from 'ant-design-vue'
import App from './App'
import 'ant-design-vue/dist/reset.css';
import router from './router'
import VueDragscroll from 'vue-dragscroll'

const app = createApp(App);
app.use(router);
app.use(VueDragscroll)
app.use(Antd).mount('#app');