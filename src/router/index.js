import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import ZimmerView from '@/views/ZimmerView.vue'
// import KontaktView from '@/views/KontaktView.vue'

const routes = [
  { path: '/', name: 'Home', component: HomeView }
//   { path: '/zimmer', name: 'Zimmer', component: ZimmerView },
//   { path: '/kontakt', name: 'Kontakt', component: KontaktView },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router