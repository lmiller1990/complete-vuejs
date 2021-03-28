<template>
  <div class="input">
    <div class="label">
      <label :for="name">{{ name }}</label>
      <div class="error">{{ error }}</div>
    </div>
    <input 
      :id="name" 
      :type="type" 
      :value="value" 
      @input="input"
    />
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'text'
    },
    value: {
      type: String,
      required: true
    },
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

  computed: {
    error() {
      return this.validate(this.value)
    }
  },

  methods: {
    validate(value) {
      if (this.rules.required && value.length === 0) {
        return 'This value is required.'
      }

      if (this.rules.min && value.length < this.rules.min) {
        return `The minimum length ${this.rules.min}.`
      }
    },

    input($event) {
      this.$emit('update', {
        name: this.name.toLowerCase(),
        value: $event.target.value,
        valid: !this.validate($event.target.value)
      })
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

.input {
  width: 100%;
}

input {
  box-sizing: border-box;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid silver;
  margin: 2px;
  font-size: 16px;
  width: 100%;
  cursor: pointer;
}
</style>
