import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'

import App from './App.vue'
import router from './router'
import axios from 'axios'
import { useForms } from './stores/forms'
import { useNotificationsStore } from './stores/notifications'

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.js";

const app = createApp(App)
const pinia = createPinia()
app.use(PrimeVue, { ripple: true })
app.use(pinia)
app.use(router)

axios.interceptors.response.use(
  response => response,
  error => {
    // Проверяем, если ошибка имеет статус 401
    if (error.response.status === 401) {
      // Открываем форму авторизации
      // const notificationStore = useNotificationsStore(pinia)
      const formsStore = useForms(pinia)
      formsStore.openLayout('login')
      // formsStore.openLayout('login')
    }
    return Promise.reject(error)
  }
)

app.mount('#app')
