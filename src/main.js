import Vue from 'vue'
import Vuex from 'vuex';
import { APP_STORE } from '../store';
import VueRouter from 'vue-router'
import App from './App.vue'

import MainPage from './components/MainPage.vue'
import AnimatedHamburger from './components/AnimatedHamburger.vue'
import CarouselOverlay from './components/CarouselOverlay.vue'
import Buttons from './components/Buttons.vue'
import PageNotFound from './components/PageNotFound.vue'


Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Vuex)

const routes = [
  { path: '/', component: MainPage },
  { path: '/animated-hamburger', component: AnimatedHamburger },
  { path: '/carousel-overlay', component: CarouselOverlay },
  { path: '/buttons', component: Buttons },
  { path: '/404', component: PageNotFound }, { path: '*', redirect: '/404' }
]

const router = new VueRouter({
  mode: 'history',
  routes, // сокращённая запись для `routes: routes`
})

const store = new Vuex.Store(APP_STORE);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
