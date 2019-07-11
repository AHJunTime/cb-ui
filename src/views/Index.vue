<template>
  <div>
    AHJunTime 这是一个首页
    <el-tag>标签一</el-tag>
    <el-tag type="success">标签二</el-tag>
    <el-tag type="info">标签三</el-tag>
    <el-tag type="warning">标签四</el-tag>
    <el-tag type="danger">标签五</el-tag>
    <br/><br/><br/>
    <el-button type="primary" plain @click="doLogin">登录</el-button>
  </div>
</template>

<script>
  export default {
    name: "Index",
    methods : {
      doLogin(){
        this.$router.push("/login");
      }
    }
  }
</script>

<style scoped>

</style>
