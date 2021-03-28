<template>
  <img 
    v-for="photo in photosForCurrentAlbum" 
    :key="photo.thumbnailUrl" 
    :src="photo.thumbnailUrl"
  /> 
</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'

export default {
  setup() {
    const store = useStore()
    const photosForCurrentAlbum = computed(() => {
      return store.state.photos.photosForCurrentAlbum
    })

    return {
      photosForCurrentAlbum
    }
  }
}
</script>

<style scoped>
img {
  margin: 5px;
}
</style>