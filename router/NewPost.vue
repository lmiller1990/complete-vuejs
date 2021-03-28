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
  setup() {
    const router = useRouter()
    const posts = usePosts()
    const content = ref('')

    const submit = () => {
      const id = posts.posts.value.length + 1
      posts.createPost({
        id,
        title: 'New Post',
        content: content.value,
      })
      router.push(`/posts/${id}`)
    }

    return {
      content,
      submit
    }
  }
}
</script>
