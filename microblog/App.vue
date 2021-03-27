<template>
  <card
    v-for="post in filteredPosts"
    :key="post.id"
  >
    <template v-slot:title>
      {{ post.title }}
    </template>

    <template v-slot:content>
      {{ post.content }}
    </template>

    <template v-slot:description>
      <controls 
        :post="post" 
      />
    </template>
  </card>
</template>

hashtag -> app

<script>
import { computed } from 'vue'
import { store } from './store.js'
import Card from '../pokemon/Card.vue'
import Controls from './Controls.vue'

export default {
  components: {
    Card,
    Controls
  },

  setup() {
    const filteredPosts = computed(() => {
      if (!store.state.currentTag) {
        return store.state.posts
      }

      return store.state.posts.filter(post => 
        post.hashtags.includes(store.state.currentTag)
      )
    })

    return {
      filteredPosts,
      store,
    }
  }
}
</script>

<style scoped>
</style>