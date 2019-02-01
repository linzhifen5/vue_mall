<template>
  <div class="home">
    <header class="g-header-container">
      <home-header/>
    </header>
    <me-scroll>
      <home-slider/>
      <home-nav/>
    </me-scroll>
    <div class="g-backtop-container"></div>
    <router-view></router-view>
  </div>
</template>

<script>
  import HomeHeader from './header';
  import HomeSlider from './slider';
  import MeSlider from "../../base/slider/index";
  import MeScroll from "../../base/scroll/index";
  import HomeNav from "./nav";

  export default {
    name: "Home",
    components: {
      MeScroll,
      MeSlider,
      HomeHeader,
      HomeSlider,
      HomeNav
    }
  }
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";

  .home {
    overflow: hidden;
    width: 100%;
    height: 100%;
    background-color: $bgc-theme;
  }
</style>
