<template>
  <button>{{ post.likes }}</button>
  <hashtag
    v-for="hashtag in post.hashtags"
    :key="hashtag"
    :hashtag="hashtag"
    @setHashtag="setHashtag"
  />
</template>

<script>
import Hashtag from './Hashtag.vue'

export default {
  emits: ['setHashtag'],
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

  setup(props, ctx) {
    const setHashtag = (hashtag) => {
      ctx.emit('setHashtag', hashtag)
    }

    return {
      setHashtag
    }
  }
}
</script>
