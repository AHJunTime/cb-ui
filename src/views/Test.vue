<template>
    <div>测试界面
      <el-button type="primary" plain @click="show">查询</el-button>
    </div>
</template>

<script>
    export default {
      name: "Test",
      methods : {
        show(){
          this.$api.myindex.showmain({}).then((res) => {
            console.log(res);
          });
        }
      },
      mounted() {

      }
    }
</script>

<style scoped>

</style>
