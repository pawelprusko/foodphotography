<template>
  <div class="about">
    <v-container class="shape mt-4">
      <v-layout class="shape" justify-center align-center column>
        <div class="textContent" justify-center align-center>
          <h3 class="mb-4">Druskienniki - Aqua Park - Snow Arena - 1 dzień z Mazur</h3>
          <h3>Terminy:</h3>
          <p>Czwartki - od lipca 2019</p>
          <h3>Cena:</h3>
          <p>Wilkasy, Giżycko, Wydminy, Stare Juchy, Ełk - 100 zł./os.,
            <br>Olecko, Suwałki, Augustów - 80 zł./os.
            <br>
          </p>
          <p>Dzieci do 3 lat - za darmo
            <br>Dzieci do 10 lat - 50% grais
          </p>

          <h3 class="mb-2">Program:</h3>

          <p>
            Wyjazd zgodnie z rozkładem jazdy;
            10:00 przyjazd do Druskiennik – zwiedzanie najpiękniejszego sanatorium na Litwie
            Do wyboru:
            <br>AQUAPARK – Jeden z największych w Europie 25 tyś. m kw, max 5 godz. (cennik na stronie www.akvapark.lt),
            <br>SNOWARENA- stok narciarski pod dachem czynny cały rok, na świecie jest takich obiektów zaledwie 50, pobyt maksymalnie 5 godz. ( cennik usług na stronie www.snowarena.lt ),
            <br>16:00 wyjazd w drogę powrotną.
            Powroty w godzinach wieczornych od. 18:00 do godz.22:00
          </p>
          <h3>Rozkład jazdy</h3>
          <p>6:20 Wilkasy (przystanek przy rondzie),
            <br>6:30 Giżycko (duży parking na ul. Dąbrowskiego),
            <br>6:50 Wydminy (parking przy sklepie ABC),
            <br>7:05 Stare Juchy (Centrum, przystanek ul. Ełcka przy kościele, Policji),
            <br>7:30 Ełk (dworzec PKS/PKP),
            <br>7:30 Olecko (parking przy BT Sambia),
            <br>8:15 AUGUSTÓW ( ul. Kościelna 10 naprzeciw Pizzeri Zielona),
            <br>8:45 Suwałki (ul. Hamerszmita przy IT)
            <br>
          </p>
          <h3>Cena zawiera:</h3>
          <p>transport autokarem z WC i klimatyzacją,
            <br>ubezpieczenie KL i NNW,
            <br>

            opieka pilota,
          </p>

          <h3>Cena nie zawiera:</h3>
          <p>biletów wstępów zgodnie z cennikami na stronie.</p>
        </div>
<div class="reserv">
          <a
            href="https://sambia.tripsomnia.com/pl/p/303-1-dzien-wycieczka-do-druskiennik-aquapark-snowarena-gizycko-elk-olecko-stare-juchy"
            target="_blank"
            style="text-decoration: none"
          >
            <div class="rightFb">
              <img src="../logo/event-svg.svg" alt class="fbFix">
              <p class="fbText">rezerwuj</p>
            </div>
          </a>
        </div>
        <router-link to="/home" class="buttonR">
          <button class="visited pa-2 mt-5">WRÓĆ
            <v-icon style="color: black">arrow_right_alt</v-icon>
          </button>
        </router-link>
      </v-layout>
    </v-container>
  </div>
</template>

<style>
.about {
  margin-left: 0px;
  padding-left: 0px;
}
.textContent {
  width: 75vw;
  text-align: justify;
  line-height: 26px;
}
.shape {
  width: 20vw;
  display: flex;
}
.visited {
  text-decoration: none;
  color: rgb(8, 8, 8);
  outline: none;
  border: 4px solid rgb(8, 8, 8);
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 7px;
  transition: 0.4s;
  margin-bottom: 40px;
  width: 150px;
}
.visited:hover {
  border-radius: 50px;
}
</style>

