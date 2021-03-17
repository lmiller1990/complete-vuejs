import * as Vue from 'vue/dist/vue.esm-bundler.js'

const app = Vue.createApp({
  template: `
    <p>{{ count }}</p>
    <button v-on:click="add">Increment</button>

    <ul>
      <li v-for="number in evenNumbers">
        {{ number }}
      </li>
    </ul>
  `,
  data() {
    return {
      count: 0,
      numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    }
  },
  computed: {
    evenNumbers() {
      return this.numbers.filter(num => this.isEven(num))
    }
  },
  methods: {
    add() {
      this.numbers.push(this.numbers.length + 1)
    },
    isEven(number) {
      return number % 2 === 0
    },
    increment() {
      this.count += 1
    }
  }
})

app.mount('#app')