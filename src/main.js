import '@/assets/main.css'
import '@/assets/fonts/style.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './components/HomePage.vue'
import AboutUs from './components/AboutUs.vue'
import Categories from './components/Categories.vue'
import CategoryItems from './components/CategoryItems.vue'
import ItemGallery from './components/ItemGallery.vue'
import Catalogue from './components/Catalogue.vue'
import ContactUs from './components/ContactUs.vue'
import { createHead } from '@vueuse/head'

const routes = [
  { path: '/', component: HomePage },
  { path: '/about', component: AboutUs },
  { path: '/categories', component: Categories },
  { path: '/category/:id', component: CategoryItems },
  { path: '/item/:id', component: ItemGallery },
  { path: '/catalogue', component: Catalogue },
  { path: '/contact', component: ContactUs },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const head = createHead()

createApp(App).use(router).use(head).mount('#app')
