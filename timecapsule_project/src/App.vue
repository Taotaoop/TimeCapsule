<template>
  <div>
    <div class="navbar">
    <div class="navbar-left">
      <img src="./assets/Logo.jpg" alt="Logo" class="logo"/>
      <img src="./assets/LogoBanner.jpg" alt="Banner" class="banner"/>
      
    </div>
    Header
    <!-- 你可以继续在这里添加其他导航链接或元素 -->
  </div>
    
    <router-view></router-view>
  </div>
</template>

<script>
</script>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  background-color: #ffffff;
  color: white;
  padding: 10px;
}

.navbar-left {
  flex: 1;
}

.logo {
  width: 100px; /* 根据实际需要调整大小 */
  height: auto;
}

.banner {
  width: 300px; /* 根据实际需要调整大小 */
  height: auto;
}
</style>
