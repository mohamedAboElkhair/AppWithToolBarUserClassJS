<template>
  <div id="inspire">
   
    <v-navigation-drawer clipped fixed v-model="drawer" app dark>
      <v-list dense>
          <div class="hidden-sm-and-down" >   
          <router-link 
          v-for="item in items" 
             v-if="item.show" 
             :key="item.title"
            :to="item.to"
            >
        <v-list-tile >
          <v-list-tile-action>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{item.title}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
       </router-link>
       </div>
      </v-list>
     
    </v-navigation-drawer>
    <v-toolbar app fixed clipped-left dark>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Application</v-toolbar-title>
       <v-spacer></v-spacer>
      
    </v-toolbar>
   
  
</div>
  
</template>

<script>
export default {
 data() {
   return {
     drawer:true,
     items:[
       {title: 'Home', to:'/home', show:User.loggedIn(),icon:'home'  }, 
       {title: 'Settings', to:'/settings',show:User.loggedIn(),icon:'settings'},
       {title:'Login', to:'/login',show:!User.loggedIn()},
        {title:'LogOut', to:'/logout',show:User.loggedIn(),icon:'logout'},
     ],

   }
 },  
 created() {
    EventBus.$on('logout',()=>{
      User.logout()
    })
  }
}
</script>

<style>

</style>
