import { reactive } from 'vue'
import { testPosts } from './testPosts.js'

class Store {
  constructor() {
    this.state = reactive({
      posts: testPosts,
      currentTag: null
    })
  }

  setHashtag(tag) {
    this.state.currentTag = tag
  }

  likePost(post) {
    const thePost = this.state.posts.find(x => {
      return x.id === post.id
    })

    if (!thePost) {
      return
    }

    thePost.likes++
  }
}

export const store = new Store()
