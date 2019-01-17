<template>
<div>
    <toolbar></toolbar>
  <v-content >
  <router-view></router-view>
   </v-content> 
    <app-footer></app-footer>
    
</div>

</template>

<script>
import Toolbar from './Toolbar.vue'
import AppFooter from './AppFooter.vue'
import Login from './Auth/Login.vue'

export default {
    components:{Toolbar,AppFooter,Login}
  
}
</script>

<style>

</style>
