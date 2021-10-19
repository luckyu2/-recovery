import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import bus from '@/utils/bus'

Vue.use(Router)

const router = new Router({
      routes: [{
        path: '/',
        name: 'Home',
        component: Home,
        meta: {title: "术前康复"}
      },
        {
          path: '/home',
          name: 'Home',
          component: Home,
          meta: {title: "术前康复"}
        },
        {
          path: '/about',
          name: 'About',
          meta: {title: "术后康复"},
          component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
        }]
    })

router.beforeEach((to, from, next) => {
    let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
    if( flag){
        document.title = '健康手册';
        bus.$emit('message', to.meta.title);
          next()
        } else {
        document.title = to.meta.title;
          next()
        }

})

export default router
