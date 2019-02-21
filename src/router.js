import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Intro from './views/Intro.vue'
import Contact from './views/Contact.vue'
import sixDays1 from './views/sixDays1.vue'
import sixDays2 from './views/sixDays2.vue'
import sevenDays1 from './views/sevenDays1.vue'
import sevenDays2 from './views/sevenDays2.vue'
import eightDays1 from './views/eightDays1.vue'
import eightDays2 from './views/eightDays2.vue'
import nineDays1 from './views/nineDays1.vue'
import nineDays2 from './views/nineDays2.vue'
import nineDays3 from './views/nineDays3.vue'
import tenDays1 from './views/tenDays1.vue'
import tenDays2 from './views/tenDays2.vue'
import tenDays3 from './views/tenDays3.vue'
import tenDays4 from './views/tenDays4.vue'
import elevenDays1 from './views/elevenDays1.vue'
import seventeenDays1 from './views/seventeenDays1.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'home',
      component: Intro
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/home',
      name: 'intro',
      component: Home
    },
    {
      path: '/sixDays1',
      name: 'sixDays1',
      component: sixDays1
    },
    {
      path: '/sixDays2',
      name: 'sixDays2',
      component: sixDays2
    },
    {
      path: '/sevenDays1',
      name: 'sevenDays1',
      component: sevenDays1
    },
    {
      path: '/sevenDays2',
      name: 'sevenDays2',
      component: sevenDays2
    },
    {
      path: '/eightDays1',
      name: 'eightDays1',
      component: eightDays1
    },
    {
      path: '/eightDays2',
      name: 'eightDays2',
      component: eightDays2
    },
    {
      path: '/nineDays1',
      name: 'nineDays1',
      component: nineDays1
    },
    {
      path: '/nineDays2',
      name: 'nineDays2',
      component: nineDays2
    },
    {
      path: '/nineDays3',
      name: 'nineDays3',
      component: nineDays3
    },
    {
      path: '/tenDays1',
      name: 'tenDays1',
      component: tenDays1
    },
    {
      path: '/tenDays2',
      name: 'tenDays2',
      component: tenDays2
    },
    {
      path: '/tenDays3',
      name: 'tenDays3',
      component: tenDays3
    },
    {
      path: '/tenDays4',
      name: 'tenDays4',
      component: tenDays4
    },
    {
      path: '/elevenDays1',
      name: 'elevenDays1',
      component: elevenDays1
    },
    {
      path: '/seventeenDays1',
      name: 'seventeenDays1',
      component: seventeenDays1
    },
  ]
})