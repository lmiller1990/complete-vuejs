<template>
  <button @click="a++">{{ a }}</button>
  <button @click="b++">{{ b }}</button>
  <h1>{{ double }}</h1>
  <div v-for="val in history" :key="val">
    {{ val }}
  </div>
</template>

<script>
import { useNumbers } from './useNumbers.js'

export default {
  setup() {
    const {
       a, b, history, double 
    } = useNumbers()

    return {
      a, b, history, double
    }
  }
}
</script>

<style scoped>
button {
  font-size: 40px;
  margin: 5px;
}
</style>