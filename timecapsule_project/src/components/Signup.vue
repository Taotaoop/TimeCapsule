<template>
  <div class="container">
    <div class="left">
      <div class="header">
        <h2 class="animation a1">Sign Up</h2>
        <h4 class="animation a2">Your journey starts here</h4>
      </div>
      <div class="form">
        <a-form
          :model="formState"
          name="normal_login"
          class="login-form"
          :validate-messages="validateMessages"
          @finish="onFinish"
          @finishFailed="onFinishFailed"
        >
          <a-form-item
            :name="['user', 'username']"
            :rules="[
              { required: true, message: 'username is required!' },
              { whitespace: true },
            ]"
          >
            <span slot="label" class="inform-text">Username</span>
            <a-input v-model:value="formState.user.username">
              <template #prefix>
                <UserOutlined class="site-form-item-icon" />
              </template>
            </a-input>
          </a-form-item>
          <a-form-item
            :name="['user', 'email']"
            :rules="[
              { type: 'email', message: 'Please enter a valid email address.' },
              { required: true, message: 'email is required!' },
            ]"
          >
            <span slot="label" class="inform-text">Email</span>
            <a-input v-model:value="formState.user.email" />
          </a-form-item>

          <a-form-item
            :name="['user', 'password']"
            :rules="[
              { required: true, message: 'password is required!' },
              { whitespace: true },
              { validator: validatePassword },
            ]"
          >
            <span slot="label" class="inform-text">Password</span>
            <a-input-password v-model:value="formState.user.password">
              <template #prefix>
                <LockOutlined class="site-form-item-icon" />
              </template>
            </a-input-password>
          </a-form-item>
          <a-form-item
            :name="['user', 'reEnterPassword']"
            :rules="[
              { required: true, message: 'Please input your password again!' },
              {
                validator: validateReEnterPassword,
              },
            ]"
          >
            <span slot="label" class="inform-text">Re-enter Password</span>
            <a-input-password v-model:value="formState.user.reEnterPassword">
              <template #prefix>
                <LockOutlined class="site-form-item-icon" />
              </template>
            </a-input-password>
          </a-form-item>

          <a-form-item class="verification-code">
            <a-input-group compact>
              <span slot="label" class="Verification Code"
                >Verification Code</span
              >
              <a-input
                style="width: calc(100% - 100px)"
                v-model:value="formState.user.verificationCode"
                placeholder="Enter code"
              />
              <a-button
                style="width: 100px"
                :disabled="!isButtonActive"
                @click="sendCode"
              >
                {{ buttonText }}
              </a-button>
            </a-input-group>
          </a-form-item>

          <a-form-item>
            <a-space>
              <a-button
                type="primary"
                html-type="submit"
                class="login-form-button"
              >
                Sign up
              </a-button>

              <a-space>
                <span class="inform-text">Or</span>
              </a-space>
              <a href="">Log in now!</a>
            </a-space>
          </a-form-item>
        </a-form>
      </div>
    </div>
    <div class="right"></div>
  </div>
</template>
    
    <script setup>
import { reactive, ref, computed, watch } from "vue";
import {
  Form,
  Input,
  Checkbox,
  Button,
  Row,
  Col,
  message,
} from "ant-design-vue";
import { UserOutlined, LockOutlined } from "@ant-design/icons-vue";

// 表单数据
const formState = reactive({
  user: {
    username: "test",
    password: "123123123A",
    reEnterPassword: "123123123A",
    email: "1@qq.com",
  },
});
// const validateMessages = {
//   required: "${label} is required!",
//   types: {
//     email: "Please enter a valid email address.",
//   },
//   date: {
//     format: "'${name}' is invalid for format date",
//     parse: "'${name}' could not be parsed as date",
//     invalid: "'${name}' is invalid date",
//   },
//   whitespace: "Name cannot be empty",
// };

//validating password
const validatePassword = (rule, value) => {
  if (!value) {
    return Promise.reject("Please input your password!");
  }
  if (value.length < 8) {
    return Promise.reject("Password must be at least 8 characters");
  }
  if (!/[A-Z]/.test(value)) {
    return Promise.reject(
      "Password must contain at least one uppercase letter"
    );
  }
  return Promise.resolve();
};
const validateReEnterPassword = (rule, value) => {
  if (formState.user.password !== value) {
    return Promise.reject("Passwords do not match!");
  }
  return Promise.resolve();
};
//verification code
// 验证码发送逻辑
const isButtonActive = ref(true); // 控制按钮是否可用
const countdown = ref(60); // 设置倒计时时间
const buttonText = computed(() =>
  isButtonActive.value ? "Send Code" : `${countdown.value}s`
);
//const isEmailValid = ref(false);
// watch(() => formState.user.email, (newEmail) => {
//   // Perform email validation here if needed
//   console.log(formState.value.validator((["user.email"])));
//   //formState.value.isEmailValid;
//   console.log(newEmail)
// });
// const isEmailValid = computed(() => {
//   const a = formState.value.validateFields(["user.email"]);
//   // 这里使用一个简单的电子邮件正则表达式，你可以根据需要使用更严格的验证
//   //   const emailPattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
//   console.log(a);
//   return a;
// });

function sendCode() {
  if (isButtonActive.value ) {
    // 发送验证码逻辑，比如通过API发送验证码到用户邮箱
    // 这里简化处理，仅做倒计时效果
    isButtonActive.value = false;
    let timer = setInterval(() => {
      if (countdown.value > 0) {
        countdown.value--;
      } else {
        isButtonActive.value = true;
        countdown.value = 60;
        clearInterval(timer);
      }
    }, 1000);
  }
}

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
    