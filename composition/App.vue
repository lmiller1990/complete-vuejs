<template>
  A: <button @click="a++">{{ a }}</button>
  B: <button @click="b++">{{ b }}</button>
  <h1>A + B * 2 = {{ double }}</h1>
  <h1>History</h1>
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

<style>
* {
  font-size: 40px;
}

button {
  margin: 5px;
}
</style>