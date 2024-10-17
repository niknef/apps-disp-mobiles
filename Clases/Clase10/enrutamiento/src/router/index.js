import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import IngresarView from '../views/IngresarView.vue'
import VerView from '../views/VerView.vue'
import PeliculasParamsView from '../views/PeliculasParamsView.vue'
import EditarView from '../views/EditarView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/ingresar',
      name: 'ingresar',
      component: IngresarView
    },
    {
      path: '/ver',
      name: 'ver',
      component: VerView
    },
    {
      path: '/peliculas/:id/:estreno',
      name: 'peliculas',
      component: PeliculasParamsView
    },
    {
      path: '/editar/:titulo/:comentario/:selected/:estreno/:fecha',
      name: 'editar',
      component: EditarView
    }
  ]
})

export default router
