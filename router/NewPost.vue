<template>
  <form @submit.prevent="submit">
    <textarea v-model="content" rows="5" />
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
