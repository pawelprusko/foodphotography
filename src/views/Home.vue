<template>
  <v-app>
    <v-toolbar app prominent flat scroll-threshold="150" scroll-off-screen="true">
      <p></p>
      <v-container pt-2>
        <v-layout justify-space-around align-center>
          <router-link to="/">
            <img class="logo" src="../logo/template.png" alt>
          </router-link>
        </v-layout>
      </v-container>
      <v-toolbar-side-icon @click="right =!right"></v-toolbar-side-icon>
    </v-toolbar>
    <div class="gallery">
      <img src="../photos/55.jpg" alt class="galleryImages">
      <img src="../photos/0.jpg" alt class="galleryImages">
      <img src="../photos/1.jpg" alt class="galleryImages">
      <img src="../photos/2.jpg" alt class="galleryImages">
      <img src="../photos/3.jpg" alt class="galleryImages">
      <img src="../photos/4.jpg" alt class="galleryImages">
      <img src="../photos/5.jpg" alt class="galleryImages">
      <img src="../photos/6.jpg" alt class="galleryImages">
      <img src="../photos/7.jpg" alt class="galleryImages">
      <img src="../photos/8.jpg" alt class="galleryImages">
      <img src="../photos/9.jpg" alt class="galleryImages">
      <img src="../photos/10.jpg" alt class="galleryImages">
      <img src="../photos/11.jpg" alt class="galleryImages">
      <img src="../photos/12.jpg" alt class="galleryImages">
      <img src="../photos/13.jpg" alt class="galleryImages">
      <img src="../photos/14.jpg" alt class="galleryImages">
      <img src="../photos/15.jpg" alt class="galleryImages">
      <img src="../photos/16.jpg" alt class="galleryImages">
      <img src="../photos/17.jpg" alt class="galleryImages">
      <img src="../photos/18.jpg" alt class="galleryImages">
      <img src="../photos/19.jpg" alt class="galleryImages">
      <img src="../photos/20.jpg" alt class="galleryImages">
      <img src="../photos/21.jpg" alt class="galleryImages">
      <img src="../photos/22.jpg" alt class="galleryImages">
      <img src="../photos/23.jpg" alt class="galleryImages">
      <img src="../photos/24.jpg" alt class="galleryImages">
      <img src="../photos/25.jpg" alt class="galleryImages">
      <img src="../photos/26.jpg" alt class="galleryImages">
      <img src="../photos/27.jpg" alt class="galleryImages">
      <img src="../photos/28.jpg" alt class="galleryImages">
      <img src="../photos/29.jpg" alt class="galleryImages">
      <img src="../photos/30.jpg" alt class="galleryImages">
      <img src="../photos/31.jpg" alt class="galleryImages">
      <img src="../photos/32.jpg" alt class="galleryImages">
      <img src="../photos/33.jpg" alt class="galleryImages">
      <img src="../photos/34.jpg" alt class="galleryImages">
      <img src="../photos/35.jpg" alt class="galleryImages">
      <img src="../photos/36.jpg" alt class="galleryImages">
      <img src="../photos/37.jpg" alt class="galleryImages">
      <img src="../photos/38.jpg" alt class="galleryImages">
      <img src="../photos/39.jpg" alt class="galleryImages">
      <img src="../photos/40.jpg" alt class="galleryImages">
      <img src="../photos/41.jpg" alt class="galleryImages">
      <img src="../photos/42.jpg" alt class="galleryImages">
      <img src="../photos/44.jpg" alt class="galleryImages">
      <img src="../photos/45.jpg" alt class="galleryImages">
      <img src="../photos/46.jpg" alt class="galleryImages">
      <img src="../photos/47.jpg" alt class="galleryImages">
      <img src="../photos/48.jpg" alt class="galleryImages">
      <img src="../photos/49.jpg" alt class="galleryImages">
      <img src="../photos/50.jpg" alt class="galleryImages">
      <img src="../photos/51.jpg" alt class="galleryImages">
      <img src="../photos/52.jpg" alt class="galleryImages">
      <img src="../photos/43.jpg" alt class="galleryImages">
      <img src="../photos/53.jpg" alt class="galleryImages">
      <img src="../photos/54.jpg" alt class="galleryImages">
      <img src="../photos/56.jpg" alt class="galleryImages">
      <img src="../photos/57.jpg" alt class="galleryImages">
      <!-- <img src="../photos/58.jpg" alt="" class="galleryImages"> -->
    </div>
    <v-footer class="pa-3">
      <div>
        <a href="https://www.linkedin.com/in/pawe%C5%82prusko/">
          <img src="../logo/linkedin.svg" alt class="social-footer">
        </a>
        <a href="https://www.instagram.com/pawelprusko/">
          <img src="../logo/instagram.svg" alt class="social-footer">
        </a>
        <a href="https://www.facebook.com/pruseek">
          <img src="../logo/facebook.svg" alt class="social-footer">
        </a>
      </div>
      <v-spacer></v-spacer>
      <div class="footer">
        <span>pawelprusko photography &copy; {{ new Date().getFullYear() }}</span>
      </div>
    </v-footer>

    <v-navigation-drawer app v-model="right" class="white">
      <v-container style="height: 95vh" pa-0>
        <v-layout column justify-center align-center style="height: 95vh">
          <v-btn flat class="btn-menu">ABOUT</v-btn>
          <div class="line"></div>
          <v-btn flat class="btn-menu">CONTACT</v-btn>
          <div>
            <a href="https://www.linkedin.com/in/pawe%C5%82prusko/">
              <img src="../logo/linkedin.svg" alt class="social">
            </a>
            <a href="https://www.instagram.com/pawelprusko/">
              <img src="../logo/instagram.svg" alt class="social">
            </a>
            <a href="https://www.facebook.com/pruseek">
              <img src="../logo/facebook.svg" alt class="social">
            </a>
          </div>
          <v-btn flat class="back-btn" @click="right =!right"><img src="../logo/back.svg" alt="" class="back"></v-btn>
        </v-layout>
      </v-container>
    </v-navigation-drawer>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data() {
    return {
      right: false,
      divider: true
    };
  }
};
</script>

<style scoped>
.logo {
  height: 50px;
  display: inline-block;
}
@media (max-width: 400px) {
  .logo {
    height: 45px;
  }
}
@media (max-width: 360px) {
  .logo {
    height: 32px;
  }
}
@media (max-width: 280px) {
  .logo {
    height: 27px;
  }
}
.gallery {
  line-height: 0;
  column-count: 3;
  column-gap: 0;
  padding: 2%;
  margin-top: 50px;
}
.galleryImages {
  width: 100%;
  height: auto;
  padding: 1%;
}
@media (max-width: 800px) {
  .gallery {
    column-count: 2;
  }
}
@media (max-width: 430px) {
  .gallery {
    column-count: 1;
  }
}
.footer {
  font-size: 13px;
}
.line {
  width: 90px;
  height: 3px;
  background-color: black;
}
.btn-menu {
  width: 100%;
  font-size: 18px;
  letter-spacing: 5px;
}
.social {
  width: 25px;
  height: 25px;
  margin: 50px 5px 0px 5px;
  transition: .15s;
}
.social-footer {
  width: 25px;
  height: 25px;
  margin: 0px 5px 0px 5px;
  transition: .2s;
}
.social-footer:hover, .social:hover{
  transform: scale(1.2);
}
.back{
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.back-btn{
  border-radius: 50%;
  width: 10px;
  height: 80px;
  top: 100px;
  display: none;
}
@media (max-width: 450px) {
  .back-btn{
    display: block;
  }
}
  
</style>
