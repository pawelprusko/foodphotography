<template>
  <div class="about">
    <v-container class="shape mt-4">
      <v-layout justify-center align-center class="shape" column>
        <div>
          <img src="../logo/face.jpg" class="face mr-4">
          <p class="text1">
            <span class="big">F</span>or as long as I remember, I really liked being in the
            <span class="k1">kitchen</span> - observing cooking people, trying new tastes and feeling this unique, intimate atmosphere. Food photography in my life is a combination of several
            <span class="k1">passions:</span> painting, writing, photography and cooking. So I try to make the pictures not only present the best possible food, but also to tell an individual story and emanate with specific
            <span class="k1">emotions.</span> Simply to make them really special!
          </p>
        </div>
        <br>
        <div>
          <img src="../logo/hand.jpg" class="hand ml-4">
          <p class="text1">
            <span class="big">I</span> think that
            <span class="k1">food</span>is one of the most intimate activities, that's why I approach each project very
            <span class="k1">individually.</span> First of all, I honestly talk with the client, think about the concept and draw a sketch. Then roll up my sleeves and get down to
            <span class="k1">work!</span>
          </p>
        </div>
        <router-link to="/home">
          <button class="visited pa-2 mt-5 mb-5">BACK
            <v-icon style="color: black">arrow_right_alt</v-icon>
          </button>
        </router-link>
      </v-layout>
    </v-container>
  </div>
</template>

<style>
.k1 {
  text-decoration: underline;
  text-decoration-style: wavy;
  text-decoration-color: rgb(151, 151, 151);
}
.big {
  font-size: 23px;
}
.face {
  width: 270px;
  height: auto;
  float: left;
}
.hand {
  width: 270px;
  height: auto;
  float: right;
}
@media (max-width: 650px) {
  .face {
    margin: 0 50px 0 100px;
  }
}
@media (max-width: 660px) {
  .hand {
    margin: 0 100px 0 120px;
  }
}
.shape {
  width: 60vw;
}
.text1 {
  font-size: 18px;
  font-family: "Times New Roman", Times, serif;
  text-align: justify;
}
@media (max-width: 520px) {
  .text1 {
    font-size: 15px;
    padding: 0px 70px 0px 70px;
  }
}
</style>

