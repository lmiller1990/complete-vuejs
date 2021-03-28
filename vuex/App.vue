<template>
  <button 
    v-for="post in posts" 
    :key="post.id"
    @click="fetchPost(post)"
  >
    {{ post.title }}
  </button>

  <div v-if="post">
    <h1>
      {{ postTitle }}
    </h1>
    <p>{{ post.content }}</p>
  </div>
</template>

<script>
import { computed } from 'vue'
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

    const post = computed(() => {
      return store.state.posts.post
    })

    const postTitle = computed(() => {
      return store.getters['posts/postTitle']
    })

    return {
      postTitle,
      post,
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
  margin: 15px;
}
</style>