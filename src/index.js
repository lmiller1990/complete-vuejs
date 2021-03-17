import * as Vue from 'vue/dist/vue.esm-bundler.js'

// username
// 5, 10

const Greet = {
  props: ['message'],
  template: `<p>{{ message }}</p>`
}

const app = Vue.createApp({
  components: {
    Greet,
  },
  template: `
    <p>{{ count }}</p>
    <greet :message="numbers" />
    <button @click="add">Increment</button>
    <ul>
      <li 
        v-for="number in numbers"
        :class="getClass(number)"
        :title="number"
      >
        {{ number }}
      </li>
    </ul>
    <input v-model="checked" type="radio" value="a" />
    <input v-model="checked" type="radio" value="b" />
    <input v-model="checked" type="radio" value="c" />

    {{ checked }}
    <div v-if="error">{{ error }}</div>
  `,
  data() {
    return {
      count: 0,
      numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      username: 'user',
      checked: 'a'
    }
  },
  computed: {
    evenNumbers() {
      return this.numbers.filter(num => this.isEven(num))
    },
    error() {
      if (this.username.length < 5) {
        return 'Too short'
      } 
    }
  },
  methods: {
    input($event) {
      this.username = $event.target.value
    },
    getClass(number) {
      return this.isEven(number) ? 'red' : 'blue'
    },
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