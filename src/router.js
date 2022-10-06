import { createRouter, createWebHashHistory } from 'vue-router'

import App from './App.vue'
import Test from './components/Test.vue'
import CrearFamiliar from './components/CrearFamiliar.vue'
import CrearPaciente from './components/CrearPaciente.vue'
import CrearPersonalSalud from './components/CrearPersonalSalud.vue'
import CrearUsuario from './components/CrearUsuario.vue'
import detallePaciente from './components/ConsultarPaciente.vue'


const routes = [
  {
    path: '/root',
    name: 'root',
    component: app
  },
  {
    path: '/test',
    name: 'test',
    component: Test
  },
  {
    path: '/cps',
    name: 'CrearPersonalSalud',
    component: CrearPersonalSalud
  },
  {
    path: '/cf',
    name: 'CrearFamiliar',
    component: CrearFamiliar
  },
  {
    path: '/detallePaciente',
    name: 'detallePaciente',
    component: detallePaciente
  },
  {
    path: '/cp',
    name: 'CrearPaciente',
    component: CrearPaciente
  },
  {
    path: '/cu',
    name: 'CrearUsuario',
    component: CrearUsuario
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
