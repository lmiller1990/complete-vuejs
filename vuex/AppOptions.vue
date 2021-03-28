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

export default {
  data() {
    return {
      posts
    }
  },

  computed: {
    postTitle() {
      return this.$store.getters['posts/postTitle']
    },

    post() {
      return this.$store.state.posts.post
    }
  },

  methods: {
    fetchPost(post) {
      this.$store.dispatch('posts/fetchPostData', post.id)
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
  margin-right: 10px;
  border-radius: 5px;
  background: none;
  border: none;
  border: 1px solid;
}

button:hover {
  background: lightyellow;
}
</style>