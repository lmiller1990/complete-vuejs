<template>
  <div v-if="post">
    <h4>{{ post.title }}</h4>
    <p>{{ post.content }}</p>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { testPosts } from '../microblog/testPosts.js'

export default {
  setup() {
    const route = useRoute()
    console.log(route)
    console.log(route.params)

    const post = computed(() => 
      testPosts.find(x => {
        return x.id === parseInt(route.params.id, 10)
      })
    )

    return {
      post
    }
  }
}
</script>