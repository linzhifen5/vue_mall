import Vue from 'vue'
import Router from 'vue-router'
// import Home from 'pages/home'
// import Category from 'pages/category'
// import Cart from 'pages/cart'
// import Personal from 'pages/personal'
// import Product from 'pages/product'

Vue.use(Router)

const routes = [
  {
    name: 'Home',
    path: '/home',
    component: () => import('pages/home'),
    children: [
      {
        name: 'home-product',
        path: 'product/:id',
        component: () => import('pages/product')
      }
    ]
  },
  {
    name: 'Category',
    path: '/Category',
    component: () => import('pages/category')
  },
  {
    name: 'Cart',
    path: '/cart',
    component: () => import('pages/cart')
  },
  {
    name: 'Personal',
    path: '/personal',
    component: () => import('pages/personal')
  },
  {
    path: '*',
    redirect: '/home'
  }
]

export default new Router({
  routes
})

