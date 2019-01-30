<template>
    <me-navbar class="header" title="">
      <i class="iconfont icon-scan" slot="left"></i>
      <div slot="center">搜索框</div>
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

<style lang="scss" scoped>
  @import "~assets/scss/mixins";

  .header{
    &.mine-navbar{
       /*background-color: transparent;*/
      background-color: rgba(0,0,0,0.1);
      color: white;
     }
  }
</style>
