<template>
  <h2>Posts</h2>
  <ul>
    <li v-for="post in testPosts" :key="post.id">
      <router-link :to="`/posts/${post.id}`">
        {{ post.title }}
      </router-link>
    </li>
  </ul>
  <hr />
  <router-view @newPost="newPost" />
</template>

<script>
import { testPosts } from '../microblog/testPosts.js'

export default {
  data() {
    return {
      testPosts
    }
  },

  methods: {
    newPost(post) {
      const id = this.testPosts.length + 1
      const newPost = {
        ...post,
        id
      }
      this.testPosts.push(newPost)
      this.$router.push(`/posts/${id}`)
    }
  }
}
</script>

<style scoped>
</style>