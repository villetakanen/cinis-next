import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import '@11thdeg/cyan-next/dist/style.css'
import '@11thdeg/cyan-next'
import { createPinia } from 'pinia'



const app = createApp(App)
const pinia = createPinia()
app.use(pinia)
app.mount('#app')
document.body.classList.add('light')
