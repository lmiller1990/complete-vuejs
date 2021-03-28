<template>
  <h1>Posts</h1>
  <ul>
    <li v-for="post in testPosts" :key="post.id">
      <router-link :to="`/posts/${post.id}`">
        {{ post.title }}
      </router-link>
    </li>
  </ul>
  <hr />
  <router-view />
</template>

<script>
import { testPosts } from '../microblog/testPosts.js'

export default {
  setup() {
    return {
      testPosts
    }
  }
}
</script>

<style scoped>
</style>