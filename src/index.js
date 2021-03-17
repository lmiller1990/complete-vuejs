import * as Vue from 'vue/dist/vue.esm-bundler.js'

const app = Vue.createApp({
  template: `
    <p>{{ person }}</p>
  `,
  data() {
    return {
      person: {
        name: 'Lachlan',
        age: 30
      }
    }
  }
})

app.mount('#app')