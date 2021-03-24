<template>
  <my-input name="Username" />
  <my-button 
    color="white"
    background="darkslateblue"
    :disabled="!valid"
  />
</template>

<script>
import MyButton from './MyButton.vue'
import MyInput from './MyInput.vue'

export default {
  components: {
    MyButton,
    MyInput
  },

  data() {
    return {
      valid: false
    }
  }
}
</script>

<style scoped>
</style>
