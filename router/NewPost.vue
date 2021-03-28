<template>
  <form @submit.prevent="submit">
    <textarea v-model="content" rows="5" />
    <button>Create</button>
  </form>
</template>

<script>
import { ref } from 'vue'
import { usePosts } from './usePosts.js'

export default {
  setup() {
    const posts = usePosts()
    const content = ref('')
    const submit = () => {
      posts.createPost({
        id: posts.posts.value.length + 1,
        title: 'New Post',
        content: content.value,
      })
    }

    return {
      content,
      submit
    }
  }
}
</script>
