import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Login from '../components/Auth/Login.vue'
import Signup from '../components/Auth/Signup.vue'
import Logout from '../components/Auth/Logout.vue'
import Home from  '../components/home/Home.vue'
const routes = [
    { path: '/login', component: Login ,name:'login'  },
    { path: '/logout', component: Logout },
   { path: '/signup', component: Signup },
   { path: '/home', component: Home , name:'home' },

 
  ]
const router = new VueRouter({
routes, // short for `routes: routes`
hashbang : false,   //this about remove # from url 
mode :'history'
})  



export default router