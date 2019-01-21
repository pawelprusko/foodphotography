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
      <div v-for="(src, index) in imgs" :key="index" @click="() => show(index)">
        <img :src="src" class="pic">
      </div>
    </div>
    <vue-easy-lightbox :visible="visible" :index="index" :imgs="imgs" @hide="handleHide" class="hidenn"></vue-easy-lightbox>
    <v-footer class="pa-3 footerAll">
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
           <v-btn flat class="btn-menu"><router-link to="/about" class="btn-menu">ABOUT</router-link></v-btn> 
          <div class="line"></div>
          <v-btn flat class="btn-menu"><router-link to="/contact" class="btn-menu" >CONTACT</router-link></v-btn>
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
          <v-btn flat class="back-btn" @click="right =!right">
            <img src="../logo/back.svg" alt class="back">
          </v-btn>
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
      divider: true,
      imgs: [
        require("@/photos/55.jpg"),
        require("@/photos/0.jpg"),
        require("@/photos/1.jpg"),
        require("@/photos/2.jpg"),
        require("@/photos/3.jpg"),
        require("@/photos/4.jpg"),
        require("@/photos/5.jpg"),
        require("@/photos/6.jpg"),
        require("@/photos/7.jpg"),
        require("@/photos/8.jpg"),
        require("@/photos/9.jpg"),
        require("@/photos/10.jpg"),
        require("@/photos/11.jpg"),
        require("@/photos/12.jpg"),
        require("@/photos/13.jpg"),
        require("@/photos/14.jpg"),
        require("@/photos/15.jpg"),
        require("@/photos/16.jpg"),
        require("@/photos/17.jpg"),
        require("@/photos/18.jpg"),
        require("@/photos/19.jpg"),
        require("@/photos/20.jpg"),
        require("@/photos/21.jpg"),
        require("@/photos/22.jpg"),
        require("@/photos/23.jpg"),
        require("@/photos/24.jpg"),
        require("@/photos/25.jpg"),
        require("@/photos/26.jpg"),
        require("@/photos/27.jpg"),
        require("@/photos/28.jpg"),
        require("@/photos/29.jpg"),
        require("@/photos/30.jpg"),
        require("@/photos/31.jpg"),
        require("@/photos/32.jpg"),
        require("@/photos/33.jpg"),
        require("@/photos/34.jpg"),
        require("@/photos/35.jpg"),
        require("@/photos/57.jpg"),
        require("@/photos/36.jpg"),
        require("@/photos/37.jpg"),
        require("@/photos/38.jpg"),
        require("@/photos/39.jpg"),
        require("@/photos/40.jpg"),
        require("@/photos/41.jpg"),
        require("@/photos/42.jpg"),
        require("@/photos/44.jpg"),
        require("@/photos/45.jpg"),
        require("@/photos/46.jpg"),
        require("@/photos/47.jpg"),
        require("@/photos/48.jpg"),
        require("@/photos/49.jpg"),
        require("@/photos/50.jpg"),
        require("@/photos/51.jpg"),
        require("@/photos/52.jpg"),
        require("@/photos/43.jpg"),
        require("@/photos/53.jpg"),
        require("@/photos/54.jpg"),
        require("@/photos/56.jpg")
      ],
      visible: false,
      index: 0 // default
    };
  },
  methods: {
    show(index) {
      this.index = index;
      this.visible = true;
    },
    handleHide() {
      this.visible = false;
    }
  }
};
</script>

<style scoped>

.pic {
  width: 100%;
  height: auto;
  padding: 1%;
  cursor: pointer;
  transition: .4s;
}

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
@media (max-width: 800px) {
  .gallery {
    column-count: 2;
  }
}
@media (max-width: 430px) {
  .gallery {
    column-count: 1;
  }
  .hidenn{
  display: none;
  }
  .pic{
    cursor:auto;
  }
}
.footer {
  font-size: 13px;
}
.footerAll {
  background: rgb(218, 218, 218);
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
  text-decoration: none;
  color: black;
}
.social {
  width: 25px;
  height: 25px;
  margin: 50px 5px 0px 5px;
  transition: 0.15s;
}
.social-footer {
  width: 25px;
  height: 25px;
  margin: 0px 5px 0px 5px;
  transition: 0.2s;
}
.social-footer:hover,
.social:hover {
  transform: scale(1.2);
}
.back {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.back-btn {
  border-radius: 50%;
  width: 10px;
  height: 80px;
  top: 100px;
  display: none;
}
@media (max-width: 450px) {
  .back-btn {
    display: block;
  }
}
</style>
