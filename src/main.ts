import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import '@11thdeg/cyan-next/dist/style.css'
import '@11thdeg/cyan-next'
import { VueFire, VueFireAuth } from 'vuefire'
import { router } from './pages/router'
import { firebaseApp } from './firebase'

const app = createApp(App)
app.use(router)
app.use(VueFire, {
    firebaseApp,
    modules: [
      VueFireAuth(),
    ],
  })
app.mount('#app')

// Force Light Theme
// document.body.classList.add('light')
