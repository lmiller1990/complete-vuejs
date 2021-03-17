import * as Vue from 'vue/dist/vue.esm-bundler.js'

const app = Vue.createApp({
  template: `
    <p>{{ count }}</p>
    <button v-on:click="increment">Increment</button>
  `,
  data() {
    return {
      count: 0
    }
  },
  methods: {
    increment() {
      this.count += 1
    }
  }
})

app.mount('#app')