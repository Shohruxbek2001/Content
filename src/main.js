import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'
import './index.css'
import i18n from "./i18n"
import DashboardLayout from './components/layouts/DashboardLayout.vue'



const app = createApp(App)

app.component('dashboard-layout', DashboardLayout)

app.use(router)
app.use(i18n)
app.mount('#app')

