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
import { usePosts } from './usePosts.js'

export default {
  setup() {
    const posts = usePosts()

    return {
      testPosts: posts.posts
    }
  }
}
</script>

<style scoped>
</style>