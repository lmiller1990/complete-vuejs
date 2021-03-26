<template>
  <button @click="increment">{{ count }}</button>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const count = ref(0)

    const increment = () => {
      console.log(count.value)
      count.value++
    }

    return {
      msg: 'world',
      count,
      increment
    }
  }
}
</script>

<style scoped>
button {
  font-size: 40px;
}
</style>