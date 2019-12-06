import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Cadastro from '../views/Cadastro.vue';

Vue.use(VueRouter)

// exportando, caso eu queira utilizar em algum outro componente... Por ex, para criar menus dinâmicos.
export const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/cadastro',
    name: 'cadastro',
    component: Cadastro
  },
  {
    path: '/sobre',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

