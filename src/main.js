import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'

import App from './App.vue'
import router from './router'
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.js";


const app = createApp(App)
const pinia = createPinia()
app.use(PrimeVue, { ripple: true })
app.use(pinia)
app.use(router)

app.mount('#app')
