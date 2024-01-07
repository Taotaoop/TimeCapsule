<template>
  <div class="container">
    <div class="left">
      <div class="header">
        <h2 class="animation a1">Welcome</h2>
        <h4 class="animation a2">
          Log in to your account using email and password
        </h4>
      </div>
      <div class="form">
        <a-form
          :model="formState"
          name="normal_login"
          class="login-form"
          @finish="onFinish"
          @finishFailed="onFinishFailed"
        >
          <a-form-item
            name="username"
            :rules="[
              { required: true, message: 'Please input your username!' },
              { whitespace: true, message: 'Username can\'t be empty' },
            ]"
          >
            <span slot="label" class="inform-text">Username</span>
            <a-input v-model:value="formState.username">
              <template #prefix>
                <UserOutlined class="site-form-item-icon" />
              </template>
            </a-input>
          </a-form-item>

          <a-form-item
            name="password"
            :rules="[
              { required: true, message: 'Please input your password!' },
            ]"
          >
            <span slot="label" class="inform-text">Password</span>
            <a-input-password v-model:value="formState.password">
              <template #prefix>
                <LockOutlined class="site-form-item-icon" />
              </template>
            </a-input-password>
          </a-form-item>

          <a-form-item>
            <a-space :size="150">
              <a-checkbox v-model:checked="formState.remember"
                >Remember me</a-checkbox
              >
              <a class="login-form-forgot" href="">Forgot password?</a>
            </a-space>
          </a-form-item>

          <a-form-item>
            <a-space>
              <a-button
                type="primary"
                html-type="submit"
                class="login-form-button"
              >
                Log in
              </a-button>

              <a-space>
                <span class="inform-text">Or</span>
              </a-space>
              <a @click="goToSignup">register now!</a>
            </a-space>
          </a-form-item>
        </a-form>
      </div>
    </div>
    <div class="right"></div>
  </div>
</template>
  
  <script setup>
  // Login Module
import { reactive } from "vue";
import { Form, Input, Checkbox, Button, Row, Col } from "ant-design-vue";
import { UserOutlined, LockOutlined } from "@ant-design/icons-vue";
import { useRouter } from "vue-router";

// 表单数据
const formState = reactive({
  username: "",
  password: "",
  remember: false,
});

// 提交表单
const onFinish = (values) => {
  console.log("Success:", values);
  // 实现登录逻辑
};

// 提交失败
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
  // 可以在这里显示一些错误信息
};
const router = useRouter();
function goToSignup(){
  router.push({ name: "Signup"});
}
// Sign up Module
</script>
  
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,400;0,500;0,600;0,700;1,100&display=swap");

.container {
  display: flex;
  height: 100vh;
  min-width: 480px;
}
.left {
  flex: 0 0 auto; /* 不允许伸缩 */
  /* width: 600px; */
  min-width: 520px;
  max-width: 50%; /*最大宽度为50% */
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  animation-name: left;
  animation-duration: 1s;
  animation-fill-mode: both;
  animation-delay: 1s;
}

.right {
  flex: 1;
  background-color: rgb(101, 110, 236);
  border-radius: 24px;
  transition: 1s;
  animation-name: move;
  animation-duration: 1s;
  animation-fill-mode: both;
  animation-delay: 0.5s;
  background-image: url("../assets/Login1.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.header > h2 {
  margin: 0;
  font-size: 22px;
  color: #4f46a5;
  font-family: "Poppins", sans-serif;
}

.header > h4 {
  margin-top: 10px;
  font-weight: normal;
  font-size: 18px;
  color: rgba(0, 0, 0, 0.4);
  font-family: "Poppins", sans-serif;
}
.form *,
.inform-text {
  font-family: "Poppins", cursive;
  font-size: 14px;
}
.form {
  max-width: 100%;
  display: flex;
  flex-direction: column;
}
.login-form-button {
  padding: 0px 40px; /* 增加内填充来增大按钮 */

  font-size: 22px; /* 增加字体大小 */
  background: linear-gradient(
    to right,
    #498ef6,
    #1626fb,
    #0066ff
  ); /* 渐变色从左到右 */
  color: white; /* 按钮文字颜色 */
}

.animation {
  animation-name: move;
  animation-duration: 0.4s;
  animation-fill-mode: both;
  animation-delay: 1.5s;
}

.a1 {
  animation-delay: 1.5s;
}

.a2 {
  animation-delay: 1.6s;
}

@keyframes move {
  0% {
    opacity: 0;
    visibility: hidden;
    transform: translateY(-40px);
  }
  100% {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
}
@keyframes left {
  0% {
    opacity: 0;
    width: 0;
  }
  100% {
    opacity: 1;
    padding: 30px 50px;
    width: 440px;
  }
}
</style>
  