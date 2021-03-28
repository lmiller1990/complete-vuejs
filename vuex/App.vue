<template>
  <button 
    v-for="post in posts" 
    :key="post.id"
    @click="fetchPost(post)"
  >
    {{ post.title }}
  </button>

  {{ store.state.postId }}
</template>

<script>
import { useStore } from 'vuex'

export default {
  setup() {
    const posts = [
      { 
        id: '1',
        title: 'Post 1',
      },
      { 
        id: '2',
        title: 'Post 2',
      },
    ]

    const store = useStore()
    const fetchPost = (post) => {
      // mutation -> commit
      // store.commit('setPostId', post.id)
      // action -> dispatch
      store.dispatch('fetchPostData', post.id)
    }

    return {
      store,
      fetchPost,
      posts,
    }
  }
}
</script>

<style>
body {
  font-size: 40px;
}

button {
  height: 50px;
  width: 200px;
}
</style>