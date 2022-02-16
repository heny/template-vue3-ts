import { createApp as createClientApp } from 'vue'
import App from './App.vue'
import axios from '@/utils/request'
import { inBrowser } from '@/utils'
import router from './router'
import store from './store'

import '@/assets/styles/index.scss'

function createApp() {
  const app = createClientApp(App)

  app.config.globalProperties.$http = axios

  app.use(router)

  app.use(store)

  return { app }
}

if (inBrowser) {
  const { app } = createApp()
  app.mount('#app')
}
