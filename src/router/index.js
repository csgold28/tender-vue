import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import TenderLPSE from '../views/TenderLPSE.vue'
import LPSE from '../views/LPSE.vue'
import Bantuan from '../views/Bantuan.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/tenderlpse',
    name: 'TenderLPSE',
    component: TenderLPSE
  },
  {
    path: '/lpse',
    name: 'LPSE',
    component: LPSE
  },
  {
    path: '/bantuan',
    name: 'Bantuan',
    component: Bantuan
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
