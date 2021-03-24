<template>
  <div class="input">
    <label :for="name">{{ name }}</label>
    <input :id="name" type="text" />
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.input {
  display: flex;
  flex-direction: column;
}

input {
  padding: 10px;
  border-radius: 8px;
  border: 1px solid silver;
  margin: 2px;
  font-size: 16px;
  cursor: pointer;
}
</style>
