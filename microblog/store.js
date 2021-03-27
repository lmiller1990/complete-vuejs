import { reactive } from 'vue'

class Store {
  constructor() {
    this.state = reactive({
      posts: [
        {
          id: 1,
          title: 'Learning Vue.js',
          content: 'Using the Composition API',
          likes: 10,
          hashtags: [
            'vue',
            'javascript',
            'composition API',
          ]
        }
      ]
    })
  }
}

export const store = new Store()
