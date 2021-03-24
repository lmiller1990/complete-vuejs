<template>
  <button v-bind:style="{ 
    background,
    color,
  }">My Button</button>
</template>

<script>
export default {
  props: {
    background: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
button {
  padding: 10px 40px;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
}

button:hover {
  filter: brightness(125%);
}
</style>
