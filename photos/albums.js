export const albums = {
  namespaced: true,

  state() {
    return {
      all: []
    }
  },

  mutations: {
    setAlbums(state, albums) {
      state.all = albums
    }
  },

  actions: {
    async fetch(ctx) {
      const response = await window.fetch('https://jsonplaceholder.typicode.com/albums')
      const json = await response.json()
      ctx.commit('setAlbums', json)
    }
  },
}
