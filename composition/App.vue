<template>
  <button @click="increment">{{ count }}</button>
  <button @click="increase('a')">{{ numbers.a }}</button>
  <button @click="increase('b')">{{ numbers.b }}</button>
</template>

<script>
import { ref, reactive } from 'vue'

export default {
  setup() {
    const count = ref(0)
    const numbers = reactive({
      a: 0,
      b: 0
    })

    const increase = (num) => {
      numbers[num]++
    }

    const increment = () => {
      count.value++
    }

    return {
      msg: 'world',
      count,
      increment,
      numbers,
      increase
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