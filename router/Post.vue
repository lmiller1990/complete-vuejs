<template>
  <div v-if="post">
    <h3>{{ post.title }}</h3>
    <p>{{ post.content }}</p>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { testPosts } from '../microblog/testPosts.js'

export default {
  computed: {
    post() {
      return testPosts.find(x => {
        return x.id === parseInt(this.$route.params.id, 10)
      })
    }
  }
  // setup() {
  //   const route = useRoute()

  //   const post = computed(() => 
  //     testPosts.find(x => {
  //       return x.id === parseInt(route.params.id, 10)
  //     })
  //   )

  //   return {
  //     post
  //   }
  // }
}
</script>