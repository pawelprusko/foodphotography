<template>
  <div class="about">
    <v-container class="shape mt-4">
      <v-layout class="shape" justify-center align-center column>
        <div class="textContent" justify-center align-center>
          <h3 class="mb-4">Ryga - Szawle - 1 dzień z Mazur</h3>
          <h3>Terminy:</h3>
          <p>Soboty od lipca 2019</p>
          <h3>Cena:</h3>
          <p>150 zł/os. - Olecko, Suwałki, Augustów,</p>

          <h3 class="mb-2">Program:</h3>
          <p>
            Wyjazd wg rozkładu jazdy;
            Szawle - Góra Krzyży - miejsce kultu religijnego, tysiące krzyży które były pozostawiane na górze od wielu lat
            RYGA - objazd autobusem po centrum, Ryga stara i nowa; dzielnica kamienic w stylu secesyjnym wpisana na listę UNESCO spacer po Starówce (z wprowadzeniem historycznym): Zamek, kościół polski Matki Boskiej Bolesnej i uliczką Polską, katedra luterańska, katedra katolicka i kamienice Trzej Bracia, domy Gildii, dawny klasztor dominikański, Ratusz i Dom Bractwa Czarnogłowych.
            czas wolny na obiad;
            powrót do miejsca wyjazdu.
          </p>

          <h3>Rozkład jazdy:</h3>
          <p>04:00 - Augustów - z umówionego miejsca w centrum miasta,
            <br>04:30 - Suwałki - parking na ul. Hamerszmita przy Informacji Turystycznej,
            <br>

            03:30 - OLECKO - parking przy BT SAMBIA - przy min. 10 os.
          </p>

          <h3>Cena zawiera:</h3>
          <p>Transport autokarem z klimatyzacją,
            <br>opieka pilota,
            <br>ubezpieczenie KL i NNW,
            <br>

            usługi przewodnika w Rydze
          </p>
          <h3>Cena nie zawiera:</h3>
          <p>obiadu ok. 7 euro/os.</p>
          <h3>Informacje dodatkowe:</h3>
          <p>Program imprezy jest ramowy. Kolejność zwiedzania może ulec zmianie,
            <br>Organizujemy połączenia antenowe z dowolnego miejsca wyjazdu na terenie Suwalszczyzny, Mazur,
            <br>Uczestnicy wyjazdu powinni posiadać dowód osobisty lub ważny paszport
          </p>
        </div>
<div class="reserv">
          <a
            href="https://sambia.tripsomnia.com/pl/p/697-1-dzien-wycieczka-do-rygi-wycieczka-z-mazur-gizycko-elk-olecko"
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

