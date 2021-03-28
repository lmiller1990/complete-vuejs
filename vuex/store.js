import { createStore } from 'vuex'

const delay = () => new Promise(res => {
  setTimeout(res, 1000)
})

export const store = createStore({
  state() {
    return {
      postId: null
    }
  },

  mutations: {
    setPostId(state, id) {
      state.postId = id
    }
  },

  actions: {
    async fetchPostData() {
      await delay()
      console.log('LOG')
    }
  }
})
