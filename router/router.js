import {
  createRouter,
  createWebHistory
} from 'vue-router'
import Hello from './Hello.vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: 'Hello',
      component: Hello,
      path: '/hello'
    }
  ]
})