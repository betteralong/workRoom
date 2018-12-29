import Vue from 'vue'
import Router from 'vue-router'
// import index from '@/views/index/index.vue'
// import server from '@/views/server/server.vue'
// import order from '@/views/order/order.vue'
// import my from '@/views/my/my.vue'
// import question from '@/views/question/question.vue'
// import introduce from '@/views/introduce/introduce.vue'
// import login from '@/views/login/login.vue'
// import register from '@/views/register/register.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/index'
    },
    {
      path: '/index',
      name: 'index',
      // component: resolve => require(["@/views/index/index.vue"], resolve)
      component: () => import("@/views/index/index.vue")
    },
    {
      path: '/server',
      name: 'server',
      component: () => import("@/views/server/server.vue")
    },
    {
      path: '/order',
      name: 'order',
      component: () => import("@/views/order/order.vue")
    },
    {
      path: '/question',
      name: 'question',
      component: () => import("@/views/question/question.vue")
    },
    {
      path: '/introduce',
      name: 'introduce',
      component: () => import("@/views/introduce/introduce.vue")
    },
    {
      path: '/my',
      name: 'my',
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      },
      component: () => import("@/views/my/my.vue"),
      children: [  //这里就是二级路由的配置
        {
          path: '',
          name: '/myorder',
          meta: {
            requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
          },
          component: () => import("@/views/my/myorder.vue")
        },
        {
          path: 'base',
          name: '/mybase',
          meta: {
            requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
          },
          component: () => import("@/views/my/mybase.vue")
        },
        {
          path: 'discount',
          name: '/mydiscount',
          meta: {
            requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
          },
          component: () => import("@/views/my/mydiscount.vue")
        }
      ],
      // redirect:'/my/order'
    },
    {
      path: '/login',
      name: 'login',
      component: () => import("@/views/login/login.vue")
    },
    {
      path: '/register',
      name: 'register',
      component: () => import("@/views/register/register.vue")
    },
    {
      path: '/*',
      redirect:'/index'
    }
  ],
  // mode: 'history',
  // scrollBehavior (to, from, savedPosition) {
  //   // 如果你的連結是帶 # 這種
  //   // to.hash 就會有值(值就是連結)
  //   // 例如 #3
  //   if (to.hash) {
  //     return {
  //       // 這個是透過 to.hash 的值來找到對應的元素
  //       // 照你的 html 來看是不用多加處理這樣就可以了
  //       // 例如你按下 #3 的連結，就會變成 querySelector('#3')，自然會找到 id = 3 的元素
  //       selector: to.hash
  //     }
  //   }
  // }
})
