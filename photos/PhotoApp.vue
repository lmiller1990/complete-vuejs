<template>
  <layout>
    <template v-slot:header>
      Capstone Project - Photo App
    </template>

    <template v-slot:sidebar>
      <album 
        v-for="album in albums" 
        :key="album.id"
        :album="album"
      />
    </template>

    <template v-slot:content>
      <router-view />
    </template>
  </layout>
</template>

<script>
import { onBeforeMount, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import Layout from './Layout.vue'
import Album from './Album.vue'

export default {
  components: {
    Layout,
    Album
  },

  setup() {
    const route = useRoute()
    const id = computed(() => {
      return route.params.id
    })

    const store = useStore()
    const albums = computed(() => {
      return store.state.albums.all
    })

    watch(id, (newVal) => {
      store.dispatch('photos/fetchPhotosForAlbum', { id: newVal })
    }, {
      immediate: true
    })

    onBeforeMount(() => {
      store.dispatch('albums/fetch')
    })

    return {
      albums,
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