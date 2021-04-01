<template>
  <form @submit.prevent="submit">
    <input placeholder="Title" />
    <br />
    <textarea v-model="content" rows="5" />
      <br />
    <button>Create</button>
  </form>
</template>

<script>
import { ref } from 'vue'
import { usePosts } from './usePosts.js'
import { useRouter } from 'vue-router'

export default {
  data() {
    return {
      title: '',
      content: ''
    }
  },

  methods: {
    submit() {
      const newPost = {
        title: 'New Post',
        content: this.content,
      }
      this.$emit('newPost', newPost)
    }
  }
}
</script>

<style scoped>
input, textarea {
  font-size: 40px;
  width: 400px;
}
</style>
