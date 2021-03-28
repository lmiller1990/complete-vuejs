import { createStore } from 'vuex'
import { posts } from './posts.js'

export const store = createStore({
  modules: {
    posts
  }
})
