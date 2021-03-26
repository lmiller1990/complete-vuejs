<template>
  <button @click="increment">{{ count }}</button>
  <button @click="a++">{{ a }}</button>
  <button @click="b++">{{ b }}</button>
  <h1>{{ double }}</h1>
  <div v-for="val in history" :key="val">
    {{ val }}
  </div>
</template>

<script>
import { ref, reactive, computed, watch, watchEffect } from 'vue'

export default {
  setup() {
    // primitive
    const count = ref(0)
    const a = ref(0)
    const b = ref(0)
    const history = ref([])

    watch([a, b], ([newA, newB], [oldA, oldB]) => {
      if (newA !== oldA) {
        history.value.push(`a: ${oldA} -> ${newA}`)
      }

      if (newB !== oldB) {
        history.value.push(`b: ${oldB} -> ${newB}`)
      }
    })

    const increment = () => {
      count.value++
    }

    const total = computed(() => {
      return count.value + a.value + b.value
    })

    const double = computed(() => {
      return total.value * 2
    })

    return {
      total,
      double,
      history,
      msg: 'world',
      count,
      a,
      b,
      increment,
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