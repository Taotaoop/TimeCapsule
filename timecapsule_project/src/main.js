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
  // ��ȡ�û���¼�ɹ���洢�ĵ�¼��־
  let getFlag = localStorage.getItem("Flag");
  // �����¼��־������ΪisLogin,���û��ѵ�¼
  if (getFlag === "isLogin") {
    // ����vuex��¼״̬Ϊ�ѵ�¼
    store.state.isLogin = true;
    next();
    // ����ѵ�¼�����е�¼ע��ҳ�棬�������ҳ
    if (!to.meta.isLogin) {
      this.$message.error("�����˳���¼");
      next({ path: "/" });
    }
    // �����¼��־�����ڣ���δ��¼
  } else {
    // �û��������Ҫ��¼��ҳ�棬����ص�¼ҳ��
    if (to.meta.isLogin) {
      next({ path: "/login" });
      this.$message.info("���ȵ�¼");
      // �û����������¼�Ľ��棬����ת����
    } else {
      next();
    }
  }
});

