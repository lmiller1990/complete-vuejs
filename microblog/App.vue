<template>
  <card
    v-for="post in store.state.posts"
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
import { ref } from 'vue'
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

    return {
      store,
      setHashtag,
      currentTag
    }
  }
}
</script>

<style scoped>
</style>