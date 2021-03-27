<template>
  <input 
    :value="currentTag" 
    @input="handleInput"
  />
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
    const handleInput = ($event) => {
      store.setHashtag($event.target.value)
    }

    return {
      filteredPosts: computed(() => store.posts),
      handleInput,
      currentTag: computed(() => store.state.currentTag),
    }
  }
}
</script>

<style scoped>
</style>