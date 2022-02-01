import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Proyecto from '../views/Proyectos/Proyecto.vue'
import Blog from '../views/Articulos/Articulo.vue'
import Contacto from '../views/Contactos/Contacto.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/proyectos',
    name: 'Proyecto',
    component: Proyecto
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/contact',
    name: 'Contacto',
    component: Contacto
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
