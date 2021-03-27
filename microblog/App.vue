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
        @setHashtag="setHashtag"
      />
    </template>
  </card>
  {{ currentTag }}
</template>

<script>
import { ref, computed } from 'vue'
import { store } from './store.js'
import Card from '../pokemon/Card.vue'
import Controls from './Controls.vue'

export default {
  components: {
    Card,
    Controls
  },

  setup() {
    // string
    const currentTag = ref()

    const setHashtag = (tag) => {
      currentTag.value = tag
    }

    const filteredPosts = computed(() => {
      if (!currentTag.value) {
        return store.state.posts
      }

      return store.state.posts.filter(post => 
        post.hashtags.includes(currentTag.value)
      )
    })

    return {
      filteredPosts,
      store,
      setHashtag,
      currentTag
    }
  }
}
</script>

<style scoped>
</style>