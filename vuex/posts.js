import { testPosts } from '../microblog/testPosts.js'

const delay = () => new Promise(res => {
  setTimeout(res, 1000)
})

export const posts = {
  namespaced: true,

  state() {
    return {
      post: null
    }
  },

  mutations: {
    setPostData(state, post) {
      state.post = post
    }
  },

  actions: {
    async fetchPostData(ctx, id) {
      await delay()
      const post = testPosts.find(x => x.id === id)
      ctx.commit('setPostData', post)
    }
  },

  getters: {
    postTitle(state) {
      if (!state.post) {
        return ''
      }
      return `#${state.post.id} ${state.post.title}`
    }
  }
}
