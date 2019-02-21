<template>
  <div class="about">
    <v-container class="shape mt-4">
      <v-layout class="shape" justify-center align-center column>
        <div class="textContent" justify-center align-center>
          <h3 class="mb-4">Połów dorszy na Litwie - 1 dzień</h3>
          <h3>Cena:</h3>
          <p>255 zł/os. - przy grupie 23 os. – UWAGA zgłaszający grupę jako 24 osoba jedzie za darmo,
            <br>285 zł/os. - przy grupie 20 os. – UWAGA zgłaszający grupę jako 21 osoba jedzie za darmo,
            <br>450 zł/os. - przy grupie 7 os. – UWAGA zgłaszający grupę jako 8 osoba jedzie za darmo
            <br>
          </p>
          <p>Cena zawiera: transport, ubezpieczenie NNW i KL PZU, wynajęcie statku,
            <br>Cena nie zawiera: dodatkowych zanęt ok.6 euro/os., bilet połowu – 2 euro/os., wędka – 2 euro/os.,
          </p>

          <h3 class="mb-2">Program:</h3>

          <p>00:30 - wyjazd grupy z Olecka lub okolic,
            <br>06:30 (07:30) – przyjazd do Kłajpedy,
            <br>07:00 (8:00) - wejście na statek i wypłynięcie,
            <br>Statek standardowy - czas pływania ok. 8 godzin,
            <br>15:00 (16:00)- przypłynięcie do portu,
            <br>22:00 przyjazd do Olecka lub okolic
            <br>
          </p>

          <h3>Info:</h3>Uczestnicy powinni posiadać nowe dowody osobiste lub paszporty.
        </div>
<div class="reserv">
          <a
            href="https://www.facebook.com/biurosambia/"
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

