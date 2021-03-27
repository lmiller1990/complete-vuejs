<template>
  <div 
    class="hashtag"
    @click="click"
  >
    #{{ hashtag }}
  </div>
</template>

<script>
import { store } from './store.js'

export default {
  props: {
    hashtag: {
      type: String,
      required: true
    }
  },

  setup(props) {
    const click = () => {
      store.setHashtag(props.hashtag)
    }

    return {
      click
    }
  }
}
</script>

<style scoped>
.hashtag {
  text-decoration: underline; 
}

.hashtag:hover {
  color: cornflowerblue;
}
</style>