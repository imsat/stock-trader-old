import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/Home'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    { path: '/', component: require('@/components/Home').default },
    { path: '/portfolio', component: require('@/components/portfolio/Portfolio').default },
    { path: '/stocks', component: require('@/components/stocks/Stocks').default },
  ]
})
