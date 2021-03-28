<template>
  <button 
    v-for="post in posts" 
    :key="post.id"
    @click="fetchPost(post)"
  >
    {{ post.title }}
  </button>

  <div v-if="store.state.posts.post">
    <h1>
      {{ store.getters['posts/postTitle'] }}
    </h1>
    <p>{{ store.state.posts.post.content }}</p>
  </div>
</template>

<script>
import { useStore } from 'vuex'

export default {
  setup() {
    const posts = [
      { 
        id: 1,
        title: 'Post 1',
      },
      { 
        id: 2,
        title: 'Post 2',
      },
    ]

    const store = useStore()
    const fetchPost = (post) => {
      store.dispatch('posts/fetchPostData', post.id)
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