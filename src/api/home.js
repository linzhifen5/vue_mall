import axios from 'axios'
import {SUCC_CODE, TIMEOUT} from "./config";
import jsonp from "../assets/js/jsonp";

//获取幻灯片数据
export const getHomeSlider = () => {
  return axios.get('http://www.imooc.com/api/home/slider', {
    timeout: TIMEOUT
  }).then(res => {
    // console.log(res);
    if (res.data.code === SUCC_CODE) {
      return res.data.slider;
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
export const getHomeRecommend = (page = 1, psize = 20) => {
  const url = 'https://ju.taobao.com/json/tg/ajaxGetItemsV2.json';
  const params = {
    page,
    psize,
    type: 0,
    forntCatId: ''
  }

  return jsonp(url, params, {
    param: 'callback'
  }).then(res =>{
    console.log(res)
  })
}
