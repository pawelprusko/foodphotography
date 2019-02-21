<template>
  <v-app>
    <v-toolbar app prominent flat height="90px" scroll-threshold="150" scroll-off-screen="true">
      <p></p>
      <v-container pt-3>
        <v-layout justify-space-around align-center>
          <router-link to="/">
            <img class="logo" src="../logo/hero7.png" alt>
          </router-link>
        </v-layout>
      </v-container>
      <v-toolbar-side-icon class="hamb" @click="right =!right"></v-toolbar-side-icon>
    </v-toolbar>
    <div class="gallery">
      <router-link to="/sixDays1">
        <div class="test55">
          <img src="../foty/wilno-1.jpg" class="pic">
          <div class="overlay">
            <div class="fontImg">
              <div class="test33">
                <p class="abc" style="text-align: center">Wilno-Troki-Kowno-Rumszyszki</p>
                <p class="abc days2" style="text-align: center">3 dni</p>
                <p style="text-align: center" class="days">Litwa</p>
              </div>
            </div>
          </div>
        </div>
      </router-link>

      <router-link to="/sixDays2">
        <div class="test55">
          <img src="../foty/troki.jpg" class="pic">
          <div class="overlay">
            <div class="fontImg">
              <div class="test33">
                <p style="text-align: center">Wilno-Troki</p>
                <p style="text-align: center" class="days2 abc">1 dzień</p>
                <p style="text-align: center" class="days">Litwa</p>
              </div>
            </div>
          </div>
        </div>
      </router-link>

      <router-link to="/sevenDays1">
        <div class="test55">
          <img src="../foty/ryby.jpg" class="pic">
          <div class="overlay">
            <div class="fontImg">
              <div class="test33">
                <p style="text-align: center">Połów dorszy</p>
                <p style="text-align: center" class="days2">1 dzień</p>
                <p style="text-align: center" class="days">Litwa</p>
              </div>
            </div>
          </div>
        </div>
      </router-link>

      <router-link to="/sevenDays2">
        <div class="test55">
          <img src="../foty/palanga.jpg" class="pic">
          <div class="overlay">
            <div class="fontImg">
              <div class="test33">
                <p style="text-align: center">Kłajpeda-Pałanga</p>
                <p style="text-align: center" class="days2">1 dzień</p>
                <p style="text-align: center" class="days">Litwa</p>
              </div>
            </div>
          </div>
        </div>
      </router-link>

      <router-link to="/eightDays1">
        <div class="test55">
          <img src="../foty/basen.jpg" class="pic">
          <div class="overlay">
            <div class="fontImg">
              <div class="test33">
                <p style="text-align: center">Druskienniki-AquaPark-SnowArena</p>
                <p style="text-align: center" class="days2">1 dzień</p>
                <p style="text-align: center" class="days">Litwa</p>
              </div>
            </div>
          </div>
        </div>
      </router-link>

      <router-link to="/eightDays2">
        <div class="test55">
          <img src="../foty/klajpeda.jpg" class="pic">
          <div class="overlay">
            <div class="fontImg">
              <div class="test33">
                <p style="text-align: center">Mierzeja Kurońska-Kłajpeda-Pałanga</p>
                <p style="text-align: center" class="days2">2 dni</p>
                <p style="text-align: center" class="days">Litwa</p>
              </div>
            </div>
          </div>
        </div>
      </router-link>

      <router-link to="/nineDays1">
        <div class="test55">
          <img src="../foty/grodno.jpg" class="pic">
          <div class="overlay">
            <div class="fontImg">
              <div class="test33">
                <p style="text-align: center">Grodno</p>
                <p style="text-align: center" class="days2">1 dzień</p>
                <p style="text-align: center" class="days">Białoruś</p>
              </div>
            </div>
          </div>
        </div>
      </router-link>

      <router-link to="/nineDays2">
        <div class="test55">
          <img src="../foty/b1.jpg" class="pic">
          <div class="overlay">
            <div class="fontImg">
              <div class="test33">
                <p style="text-align: center">Białoruś-Grodno-Kanał Augustowski</p>
                <p style="text-align: center" class="days2">2 dni</p>
                <p style="text-align: center" class="days">Białoruś</p>
              </div>
            </div>
          </div>
        </div>
      </router-link>

      <router-link to="/nineDays3">
        <div class="test55">
          <img src="../foty/b2.jpg" class="pic">
          <div class="overlay">
            <div class="fontImg">
              <div class="test33">
                <p style="text-align: center">Białoruś-Grodno-Odelsk-Kopciówka</p>
                <p style="text-align: center" class="days2">3 dni</p>
                <p style="text-align: center" class="days">Białoruś</p>
              </div>
            </div>
          </div>
        </div>
      </router-link>

      <router-link to="/tenDays1">
        <div class="test55">
          <img src="../foty/riga.jpg" class="pic">
          <div class="overlay">
            <div class="fontImg">
              <div class="test33">
                <p style="text-align: center">Ryga-Szawle</p>
                <p style="text-align: center" class="days2">1 dzień</p>
                <p style="text-align: center" class="days">Szlak Bałtycki</p>
              </div>
            </div>
          </div>
        </div>
      </router-link>

      <router-link to="/tenDays2">
        <div class="test55">
          <img src="../foty/riga2.jpg" class="pic">
          <div class="overlay">
            <div class="fontImg">
              <div class="test33">
                <p style="text-align: center">Ryga-Jurmala-Rundale</p>
                <p style="text-align: center" class="days2">2 dni</p>
                <p style="text-align: center" class="days">Szlak Bałtycki</p>
              </div>
            </div>
          </div>
        </div>
      </router-link>

      <router-link to="/tenDays3">
        <div class="test55">
          <img src="../foty/litwa7.jpg" class="pic">
          <div class="overlay">
            <div class="fontImg">
              <div class="test33">
                <p style="text-align: center">Szlak Bałtycki</p>
                <p style="text-align: center" class="days2">5 dni</p>
                <p style="text-align: center" class="days">Szlak Bałtycki</p>
              </div>
            </div>
          </div>
        </div>
      </router-link>
    </div>

    <div class="russia">
      <div class="russiaB">
        <div class="russiaImage">
          <div class="fillRussia">
            <div style="margin-top: 20px" class>
              <p class="russiaText" style="text-align: center">WYCIECZKI</p>
              <br>
              <P style="text-align: center" class="russiaText">DO</P>
              <br>
              <P class="russiaText" style="text-align: center">ROSJI</P>
            </div>
            <a href="http://sanktpetersburg.com.pl/" target="blank">
              <button class="visitedR pa-2 mt-5">DALEJ
                <v-icon style="color: black">arrow_right_alt</v-icon>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>

    <v-footer class="pa-3 footerAll">
      <div>made & designed by Pawel Prusko</div>
      <v-spacer></v-spacer>
      <div class="footer">
        <span>Sambia &copy; {{ new Date().getFullYear() }}</span>
      </div>
    </v-footer>
    <v-navigation-drawer app v-model="right" class="white">
      <v-container style="height: 75vh" pa-0>
        <v-layout column justify-center align-center style="height: 75vh">
          <v-btn flat class="btn-menu white">
            <router-link to="/about" class="btn-menu">o firmie</router-link>
          </v-btn>
          <div class="line"></div>
          <v-btn flat class="btn-menu">
            <router-link to="/contact" class="btn-menu">kontakt</router-link>
          </v-btn>
          <div class="line"></div>
          <v-btn flat class="btn-menu">
            <a href="https://sambia.tripsomnia.com/pl#reviews" class="btn-menu" target="blank">opinie o nas </a>
          </v-btn>
          <div class="line"></div>
          <v-btn flat class="btn-menu">
            <a href="https://visa.kdmid.ru/" class="btn-menu" target="blank">wniosek o wizę</a>
          </v-btn>

          <v-btn flat class="back-btn" @click="right =!right">
            <img src="../logo/back.svg" alt class="back">
          </v-btn>
        </v-layout>
      </v-container>
    </v-navigation-drawer>

    <a href="https://www.facebook.com/biurosambia/" target="_blank">
      <div class="rightFb1">
        <img src="../logo/fb-final.png" alt class="fbFix1">
      </div>
    </a>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      right: false,
      divider: true,

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
.russiaText {
  font-size: 50px;
  color: black;
  background-color: white;
  letter-spacing: 6px;
  font-weight: 400;
  display: inline;
}

.visitedR {
  text-decoration: none;
  color: black;
  outline: none;
  border: 4px solid white;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 7px;
  transition: 0.4s;

  margin-bottom: 40px;
  background-color: white;
}
.visitedR:hover {
  border-radius: 50px;
}

.fillRussia {
  height: 100%;
  width: 100%;
  background-color: rgba(53, 53, 53, 0.2);
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
.russiaImage {
  width: 100%;
  height: 500px;
  background-image: url(../img/14.jpg);

  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.russiaB {
  margin: 0 390px 0 380px;
  padding-bottom: 40px;
}
.russia {
  background-color: rgb(245, 245, 245);
  padding-top: 40px;
  margin-bottom: 40px;
}
@media (max-width: 1600px) {
  .russiaB {
    margin: 0 290px 0 280px;
  }
}
@media (max-width: 1300px) {
  .russiaB {
    margin: 0 200px 0 190px;
  }
}
@media (max-width: 1080px) {
  .russiaB {
    margin: 0 10px 0 10px;
  }
  .russiaImage {
    height: 450px;
  }
}
@media (max-width: 810px) {
  .russiaImage {
    height: 390px;
  }
}
@media (max-width: 510px) {
  .russiaImage {
    height: 300px;
  }
}

.hamb {
  transform: scale(1.7);
}

.rightFb1 {
  position: fixed;
  top: 43vh;
  right: 0px;
  background-color: #f59c00;
  width: 53px;
  height: 53px;
  border-radius: 50%;
  transition: 0.2s;
}
.rightFb1:hover {
  background-color: rgb(245, 131, 0);
}

.fbFix1 {
  position: relative;
  height: 32px;
  top: 11px;
  left: 17px;
  transition: 0.2s;
}
.rightFb1:hover .fbFix1 {
  transform: scale(1.13);
}

.pic {
  width: 97%;
  height: 200px;
  /* margin: 5px 5px 5px 5px; */
  cursor: pointer;
  transition: 0.4s;
  position: relative;
  margin-bottom: 10px;
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
  margin-bottom: 30px;
  margin-top: 110px;
  margin-left: 10px;
}

.footer {
  font-size: 14px;
}
.footerAll {
  background: #f5f5f5;
  font-size: 14px;
}
.line {
  width: 80px;
  height: 2.2px;
  background-color: rgb(231, 230, 230);
  margin: 28px 0 28px 0;
}
.btn-menu {
  width: 100%;
  font-size: 18px;
  letter-spacing: 4px;
  text-decoration: none;
  color: black;
  margin: 0 0 0 0;
}
.social {
  width: 19px;
  height: 19px;
  margin: 50px 5px 0px 5px;
  transition: 0.15s;
}
.social-footer {
  width: 19px;
  height: 19px;
  margin: 0px 3px 0px 3px;
  transition: 0.2s;
}
.social-footer:hover,
.social:hover {
  transform: scale(1.2);
}
.back {
  width: 30px;
  height: 30px;
  border-radius: 50%;
}
.back-btn {
  border-radius: 50%;
  width: 10px;
  height: 80px;
  top: 60px;
  display: none;
}
@media (max-width: 450px) {
  .back-btn {
    display: block;
  }
}

.test55 {
  position: relative;
}

.test55:hover .overlay {
  background-color: rgba(53, 53, 53, 0.6);
}
.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(93, 93, 94, 0.486);
  opacity: 1;
  transition: 0.2s;
  width: 97%;
  height: 200px;
}

.fontImg {
  opacity: 1;
  width: 100%;
  height: 200px;
  font-size: 28px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 10px;
}

.test55:hover .overlay {
  opacity: 1;
}

.test33 {
  width: 120px;

  line-height: 27px;
  font-weight: 100;
}
.days {
  margin-top: 13px;
  font-size: 35px;
  font-weight: 200;
  margin-bottom: 0px;
  letter-spacing: 7px;
}
.abc {
}
.days2 {
  font-weight: 300;
  font-size: 30px;
}
.white {
  margin-top: 100px;
}

@media (min-width: 1080px) {
  .gallery {
    margin-right: 190px;
    margin-left: 190px;
  }
  .pic {
    height: 250px;
  }
  .overlay {
    height: 250px;
  }
  .fontImg {
    height: 250px;
  }
}
@media (max-width: 800px) {
  .gallery {
    column-count: 2;
  }
}

@media (max-width: 510px) {
  .gallery {
    column-count: 1;
  }
  .hidenn {
    display: none;
  }
  .pic {
    cursor: auto;
  }
  .russiaText {
    font-size: 40px;
  }
}
</style>
