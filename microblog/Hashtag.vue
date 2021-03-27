<template>
  <div>
    #{{ hashtag }}
  </div>
</template>

<script>
export default {
  props: {
    hashtag: {
      type: String,
      required: true
    }
  }
}
</script>
