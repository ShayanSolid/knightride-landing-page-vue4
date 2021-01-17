import Vue from 'vue'
import VueRouter from 'vue-router'
import LandingPage from '../components/LandingPage';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Welcome to Knightride',
    component: LandingPage
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
