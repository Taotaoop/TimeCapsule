<template>
  <div style="height: 100%">
    <div class="navbar">
      <div class="navbar-left">
        <img src="./assets/Logo.jpg" alt="Logo" class="logo" />
        <img src="./assets/LogoBanner.jpg" alt="Banner" class="banner" />
      </div>
      <div class="navbar-right">
        <UserOutlined
          @click="goToLogin"
          style="color: rgb(0, 0, 0); font-size: 200%"
        />
      </div>
    </div>

    <router-view></router-view>
  </div>
</template>

<script setup>
import { UserOutlined } from "@ant-design/icons-vue";
import { useRouter } from "vue-router";

const router = useRouter();

function goToLogin() {
  router.push({ name: "Login" });
}
</script>

<style scoped>
body {
  height: 100%;
}
.navbar {
  height: 90px;
  display: flex;
  align-items: center;
  background-color: #fcfeff;
  color: white;
  padding: 10px;
  justify-content: space-between;
}

.navbar-left {
  flex: 1;
}

.logo {
  width: 100px;
  height: auto;
}

.banner {
  width: 300px;
  height: auto;
}
.navbar-right {
  display: flex;
  align-items: center;
  size: 50px;
}
#app {
  height: 100%;
}
</style>
