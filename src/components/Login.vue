<script >
  export default{
    name: 'Login',
    methods: {
      goHome(){
        this.$router.push('/article')
      }
    },
    mounted(){
      this.$request.get('/login',{name:'Erika'},{mock:true,loading:true})
      .then((res)=> {
        console.log(res);
      })
    }
  }
</script>

<template>
  <div class="login">
    <h1>欢迎来到登录页</h1>
    <el-button @click="goHome">去文章页</el-button>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
}
</style>
