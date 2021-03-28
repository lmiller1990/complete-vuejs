import { createStore } from 'vuex'

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
  }
})
