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

const BASE_URL = "http://109.201.96.70:8081/api"

const app = createApp(App)
app.config.globalProperties.$BASE_URL = BASE_URL;
app.use(PrimeVue, { ripple: true })
app.use(createPinia())
app.use(router)

app.mount('#app')
