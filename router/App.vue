<template>
  App
  <router-link to="/hello">
    Hello
  </router-link>

  <router-link to="/posts">
    Posts
  </router-link>

  <router-link to="/asdf">
    Asdf
  </router-link>
  
  <hr />

  <router-view />
</template>

<script>
export default {
}
</script>

<style scoped>
</style>