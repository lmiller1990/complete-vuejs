import { createStore } from 'vuex'

import { albums } from './albums.js'
import { photos } from './photos.js'

export const store = createStore({
  modules: {
    albums,
    photos
  }
})