import { createRouter, createWebHistory } from 'vue-router'
import Layout from '../components/Layout.vue'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Services from '@/views/Services.vue'
import Contact from '@/views/Contact.vue'

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      { path: '', name: 'Home', component: Home },
      { path: 'about', name: 'About', component: About },
      { path: 'services', name: 'Services', component: Services },
      { path: 'contact', name: 'Contact', component: Contact },
    ]
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
