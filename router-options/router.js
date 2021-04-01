import {
  createWebHistory,
  createRouter
} from 'vue-router'
import Hello from './Hello.vue'
import Posts from './Posts.vue'
import Post from './Post.vue'
import NewPost from './NewPost.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/hello',
      component: Hello
    },
    {
      path: '/posts',
      component: Posts,
      children: [
        {
          path: 'new',
          component: NewPost
        },
        {
          path: ':id',
          component: Post
        },
      ]
    }
  ]
})

export { router }