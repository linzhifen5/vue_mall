幕客网vue商城开发笔记

一、使用的技术知识：
a)Vue                     使用框架
b)Vue-router               路由
c)Vue-awesome-swiper     幻灯片
d)Vue-lazyload             懒加载
e)Axios                    ajacx 数据交互
f)Jsonp                   
g)Fastclick                 消除三百毫秒延时
h)Babel-polyfill             ES6 兼容ES5
i)Webpack                打包工具

二、项目开发
a)安装node  检测node -v
b)Cnpm 安装： npm install -g cnpm 淘宝镜像文件
$ npm install -g cnpm --registry=https://registry.npm.taobao.org

备注：安装cnpm 出现错误，一般是权限不足，使用sudo解决

C)  安装vue-cil 脚手架 
Cnpm install -g vue-cli    检测：vue -h

D)  建立项目  
Vue init webpack ProjectName

E)  运行vue
Cd xxxx   进入项目文件
Npm run dev

F)  手机链接vue项目文件
Mall--> config--> index.js
设置IP地址为0.0.0.0
通过ipconfig 查看本机ip，添加端口手机端开始访问

三、安装插件
a)cnpm install --save babel-polyfill fastclick      ES5兼容插件、300毫秒延时
b)cnpm install --save-dev node-sass sass-loader   SCSS运行插件

四、路由的重定向
{
    path: '*',
    redirect: '/home'
  }

五、路由的懒加载
{
    name: 'Personal',
    path: '/personal',
    component: () => import('pages/personal')
  },

2019/01/31 
轮播图可以添加上一个加载数据的界面，防止轮播图异常
添加页面：slider.vue if数据处


2019-2-5
推荐插件开发

1.安装jsonp库   cnpm install --save jsonp


2.jsonp 封装


3.list 推荐div布局

  /* 实现div内部图片位一个正方形显示技巧 */
    &-pic { /* 图片父元素 */
      position: relative;
      width: 100%;
      padding-top: 100%; /* padding-top 的高是相对于width 的。 */
      margin-bottom: 5px;
    }










