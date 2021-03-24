<template>
  <my-input 
    name="Username" 
    :rules="{ required: true, min: 5 }"
    :value="username"
    @update="update"
  />

  <my-input 
    name="Password" 
    :rules="{ required: true, min: 10 }"
    :value="password"
    @update="update"
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
      valid: false,
      username: '',
      password: ''
    }
  },

  methods: {
    update(payload) {
      this[payload.name] = payload.value
    }
  }
}
</script>

<style>
body {
  font-family: Arial;
}
</style>
