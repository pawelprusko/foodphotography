<template>
  <div class="about">
    <v-container class="shape mt-4">
      <v-layout class="shape" justify-center align-center column>
        <div class="textContent" justify-center align-center>
          <h3 class="mb-4">Kłajpeda Pałanga 1 dzień z Mazur</h3>
          <h3>Terminy:</h3>
          <p>Niedziele - od lipca 2019</p>
          <h3>Cena:</h3>
          <p>Giżycko, Wydminy, Stare Juchy, Ełk - 180 zł./os.,
            <br>Olecko, Suwałki, Augustów - 150 zł./os.
            <br>
          </p>
          <p>Dzieci do 3 lat - za darmo
            <br>Dzieci do 10 lat - 50% grais
          </p>

          <h3 class="mb-2">Program:</h3>

          <p>
            Wyjazd zgodnie z rozkładem jazdy,
            przejazd do Kłajpedy - głównego portu Litwy, zwiedzanie z przewodnikiem kłajpedzkiej Starówki z XVII wieku z fontanną
            przeprawa promem na Mierzeję Kurońską spektakl w Delfinarium, w którym odbywają się pokazy tresury delfinów czarnomorskich
            przejazd do Pałangi - największego i najbardziej popularnego kurortu nadmorskiego na Litwie, którego wybrzeże słynie z piaszczystych złotych plaż i wydm;
            zwiedzanie Parku Botanicznego i Muzeum Bursztynu w Pałacu Tyszkiewiczów posiadającego unikatową i bardzo bogatą kolekcję różnych przedmiotów wykonanych z bursztynu i znakomite okazy w postaci naturalne.
            Czas wolny nad morzem - spacer po plaży i molo,
            wyjazd w drogę powrotną.
            Powroty w godzinach nocnych 23:00 Suwałki, 23:40 Olecko, 00:40 Giżycko
          </p>
          <h3>Rozkład jazdy</h3>
          <p>1:45 Giżycko (duży parking na ul. Dąbrowskiego),
            <br>2:05 Wydminy (parking przy sklepie ABC),
            <br>2:20 Stare Juchy (Centrum, przystanek ul. Ełcka przy kościele, Policji),
            <br>2:45 EŁK (dworzec PKP/PKS),
            <br>2:45 Olecko (parking przy BT Sambia),
            <br>3:30 AUGUSTÓW -( ul. Kościelna 10 naprzeciw Pizzeri Zielona),
            <br>4:00 Suwałki (ul. Hamerszmita przy IT)
            <br>
          </p>
          <h3>Cena zawiera:</h3>
          <p>transport autokarem z WC i klimatyzacją,
            <br>ubezpieczenie KL i NNW,
            <br>opieka pilota,
            <br>polskojęzyczny przewodnik.
          </p>

          <h3>Cena nie zawiera:</h3>
          <p>biletów wstępów oraz prom: 15 euro/os. dorośli, 8 euro/os. studenci, uczniowie emeryci.</p>
        </div>
<div class="reserv">
          <a
            href="https://sambia.tripsomnia.com/pl/p/319-wycieczka-do-klajpedy-i-palangi-z-gizycka-olecka-suwalk-niedziela"
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

