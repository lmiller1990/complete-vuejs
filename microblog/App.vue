<template>
  <div id="wrapper">
    <div>
      <label>Search hashtag:</label>
      <input 
        :value="currentTag" 
        @input="handleInput"
        placeholder="#vue"
      />
    </div>
    <div class="cards">
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
    </div>
  </div>
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
.cards {
  display: flex;
  justify-content: center;
}

input, label {
  font-size: 30px;
}

input {
  height: 30px;
  width: 200px;
  padding: 5px;
  margin: 5px;
  margin: 30px;
}

#wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>