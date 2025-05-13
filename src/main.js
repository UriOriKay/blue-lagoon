import { createApp } from 'vue'
import './global.css'
import App from './App.vue'
import router from './router'
import AOS from 'aos'
import 'aos/dist/aos.css'


createApp(App).use(router).mount('#app')

AOS.init()
