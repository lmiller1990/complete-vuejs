<template>
  <button @click="increment">{{ count }}</button>
  <button @click="increase('a')">{{ numbers.a }}</button>
  <button @click="increase('b')">{{ numbers.b }}</button>
  <h1>{{ double }}</h1>
</template>

<script>
import { ref, reactive, computed } from 'vue'

export default {
  setup() {
    // primitive
    const count = ref(0)

    // object
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

    const total = computed(() => {
      return count.value + numbers.a + numbers.b
    })

    const double = computed(() => {
      return total.value * 2
    })

    return {
      total,
      double,
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