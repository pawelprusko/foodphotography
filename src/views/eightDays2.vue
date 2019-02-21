<template>
  <div class="about">
    <v-container class="shape mt-4">
      <v-layout class="shape" justify-center align-center column>
        <div class="textContent" justify-center align-center>
          <h3 class="mb-4">Mierzeja Kurońska Kłajpeda Pałanga - 2 dni z Mazur</h3>
          <h3>Terminy:</h3>
          <p>21-22.06, 06-07.07, 20-21.07, 03-04.08, 17-18.08, 31.08-01.09</p>
          <h3>Cena:</h3>
          <p>370 zł/os. - Olecko, Suwałki, Augustów,
            <br>410 zł/os. - Giżycko, Wydminy, Ełk
          </p>

          <h3 class="mb-2">Program:</h3>
          <h4>DZIEŃ 1</h4>
          <p>
            Wyjazd zgodnie z rozkładem jazdy.
            przeprawa promem na Mierzeję Kurońską i zwiedzanie m.in.: Największą atrakcją jest Delfinarium, w którym odbywają się pokazy tresury delfinów czarnomorskich. Neringa i Nida- stara osada rybacka , o której pierwsza wzmianka pochodzi z 1385r. Znajduje się tam muzeum Tomasza Manna, muzeum Historii Neringi, Galeria Bursztynu, punkt widokowy na szczycie Pamidos, Juodkrante - najstarsza osada półwyspu, znajduje się tam "Góra Czarownic" - na której w 1979 r postawiono ponad 100 drewnianych rzeźb, przedstawiających postacie z litewskich bajek, legend. Odbywają się tam imprezy Nocy Świętojańskiej.
            zakwaterowanie, obiadokolacja, nocleg.
          </p>
          <h4>DZIEŃ 2</h4>
          <p>
            Śniadanie, Spotkanie z przewodnikiem, przejazd do Pałangi i zwiedzanie m.in.: Park Botaniczny, Muzeum Bursztynów w Pałacu Tyszkiewiczów, neogotycki kościół, molo, czas wolny nad morzem;
            przyjazd do Kłajpedy zwiedzanie m.in.: Kłajpedzka Starówka z XVII w.
            Powrót do miejsc wyjazdu.
          </p>
          <h3>Rozkład jazdy</h3>
          <p>2:15 Giżycko (duży parking na ul. Dąbrowskiego),
            <br>2:35 Wydminy (parking przy sklepie ABC),
            <br>3:15 EŁK (dworzec PKS/PKP),
            <br>3:15 Olecko (parking przy BT Sambia) - dojazd busem do Ełku,
            <br>4:00 Augustów (ul. Kościelna 10 naprzeciw Pizzeri Zielona),
            <br>4:30 Suwałki (ul. Hamerszmita przy IT)
          </p>
          <h3>Cena zawiera:</h3>
          <p>transport autokarem z klimatyzacją,
            <br>opieka pilota,
            <br>ubezpieczenie KL i NNW, usługi przewodnickie,
            <br>1 nocleg w hotelu 3* w Kłajpedzie,
            <br>śniadanie, obiadokolację,
            <br>przeprawę promową,
            <br>opłatę klimatyczną
          </p>

          <h3>Cena nie zawiera:</h3>
          <p>biletów wstępów - ok. 10 euro/os.</p>
        </div>
<div class="reserv">
          <a
            href="https://sambia.tripsomnia.com/pl/p/67-2-dni-mierzeja-kuronska-klajpeda-palanga-gizycko-olecko-elk-augustow-suwalki"
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

