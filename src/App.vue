<template>
  <v-app>
    <router-view>
    <v-toolbar app prominent flat>
     <v-container pt-2>
       <v-layout justify-center align-center  align-baseline>
      
      <img src="./logo/template.png" alt="">
      </v-layout>
      </v-container>
     
    </v-toolbar>

    <v-content>
      <HelloWorld/>
    </v-content>
    </router-view>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data () {
    return {
      //
    }
  }
}
</script>

<style lang="scss" scoped>
img{
  height: 50px;
  display: inline-block;
}
@media (max-width: 400px) {
  img {
    height: 45px;
  }
}
</style>

