<template>
  <div>{{ store.state.count }}</div>
  <button @click="inc">Inc</button>
</template>

<script>
import { useStore } from 'vuex'

export default {
  setup() {
    const store = useStore()
    const inc = () => {
      store.commit('increment', 2)
    }

    return {
      store,
      inc
    }
  }
}
</script>

<style>
body {
  font-size: 40px;
}

button {
  height: 50px;
  width: 200px;
}
</style>