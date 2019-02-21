<template>
  <div class="about">
    <v-container class="shape mt-4">
      <v-layout class="shape" justify-center align-center column>
        <div class="textContent" justify-center align-center>
          <h3 class="mb-4">Ryga - Jurmala - Rundale 2 dni z Mazur</h3>
          <h3>Terminy:</h3>
          <p>13-14.07, 03-04.08, 17-18.08</p>
          <h3>Cena:</h3>
          <p>350 zł/os. - Olecko, Suwałki, Augustów,
            <br>390 zł/os. - Giżycko, WYdminy
          </p>

          <h3 class="mb-2">Program:</h3>
          <h4>DZIEŃ 1</h4>
          <p>
            wyjazd zgodnie z rozkładem jazdy;
            nocny przejazd do Rygi spotkanie z przewodnikiem - objazd autobusem po centrum, Ryga stara i nowa; dzielnica kamienic w stylu secesyjnym wpisana na listę UNESCO spacer po Starówce (z wprowadzeniem historycznym): Zamek, kościół polski Matki Boskiej Bolesnej i uliczką Polską, katedra luterańska, katedra katolicka i kamienice Trzej Bracia, domy Gildii, dawny klasztor dominikański, Ratusz i Dom Bractwa Czarnogłowych.
            czas wolny - możliwość przejazdu nad morze
            obiadokolacja, nocleg
          </p>
          <H4>DZIEŃ 2</H4>
          <p>
            Śniadanie,
            spotkanie z przewodnikiem, wycieczka autobusowa do Jurmali - zwiedzanie najsłynniejszego uzdrowiska Łotwy, zabudowa najczęściej drewniana w stylu secesyjnym.
            czas wolny nad morzem
            Przejazd do Rundale - zwiedzanie pałacu, perełki baroku.
            Powrót do miejsc wyjazdu.
          </p>

          <h3>Rozkład jazdy:</h3>
          <p>2:15 Giżycko (duży parking na ul. Dąbrowskiego),
            <br>2:35 Wydminy (parking przy sklepie ABC),
            <br>3:15 Olecko (parking przy BT Sambia),
            <br>4:00 Augustów (zatoczka autobusowa naprzeciwko Hotelu Dom Nauczyciela LOGOS),
            <br>4:30 Suwałki (ul. Hamerszmita przy IT)
          </p>

          <h3>Cena zawiera:</h3>
          <p>Transport autokarem z klimatyzacją,
            <br>opieka pilota,
            <br>ubezpieczenie KL i NNW, usługi przewodnika,
            <br>nocleg w hotelu 2/3* w Rydze,
            <br>

            śniadanie, obiadokolacja.
          </p>
          <h3>Cena nie zawiera:</h3>
          <p>bilety wstępów ok. 5 euro/os.</p>
        </div>
<div class="reserv">
          <a
            href="https://sambia.tripsomnia.com/pl/p/63-2-dni-ryga-jurmala-rundale-gizycko-olecko-elk-augustow-suwalki"
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

