<template>
  Photos
</template>

<script>
import { useStore } from 'vuex'

export default {
  setup() {
    const store = useStore()

    console.log(store)
  }
}
</script>

<style scoped>
</style>