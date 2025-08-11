
import './mocks'
import './css/custom.css'


import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())

// if(import.meta.env.DEV){
//     import('./mocks')
// }

app.use(router)

app.mount('#app')
