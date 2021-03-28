export const photos = {
  namespaced: true,

  state() {
    return {
      photosForCurrentAlbum: []
    }
  },

  mutations: {
    setPhotosForCurrentAlbum(state, payload) {
      state.photosForCurrentAlbum = payload
    }
  },

  actions: {
    async fetchPhotosForAlbum(ctx, payload) {
      const response = await window.fetch(
        `https://jsonplaceholder.typicode.com/photos?albumId=${payload.album.id}`)
      const json = await response.json()
      ctx.commit('setPhotosForCurrentAlbum', json)
    }
  },
}
