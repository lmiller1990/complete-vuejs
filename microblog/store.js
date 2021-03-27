import { reactive } from 'vue'

class Store {
  constructor() {
    this.state = reactive({
      posts: [
        {
          id: 1,
          title: 'New Post',
          content: 'This is the post content'
        }
      ]
    })
  }
}

export const store = new Store()
