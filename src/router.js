import Vue from 'vue';
import Router from 'vue-router';
import LandingPage from './views/LandingPage.vue';
import LogIn from './views/LogIn.vue';
import SignUp from './views/SignUp.vue';
import SearchResult from './views/SearchResult.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: LandingPage,
    },
    {
      path: '/login',
      name: 'login',
      component: LogIn,
    },
    {
      path: '/signup',
      name: 'singup',
      component: SignUp,
    },
    {
      path: '/search',
      name: 'search',
      component: SearchResult,
    },
  ],
});
