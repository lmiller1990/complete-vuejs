<template>
  <router-link 
    :to="albumLink"
  >
    {{ album.title }}
  </router-link>
</template>

<script>
import { useStore } from 'vuex'

export default {
  props: {
    album: {
      // ...
      type: Object,
      required: true
    }
  },

  setup(props) {
    const store = useStore()
    const albumLink = `/albums/${props.album.id}`

    const fetchPhotos = () => {
      store.dispatch('photos/fetchPhotosForAlbum', { album: props.album })
    }

    return {
      fetchPhotos,
      albumLink
    }
  }
}
</script>

<style scoped>
a {
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

a:hover {
  filter: brightness(120%);
  cursor: pointer;
  transition: .1s;
}
</style>
