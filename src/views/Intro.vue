<template>
  <v-app>
    <v-container class="hero" fill-height>
      <v-layout justify-center align-center column>
        <img class="heroImg" src="../logo/white.png" alt>
        <router-link to="/home">
          <button class="visit pa-2 mt-5">CONTINUE</button>
        </router-link>
       
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      //
    };
  }
};
</script>

<style>
.hero {
  margin: 0;
  box-sizing: border-box;
  text-align: left;
  background-image: url(../photos/hero.jpg);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  min-width: 100%;
  min-height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
.heroImg {
  width: 70vw;
}
@media (max-width: 900px) {
  .heroImg {
    width: 85vw;
  }
}
.visit {
  text-decoration: none;
  color: white;
  outline: none;
  border: 4px solid white;
  font-size: 30px;
  letter-spacing: 7px;
  transition: 0.4s;
}
.visit:hover {
  border-radius: 50px;
}
</style>
