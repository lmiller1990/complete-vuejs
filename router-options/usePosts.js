import { ref } from 'vue'
import { testPosts } from '../microblog/testPosts.js'

export function usePosts() {
  const posts = ref(testPosts)

  const addPost = (post) => {
    posts.value.push(post)
  }

  return {
    posts,
    addPost
  }
}