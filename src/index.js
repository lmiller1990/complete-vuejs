import * as Vue from 'vue/dist/vue.esm-bundler.js'

const app = Vue.createApp({
  template: `
    <p>{{ count }}</p>
    <button v-on:click="increment">Increment</button>

    <p v-if="isEven()">
      Even
    </p>
    <p v-else>
      Odd
    </p>
  `,
  data() {
    return {
      count: 0,
      numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    }
  },
  methods: {
    isEven () {
      return this.count % 2 === 0
    },
    increment() {
      this.count += 1
    }
  }
})

app.mount('#app')