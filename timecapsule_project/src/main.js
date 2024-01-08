import { createApp } from 'vue'
import Antd from 'ant-design-vue'
import App from './App'
import 'ant-design-vue/dist/reset.css';
import router from './router'
import VueDragscroll from 'vue-dragscroll'
import store from './store'

const app = createApp(App).use(router).use(store);
app.use(router);
app.use(VueDragscroll)
app.use(Antd).mount('#app');

router.beforeEach((to, from, next) => {
  // 获取用户登录成功后存储的登录标志
  let getFlag = localStorage.getItem("Flag");
  // 如果登录标志存在且为isLogin,即用户已登录
  if (getFlag === "isLogin") {
    // 设置vuex登录状态为已登录
    store.state.isLogin = true;
    next();
    // 如果已登录，进行登录注册页面，则定向会首页
    if (!to.meta.isLogin) {
      this.$message.error("请先退出登录");
      next({ path: "/" });
    }
    // 如果登录标志不存在，即未登录
  } else {
    // 用户想进入需要登录的页面，则定向回登录页面
    if (to.meta.isLogin) {
      next({ path: "/login" });
      this.$message.info("请先登录");
      // 用户进入无需登录的界面，则跳转继续
    } else {
      next();
    }
  }
});

