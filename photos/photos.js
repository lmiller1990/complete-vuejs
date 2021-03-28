export const photos = {
  namespaced: true,

  state() {
    return {
      photosForCurrentAlbum: [],
      cache: {}
    }
  },

  mutations: {
    setPhotosForCurrentAlbum(state, payload) {
      state.photosForCurrentAlbum = payload.photos
      state.cache[payload.albumId] = payload.photos
    }
  },

  actions: {
    async fetchPhotosForAlbum(ctx, { id }) {
      if (ctx.state.cache[id]) {
        ctx.commit('setPhotosForCurrentAlbum', {
          photos: ctx.state.cache[id],
          albumId: id
        })
        return
      }

      const response = await window.fetch(
        `https://jsonplaceholder.typicode.com/photos?albumId=${id}`)
      const json = await response.json()
      ctx.commit('setPhotosForCurrentAlbum', {
        albumId: id,
        photos: json
      })
    }
  },
}
