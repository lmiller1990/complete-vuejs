<template>
  App

  <br />
  <router-link to="/posts">
    See All Posts
  </router-link>

  <hr />

  <router-view />
</template>

<script>
export default {
}
</script>

<style>
body {
  font-family: Arial;
  font-size: 1.5rem;
}
</style>