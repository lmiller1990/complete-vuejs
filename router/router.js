import {
  createRouter,
  createWebHistory
} from 'vue-router'
import Hello from './Hello.vue'
import Posts from './Posts.vue'
import Post from './Post.vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: 'Hello',
      component: Hello,
      path: '/hello'
    },
    {
      name: 'posts',
      component: Posts,
      path: '/posts',
      children: [
        {
          name: 'post',
          component: Post,
          path: ':id'
        },
      ]
    }
  ]
})