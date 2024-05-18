import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
// import PrimeVue from 'primevue/config';
// import PrimeVueStyled from 'primevue/styled';
// import 'primevue/resources/themes/lara-dark-teal/theme.css'

import PrimeVue from 'primevue/config'

// import Button from 'primevue/button'
// import InputText from 'primevue/inputtext'

import App from './App.vue'
import router from './router'
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.js";


const app = createApp(App)
app.use(PrimeVue, { ripple: true })
// app.component('Button', Button)
// app.component('InputText', InputText)
app.use(createPinia())
app.use(router)

app.mount('#app')
