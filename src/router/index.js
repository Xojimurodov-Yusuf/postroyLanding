import { createRouter, createWebHistory } from 'vue-router'
import Favorites from '../components/favorites.vue'
import Main from '../components/main.vue'
import Catalog from '@/components/catalog.vue'
import Create from '@/components/create.vue'
import Accaount from '@/components/accaount.vue'
import Sms from '@/components/sms.vue'

const routes = [
  { path: '/', component: Main },
  { path: '/favorite', component: Favorites },
  { path: '/catalog', component: Catalog },
  { path: '/create', component: Create },
  { path: '/accaount', component: Accaount },
  { path: '/sms', component: Sms },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router


