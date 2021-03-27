<template>
  <div 
    class="hashtag"
    @click="click"
  >
    #{{ hashtag }}
  </div>
</template>

<script>
export default {
  emits: ['setHashtag'],

  props: {
    hashtag: {
      type: String,
      required: true
    }
  },

  setup(props, ctx) {
    const click = () => {
      ctx.emit('setHashtag', props.hashtag)
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