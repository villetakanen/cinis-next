import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import '@11thdeg/cyan-next/dist/style.css'
import '@11thdeg/cyan-next'
import { createFirebaseSession } from './plugins/firebaseSession'
import { router } from './pages/router'

const app = createApp(App)
app.use(router)
app.use(createFirebaseSession())
app.mount('#app')

// Force Light Theme
// document.body.classList.add('light')
