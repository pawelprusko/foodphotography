<template>
  <div class="about">
    <v-container class="shape mt-4">
      <v-layout class="shape" justify-center align-center column>
        <div class="textContent" justify-center align-center>
          <h3 class="mb-4">Grodno 1 dzień z Mazur</h3>
          <h3>Terminy:</h3>
          <p>Soboty-od lipca 2019</p>
          <h3>Cena:</h3>
          <p>Olecko, Ełk, Augustów, Suwałki, Wigry, Sejny, St. Folwark - 190 zł./os.,
            <br>Wilkasy, Giżycko, Wydminy, Stare Juchy - 220 zł./os.
          </p>

          <h3 class="mb-2">Program:</h3>

          <p>
            Wyjazd zgodnie z rozkładem jazdy;
            przyjazd do Grodna, spotkanie z przewodnikiem, zwiedzanie miasta: muzeum, pomnik i grób Elizy Orzeszkowej; Zamek Stefana Batorego; Kościół Farny św. Franciszka Ksawerego; cerkiew Świętych Borysa i Gleba, tzw. Kołoża; zabytkowa synagoga zwana Nową lub Chóralną; Sobór Opieki Matki Bożej – prawosławny kościół katedralny; centralny plac Grodna, który ma dwie, funkcjonujące równolegle nazwy: historyczną – Plac Batorego i współczesną – Plac Sowiecki. Czas wolny.
            Wyjazd w drogę powrotną.
            Powroty w godzinach wieczornych od. 19:00 do godz.23:00.
          </p>
          <h3>Rozkład jazdy</h3>
          <p>4:50 Wilkasy (przystanek przy rondzie),
            <br>5:00 Giżycko (duży parking na ul. Dąbrowskiego 2 ),
            <br>5:20 Wydminy (parking na przeciwko kościoła),
            <br>5:35 Stare Juchy (Centrum, przystanek ul. Ełcka przy kościele, Policji),
            <br>6:00 EŁK (dworzec PKS/PKP) ul. Dąbrowskiego,
            <br>6:00 Olecko (parking przy BT Sambia),
            <br>6:45 AUGUSTÓW ( ul. Kościelna 10 naprzeciw Pizzeri Zielona),
            <br>7:15 Suwałki (ul. Hamerszmita przy IT)
            <br>
          </p>
          <h3>Cena zawiera:</h3>
          <p>transport autokarem / busem,
            <br>- usługi pilota i przewodnika z j.polskim,
            <br>- ubezpieczenie KL, NNW,
            <br>- dokumenty niezbędne do bezwizowego przekroczenia granicy,
            <br>- opłata na Turystyczny Fundusz Gwarancyjny,
            <br>- podatek VAT
          </p>

          <h3>Cena nie zawiera:</h3>
          <p>posiłków,
            <br>bilet wstępu do Muzeum E. Orzeszkowej – 2,00 EUR/os.
          </p>

          <h3>Info:</h3>
          <p>Każdy uczestnik musi posiadać ważny paszport,
            <br>Dzieci do 3 lat - za darmo,
            <br>Dzieci do 10 lat - 50% grafis
          </p>
        </div>
<div class="reserv">
          <a
            href="https://sambia.tripsomnia.com/pl/p/799-1-dzien-grodno-z-mazur-gizycko-olecko-elk-augstow-suwalki"
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

