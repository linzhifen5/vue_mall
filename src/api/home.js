import axios from 'axios'

//获取幻灯片数据
export const getHomeSlider = () => {
  return axios.get('http://www.imooc.com/api/home/slider').then(res =>{
    console.log(res);
  })
}
