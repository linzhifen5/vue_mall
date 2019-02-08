<template>
  <swiper :options="swiperOption" ref="swiper">
    <div class="mine-scroll-pull-down" v-if="pullDown">
      <me-loading :text="pullDownText" inline></me-loading>
    </div>
    <swiper-slide>
      <slot></slot>
    </swiper-slide>
    <div class="swiper-scrollbar" v-if="scrollbar" slot="scrollbar"></div>
  </swiper>
</template>

<script>
  import {swiper, swiperSlide} from 'vue-awesome-swiper';
  import MeLoading from 'base/loading';
  import {
    PULL_DOWN_HEIGHT,
    PULL_DOWN_TEXT_INIT,
    PULL_DOWN_TEXT_END,
    PULL_DOWN_TEXT_ING,
    PULL_DOWN_TEXT_START,
    PULL_DOWN_HEIGHI
  }from './config'

  export default {
    name: "MeScroll",
    components: {
      swiper,
      swiperSlide,
      MeLoading
    },
    props: {
      scrollbar: {
        type: Boolean,
        default: true,
      },
      data: {
        type: [Array, Object]
      },
      pullDown: {
        type: Boolean,
        default: false,
      }
    },
    data() {
      return {
        pullDownText: '继续下拉，刷新页面……',
        swiperOption: {
          direction: 'vertical',
          slidesPerView: 'auto',
          freeMode: true,  // 取消一次只能滚一次
          setWrapperSize: true,
          scrollbar: {
            el: this.scrollbar ? '.swiper-scrollbar' : null,
            hide: true
          },
          on: {  // swiper 内置函数
            sliderMove: this.scroll
          }
        }
      }
    },
    watch: {
      data() {
        this.update();
      }
    },
    methods: {
      update() {
        this.$refs.swiper && this.$refs.swiper.swiper.update()
      },

      scroll(){
        const swiper = this.$refs.swiper.swiper;

        if(swiper.translate > 0){  // 假如已经进行了下拉操作
          if(swiper.translate > PULL_DOWN_HEIGHI){
            this.pullDownText = '111111'
          }
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .swiper-container {
    overflow: hidden;
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    height: auto;
  }

  .mine-scroll-pull-down {
    position: absolute;
    left: 0;
    bottom: 100%;
    width: 100%;
    height: 80px;
  }
</style>
