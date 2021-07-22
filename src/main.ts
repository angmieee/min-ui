import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { createWebHashHistory, createRouter } from 'vue-router'
import Dad from './components/dad.vue'
import Son from './components/son.vue'

const history = createWebHashHistory()
const router = createRouter({
  history,
  routes: [
    { path: '/dad', component: Dad },
    { path: '/son', component: Son },
  ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
