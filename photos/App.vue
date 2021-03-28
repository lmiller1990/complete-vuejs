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
import { onBeforeMount, computed } from 'vue'
import { useStore } from 'vuex'
import Layout from './Layout.vue'

export default {
  components: {
    Layout,
  },

  setup() {
    const store = useStore()
    const albums = computed(() => {
      return store.state.albums.all
    })

    onBeforeMount(() => {
      store.dispatch('albums/fetch')
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