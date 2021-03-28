<template>
  <div>{{ store.state.count }}</div>
</template>

<script>
import { useStore } from 'vuex'

export default {
  setup() {
    const store = useStore()

    return {
      store
    }
  }
}
</script>

<style>
body {
  font-size: 40px;
}
</style>