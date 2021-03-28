<template>
  <router-link 
    :to="albumLink"
  >
    {{ album.title }}
  </router-link>
</template>

<script>
export default {
  props: {
    album: {
      // ...
      type: Object,
      required: true
    }
  },

  setup(props) {
    const albumLink = `/albums/${props.album.id}`

    return {
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
  padding: 10px;
  margin: 0 10px 5px 0;
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
