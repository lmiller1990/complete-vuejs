import * as Vue from 'vue/dist/vue.esm-bundler.js'

const Greet = {
  props: ['message'],
  template: `<p>{{ message }}</p>`
}

const Num = {
  props: ['number'],
  template: `
    <button 
      @click="handleClick"
      :class="getClass(number)"
    >
      {{ number }}
    </button>
  `,
  methods: {
    handleClick() {
      this.$emit('selected', this.number)
    },
    getClass(number) {
      return this.isEven(number) ? 'red' : 'blue'
    },
    isEven(number) {
      return number % 2 === 0
    },
  }
}

const app = Vue.createApp({
  components: {
    Greet,
    Num
  },
  template: `
    <num 
      v-for="number in numbers"
      :number="number"
      @selected="selected"
    />
    {{ selectedNumbers }}
  `,
  data() {
    return {
      count: 0,
      numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      username: 'user',
      checked: 'a',
      selectedNumbers: []
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
    selected(number) {
      this.selectedNumbers.push(number)
    },
    input($event) {
      this.username = $event.target.value
    },
    add() {
      this.numbers.push(this.numbers.length + 1)
    },
    increment() {
      this.count += 1
    }
  }
})

app.mount('#app')