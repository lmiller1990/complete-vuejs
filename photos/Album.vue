<template>
  <button @click="fetchPhotos">{{ album.title }}</button>
</template>

<script>
import { useStore } from 'vuex'

export default {
  props: {
    album: {
      // ...
      type: Object
    }
  },

  setup(props) {
    const store = useStore()

    const fetchPhotos = () => {
      store.dispatch('photos/fetchPhotosForAlbum', { album: props.album })
    }

    return {
      fetchPhotos
    }
  }
}
</script>

<style scoped>
button {
  background: darkcyan;
  color: white;
  border: none;
  margin: 5px;
  padding: 10px;
  font-size: 18px;
  border-radius: 5px;
  transition: .1s;
  width: 100%;
  display: block;
  text-align: center;
  text-decoration: none;
  font-family: Arial;
}
button:hover {
  filter: brightness(120%);
  cursor: pointer;
  transition: .1s;
}
</style>
