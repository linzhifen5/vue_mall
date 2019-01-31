import axios from 'axios'
import {SUCC_CODE,TIMEOUT} from "./config";

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
      setTimeout(()=> {
        resolve(data);
      },1000);
    })
  })
};
