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


    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="1">处理中心</el-menu-item>
      <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3" disabled>消息中心</el-menu-item>
      <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
    </el-menu>

    <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal"  @select="handleSelect"
             background-color="#545c64" text-color="#fff"active-text-color="#ffd04b">
      <el-menu-item v-for="(menu, index) in evglSiteMenuList" :index="index">
        {{menu.name}} {{index}}
        <el-submenu v-for="(childMenu, childIndex) in evglSiteMenuchildListList">
          <template slot="title">我的工作台</template>
          <el-menu-item v-if="childMenu.parentId == menu.menuId" :index="index">{{childMenu.name}}</el-menu-item>
        </el-submenu>
      </el-menu-item>
    </el-menu>

  </div>
</template>

<script>
  export default {
    name: "Index",
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        evglSiteMenuList : [],
        evglSiteMenuchildListList : [],
      };
    },
    methods : {
      doLogin(){
        this.$router.push("/login");
      },

      getInitMenu(){
        this.$api.login.getInitMenu().then((res) => {
          console.log(res);
          if (res.code == 0){
            this.evglSiteMenuList = res.data.evglSiteMenuList;
            this.evglSiteMenuchildListList = res.data.evglSiteMenuchildListList
          }
        });
      },

      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },

    },
    mounted() {
      this.getInitMenu();
    }
  }
</script>

<style scoped>

</style>
