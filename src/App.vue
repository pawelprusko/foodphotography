<template>
  <v-app>
    <transition name="router-anim" enter-active-class="animated fadeInLeft">
      <router-view/>
    </transition>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",
  components: {
    HelloWorld
  },
  data() {
    return {
      //
    };
  }
};
</script>

<style scoped>
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";

.fadeInLeft {
  -webkit-animation-name: fadeInLeft;
  animation-name: fadeInLeft;
  -webkit-animation-duration: 0.3s;
  animation-duration: 0.3s;
}

img {
  height: 50px;
  display: inline-block;
}
@media (max-width: 400px) {
  img {
    height: 45px;
  }
}
</style>

