<template>
  <div class="input">
    <div class="label">
      <label :for="name">{{ name }}</label>
      <div class="error">{{ error }}</div>
    </div>
    <input :id="name" type="text" v-model="value" />
    {{ value }}
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    rules: {
      // required: boolean
      // min: number
      type: Object,
      default: {}
    }
  },

  data() {
    return {
      value: ''
    }
  },

  computed: {
    error() {
      if (this.rules.required && this.value.length === 0) {
        return 'This value is required.'
      }

      if (this.rules.min && this.value.length < this.rules.min) {
        return `The minimum length ${this.rules.min}.`
      }
    }
  }
}
</script>

<style scoped>
.input {
  display: flex;
  flex-direction: column;
}

.label {
  display: flex;
  justify-content: space-between;
}

.error {
  color: red;
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
