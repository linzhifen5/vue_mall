import axios from 'axios'
import jsonp from "../assets/js/jsonp";
import {jsonpOptions, SUCC_CODE, TIMEOUT, HOME_RECOMMEND_PAGE_SIZE} from "./config";
import {sliderOptions} from "../pages/home/config";

//打乱幻灯片数组的顺序
const shuffle = (arr) =>{
  const arrLength = arr.length;
  let i = arrLength;
  let rndNum;

  while (i--){
    if(i !== (rndNum = Math.floor(Math.random() * arrLength))){ //判断当前索引是否等于我们随机取的索引
      [arr[i],arr[rndNum]] = [arr[rndNum],arr[i]];  //如果不相等那就使用下面的交换机制进行索引和数值的交换
    }
  }

  return arr;
}

//获取幻灯片数据
export const getHomeSlider = () => {
  return axios.get('http://www.imooc.com/api/home/slider', {
    timeout: TIMEOUT
  }).then(res => {
    // console.log(res);
    if (res.data.code === SUCC_CODE) {
      let sliders = res.data.slider;
      //slider包含一个图片的数组
      const slider = [sliders[Math.floor(Math.random() * sliders.length)]]; //floor()取整数，Math.random()0-1的随机数，乘以总数量
      //这里使用概率的手段达到更新幻灯片数量和内容的效果
      sliders = shuffle(sliders.filter(() =>Math.random() >= 0.5)); //filter()遍历数组sliders里面的每一个值，返回符合括号里面运行函数要求的值
      if(sliders.length === 0){
        sliders = slider;//假如说只要一张图片的情况
      }
      return sliders;
      // return res.data.slider;
    }

    throw new Error('没有成功获取到数据');
  }).catch(err => {
    if (err) {
      console.log(err)
    }

    return [
      {
        linkUrl: 'https://www.imooc.com',
        picUrl: require('assets/img/404.png')
      }
    ]
  }).then(data => {  // 异步执行，then()前面的方法执行以后才执行then里面的方法，加载的时候使用
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(data);
      }, 1000);
    })
  })
};

// 获取热门推荐数据--jsonp
export const getHomeRecommend = (page = 1, psize = HOME_RECOMMEND_PAGE_SIZE) => {
  const url = 'https://ju.taobao.com/json/tg/ajaxGetItemsV2.json';
  const params = {
    page,
    psize,
    type: 0,
    forntCatId: ''
  }

  return jsonp(url, params, jsonpOptions).then(res => {
    if (res.code === '200') {
      return res;
    }

    throw new Error('没有获取数据')
  }).catch(err => {
    if (err) {
      console.log(err);
    }
  }).then(data => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(data);
      }, 1000)
    })
  })
}
