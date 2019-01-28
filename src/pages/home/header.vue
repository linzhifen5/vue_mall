<template>
    <me-navbar class="header" title="titlejdfjsdjfijfijidjfjsdfjisdjijsdijfis">
      <!--<i class="iconfont icon-scan" slot="left"></i>-->
      <!--<div slot="center">搜索框</div>-->
      <i class="iconfont icon-msg" slot="right"></i>
    </me-navbar>
</template>

<script>
  import MeNavbar from 'base/navbar/index';

  export default {
    name: "HomeHeader",
    components:{
      MeNavbar
    }
  }
</script>

<style scoped>
  .header{
    background: white;
  }
</style>
