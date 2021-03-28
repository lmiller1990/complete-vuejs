<template>
  <layout>
    <template v-slot:header>
      Header
    </template>

    <template v-slot:sidebar>
      <album 
        v-for="album in albums" 
        :key="album.id"
        :album="album"
      />
    </template>

    <template v-slot:content>
      <img 
        v-for="photo in photosForCurrentAlbum" 
        :key="photo.thumbnailUrl" 
        :src="photo.thumbnailUrl"
      />
    </template>
  </layout>
</template>

<script>
import { onBeforeMount, computed } from 'vue'
import { useStore } from 'vuex'
import Layout from './Layout.vue'
import Album from './Album.vue'

export default {
  components: {
    Layout,
    Album
  },

  setup() {
    const store = useStore()
    const albums = computed(() => {
      return store.state.albums.all
    })

    const photosForCurrentAlbum = computed(() => {
      return store.state.photos.photosForCurrentAlbum
    })

    onBeforeMount(() => {
      store.dispatch('albums/fetch')
    })

    return {
      albums,
      photosForCurrentAlbum
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