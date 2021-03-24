<template>
  <my-input 
    name="Username" 
    :rules="{ required: true, min: 5 }"
  />

  <my-input 
    name="Password" 
    :rules="{ required: true, min: 10 }"
  />
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

<style>
body {
  font-family: Arial;
}
</style>
