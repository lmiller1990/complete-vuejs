<template>
  <my-input 
    name="Username" 
    :rules="{ required: true, min: 5 }"
    :value="username.value"
    @update="update"
  />

  <my-input 
    name="Password" 
    :rules="{ required: true, min: 10 }"
    :value="password.value"
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
      username: {
        value: '',
        valid: false
      },
      password: {
        value: '',
        valid: false
      }
    }
  },

  computed: {
    valid() {
      return this.username.valid && this.password.valid
    }
  },

  methods: {
    update(payload) {
      this[payload.name] = {
        value: payload.value,
        valid: payload.valid
      }
    }
  }
}
</script>

<style>
body {
  font-family: Arial;
}
</style>
