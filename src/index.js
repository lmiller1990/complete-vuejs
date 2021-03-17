import * as Vue from 'vue/dist/vue.esm-bundler.js'

const app = Vue.createApp({
  template: `
    <p>{{ count }}</p>
    <button v-on:click="increment">Increment</button>

    <ul>
      <li v-for="number in numbers">
        <div v-if="isEven(number)">
          {{ number }}
        </div>
      </li>
    </ul>
  `,
  data() {
    return {
      count: 0,
      numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    }
  },
  methods: {
    isEven(number) {
      return number % 2 === 0
    },
    increment() {
      this.count += 1
    }
  }
})

app.mount('#app')