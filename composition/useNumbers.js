import { ref, reactive, computed, watch, watchEffect } from 'vue'

export function useNumbers() {
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

  const total = computed(() => {
    return a.value + b.value
  })

  const double = computed(() => {
    return total.value * 2
  })

  return {
    total,
    double,
    history,
    a,
    b,
  }
}