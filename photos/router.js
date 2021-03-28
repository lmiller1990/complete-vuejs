import {
  createWebHistory,
  createRouter
} from 'vue-router'
import PhotoApp from './PhotoApp.vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: 'root',
      component: PhotoApp,
      path: '/'
    }
  ]
})