<template>
  <div
    v-for="post in store.state.posts"
    :key="post.id"
  >
    {{ post.title }}
  </div>
</template>

<script>
import { store } from './store.js'

export default {
  setup() {
    return {
      store
    }
  }
}
</script>

<style scoped>
</style>