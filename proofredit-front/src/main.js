// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './store'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/zh-CN'
import '@/assets/style/reset.css'
import '@/assets/font/iconfont.css'
import 'element-ui/lib/theme-chalk/index.css'
Vue.prototype.$http = axios;
Vue.config.productionTip = false
Vue.use(ElementUI, { locale })
/* eslint-disable no-new */


router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
    console.log('come in',store.state)
      if (store.state.isLogin) {  // 通过vuex state获取当前的token是否存在
        next();
      }
      else {
        vm.$notify.error({
          title: '错误',
          message: '您还未登录,请先登录'
        });
        next({
            path: '/login',
        })
      }
  }
  else {
      next();
  }
})

var vm =new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
