<template>
  <button>{{ post.likes }}</button>
  <hashtag
    v-for="hashtag in post.hashtags"
    :key="hashtag"
    :hashtag="hashtag"
  />
</template>

<script>
import Hashtag from './Hashtag.vue'

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
  }
}
</script>
