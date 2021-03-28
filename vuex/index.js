import { createApp } from 'vue'
import { store } from './store.js'
import AppOptions from './AppOptions.vue'

const app = createApp(AppOptions)
app.use(store)
app.mount('#app')