import { ref } from 'vue'
import { testPosts } from '../microblog/testPosts.js'

export function usePosts() {
  const posts = ref(testPosts)

  const createPost = (post) => {
    posts.value.push(post)
  }

  return {
    posts,
    createPost
  }
}