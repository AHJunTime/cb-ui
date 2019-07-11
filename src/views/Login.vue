<template>
    <div>
      登录界面<br>
      账号:<el-input value="admin"></el-input>
      密码:<el-input value="123456"></el-input>
      <el-button type="primary" plain @click="doLogin">登录</el-button>
    </div>
</template>

<script>
    export default {
      name: "Login",
      methods : {
        doLogin(){
          if (1 == 1){
            this.$router.push('/test')  // 登录成功，跳转到主页
          }
        }
      }
    }
</script>

<style scoped>

</style>
