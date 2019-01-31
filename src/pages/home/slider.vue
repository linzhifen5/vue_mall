<template>
  <div class="slider-wrapper">
    <me-slider
      :direction="direction"
      :loop="loop"
      :interval="interval"
      :pagination="pagination"
      v-if="sliders.length" 
    >
      <swiper-slide v-for="(item,index) in sliders" :key="index">
        <a :href="item.linkUrl" class="slider-link">
          <img :src="item.picUrl" alt class="slider-img">
        </a>
      </swiper-slide>
    </me-slider>
  </div>
</template>

<script>
import MeSlider from "base/slider";
import { swiperSlide } from "vue-awesome-swiper";
import { sliderOptions } from "./config";
import { getHomeSlider } from "../../api/home";

export default {
  name: "HomeSlider",
  components: {
    swiperSlide,
    MeSlider
  },
  data() {
    return {
      direction: sliderOptions.direction,
      loop: sliderOptions.loop,
      interval: sliderOptions.interval,
      pagination: sliderOptions.pagination,
      sliders: [
        // {
        //   linkUrl: "javascript:val(0)",
        //   picUrl: require("./2.jpg")
        // },
        // {
        //   linkUrl: "javascript:val(0)",
        //   picUrl: require("./2.jpg")
        // },
        // {
        //   linkUrl: "javascript:val(0)",
        //   picUrl: require("./3.jpg")
        // },
        // {
        //   linkUrl: "javascript:val(0)",
        //   picUrl: require("./4.jpg")
        // }
      ]
    };
  },
  created() {
    this.getSliders();
  },
  methods: {
    getSliders() {
      getHomeSlider().then(data => {
        // console.log(data)
        this.sliders = data;
      });
    }
  }
};
</script>

<style scoped>
.slider-wrapper {
  height: 183px;
}

.slider-link {
  display: block;
}

.slider-link,
.slider-img {
  width: 100%;
  height: 100%;
}
</style>
