<template>
  <layout>
    <template v-slot:header>
      Header
    </template>

    <template v-slot:sidebar>
      <div v-for="album in albums" :key="album.id">
        {{ album.title }}
      </div>
    </template>

    <template v-slot:content>
      Content
    </template>
  </layout>
</template>

<script>
import { onBeforeMount, ref } from 'vue'
import { useStore } from 'vuex'
import Layout from './Layout.vue'

export default {
  components: {
    Layout,
  },

  setup() {
    const albums = ref([])

    onBeforeMount(async () => {
      const response = await window.fetch('https://jsonplaceholder.typicode.com/albums')
      const json = await response.json()
      albums.value = json
    })

    return {
      albums
    }
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
}
</style>