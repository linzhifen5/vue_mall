<template>
  <swiper :options="swiperOption">
    <slot></slot>
    <div class="swiper-pagination" v-if="pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
  import {swiper, swiperSlide} from 'vue-awesome-swiper';

  export default {
    name: "MeSlider",
    components: {
      swiper,
      swiperSlide
    },
    props: {
      direction: {
        type: String,
        default: 'horizontal',
        validator() {
          return [
            'horizontal',
            'vertical'
          ].indexof(value) > -1
        }
      },
      interval: {
        type: Number,
        default: 3000,
        validator(value) {
          return value >= 0;
        }
      },
      loop: {
        type: Boolean,
        default: true
      },
      pagination: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        swiperOption: {
          watchOverflow: true,
          direction: this.direction,
          autopalay: this.interval ? {
            delay: this.interval,
            disableOnInteraction: false
          } : false,
          slidesPerView: 1,
          loop: this.loop,
          pagination: {
            el: this.pagination ? '.swiper-pagination' : null
          }
        }
      }
    }

  }
</script>

<style scoped>

</style>
