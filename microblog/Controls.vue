<template>
  <div>{{ post.likes }}</div>
  <button @click="handleLike">❤️ Like</button>
  <hr />
  <hashtag
    v-for="hashtag in post.hashtags"
    :key="hashtag"
    :hashtag="hashtag"
  />
</template>

<script>
import Hashtag from './Hashtag.vue'
import { store } from './store.js'

export default {
  components: {
    Hashtag
  },
  props: {
    post: {
      // id
      // title
      // content
      // likes
      // hashtags
      type: Object
    }
  },

  setup(props) {
    const handleLike = () => {
      store.likePost(props.post)
    }

    return {
      handleLike
    }
  }
}
</script>
