import {
  createWebHistory,
  createRouter
} from 'vue-router'
import PhotoApp from './PhotoApp.vue'
import PhotoView from './PhotoView.vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: 'root',
      component: PhotoApp,
      path: '/',
      children: [
        {
          name: 'photos',
          component: PhotoView,
          path: 'albums/:id'
        }
      ]
    }
  ]
})