<script >
  export default{
    name: 'Home'
  }
</script>

<template>
  <div class="home">
    <h1>欢迎来到首页</h1>
    <router-view></router-view>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
}
</style>
