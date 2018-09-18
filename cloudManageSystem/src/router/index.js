import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const components={
  login:()=>import('../views/login/login'),
  layout:()=>import('../views/layout/layout'),
  index:()=>import('../views/index/index'),
  user:()=>import('../views/user/user'),
  addUser:()=>import('../views/addUser/addUser'),
  changeUser:()=>import('../views/changeUserInfo/changeUser')

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

      ]
    }
  ]
})