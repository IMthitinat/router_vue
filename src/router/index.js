import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import EventDetails from '@/views/event/Details.vue'
import  EventLayout from  '@/views/event/Layout.vue'
import EventAirline from '@/views/event/Airline.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    props: (route) => ({
      page: parseInt(route.query.page) || 0,
      perPage: parseInt(route.query.perPage) || 10
    })
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },

  {
    
    path: '/event/:id',
    name: 'EventLayout',
    props: true,
    component: EventLayout,
    children:[ 
  {
    path: '',
    name: 'EventDetails',
    component: EventDetails,
    props: true
  },
  {
    path: 'airline',
    name: 'EventAirline',
    component: EventAirline,
    props: true
  },


    ]
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
