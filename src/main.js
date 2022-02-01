import { createApp } from 'vue'
import './assets/styles.css'
import App from './App.vue'
import router from './router'
import store from './store'

import VueGoogleMaps from '@fawmi/vue-google-maps'

const maps = (VueGoogleMaps, {
  load: {
    key:'YOUR_API_KEY_COMES_HERE'
  }
})

createApp(App).use(store).use(router).use(maps).mount('#app')
