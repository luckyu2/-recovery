import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(Router)

const router = new Router({
      routes: [{
        path: '/',
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
  if (to.meta.title) {
    document.title = to.meta.title;
    next()
  } else {
    document.title = '健康手册';
    next({
      query: {
        redirect: to.fullPath
      }
    })
  }
})

export default router
