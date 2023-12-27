import { createApp } from 'vue';
import Antd from 'ant-design-vue';
import App from './App';
//import router from './router';
import 'ant-design-vue/dist/reset.css';

const app = createApp(App);

app.use(Antd).mount('#app');
app.use(router).mount('#app');