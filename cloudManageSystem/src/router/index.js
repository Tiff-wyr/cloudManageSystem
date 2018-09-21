import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const components={
  login:()=>import('../views/login/login'),
  layout:()=>import('../views/layout/layout'),
  index:()=>import('../views/index/index'),
  user:()=>import('../views/user/user'),
  addUser:()=>import('../views/addUser/addUser'),
  changeUser:()=>import('../views/changeUserInfo/changeUser'),
  categoryList:()=>import('../views/categoryList/categoryList'),
  addCategory:()=>import('../views/addCategory/addCategory'),
  detailCategory:()=>import('../views/detailCategory/detailCategory'),
  getViewpager:()=>import('../views/getViewpager/getViewpager'),
  addViewpager:()=>import('../views/addViewpager/addViewpager'),
}

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/login'
    },
    {
      path: '/login',
      component: components.login
    },
    {
      path: '/layout',
      component: components.layout,
      redirect:'/layout/index',
      children:[
        {
          path:'index',
          component:components.index
        },
        {
          path:'user',
          component:components.user
        },
        {
          path:'addUser',
          component:components.addUser
        },
        {
          path:'changeUser',
          component:components.changeUser
        },
        {
          path:'categoryList',
          component:components.categoryList
        },
        {
          path:'addCategory',
          component:components.addCategory
        },
        {
          path:'detailCategory/:id',
          component:components.detailCategory
        },
        {
          path:'getViewpager',
          component:components.getViewpager
        },
        {
          path:'addViewpager',
          component:components.addViewpager
        },

      ]
    }
  ]
})
