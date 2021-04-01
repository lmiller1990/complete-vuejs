<template>
  <h3>New Post</h3>
  <form @submit.prevent="submit">
    <input 
      v-model="newPost.title" 
      placeholder="Title"
    />
    <br />
    <textarea
      cols="50"
      rows="10"
      v-model="newPost.content"
    />
    <br />
    <button>Submit</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      newPost: {
        title: '',
        content: ''
      }
    }
  },

  methods: {
    submit() {
      this.$emit('createPost', {
        title: this.newPost.title,
        content: this.newPost.content,
      })
    }
  }
}
</script>