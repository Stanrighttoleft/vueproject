import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ProductsView from '@/views/ProductsView.vue'
import ContactView from '@/views/ContactView.vue'
import login from '@/views/LoginView.vue'
import NewsList from '@/views/NewsList.vue'
import CreateAcc from '@/views/CreateAccView.vue'
import PasswordView from '@/views/PasswordView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/products',
      name: 'products',
      component: ProductsView ,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView ,
    },
    {
      path: '/login',
      name: 'login',
      component: login,

    },{
      path: '/newslist',
      name: 'newslist',
      component: NewsList,
    },{
      path:'/login/password',
      name: 'password',
      component: PasswordView,
    },{
      path: '/login/createacc',
      name: 'createacc',
      component: CreateAcc,
    },
  ],
})

export default router
