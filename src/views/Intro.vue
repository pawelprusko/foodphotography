<template>
  <v-app>
    <v-container class="hero" fill-height>
      <v-layout justify-center align-center column>
        <img class="heroImg" src="../logo/sankt.png" alt>
        <router-link to="/home">
          <button class="visit pa-2 mt-5">DALEJ</button>
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
  background-image: url(../foty/litwa.jpeg);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  min-width: 100%;
  min-height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  filter: grayscale(100%);
}
.heroImg {
  width: 70vw;
}

.visit {
  text-decoration: none;
  color: white;
  outline: none;
  border: 5px solid white;
  font-size: 45px;
  letter-spacing: 7px;
  transition: 0.4s;
}

.visit:hover {
  border-radius: 50px;
}

@media (max-width: 900px) {
  .heroImg {
    width: 85vw;
  }
}

@media (max-width: 700px) {
  .visit {
    font-size: 20px;
    border: 4px solid white;
  }
}
</style>
