<template>
  <div class="about">
    <v-container class="shape mt-5">
      <v-layout justify-center align-center class="shape" column>
        <div class="textContent" justify-center align-center>

           <p> <span class="bigB">B</span>iuro Turystyczne Sambia zostało założone w 2006 roku. Jest prowadzone przez osoby mające doświadczenie i wyższe wykształcenie w zakresie organizacji i obsługi turystyki. Dlatego też jakość świadczonych przez nas usług znajduje się na bardzo wysokim poziomie.</p>

<p> Jako organizator turystyki krajowej i zagranicznej posiadamy Zezwolenie Wojewody Warmińsko-Mazurskiego nr 135 oraz Polisę Ubezpieczeniową Gwarancji dla Organizatora Turystyki i Pośrednika Turystycznego Signal Iduna nr M20466. Dzięki sprawdzonej kadrze pilotów, przewodników oraz kierowców gwarantujemy profesjonalny poziom usług, a tym samym pełną satysfakcję naszych Klientów. Organizowane przez nas wycieczki obsługuje przewoźnik, którego pojazdy wyróżnia nienaganna sprawność techniczna. Ceny najmu pojazdów proponowane naszym kontrahentom są konkurencyjne.</p>

<p>Specjalizujemy się w kompleksowej organizacji wycieczek po Europie. W naszej ofercie posiadamy liczne oferty imprez wyjazdowych – jedno- i kilkudniowych oraz weekendowych wyjazdów po najciekawszych zakątkach Mazur czy innych rejonów Polski. Dostosowujemy się do indywidualnych potrzeb naszych Klientów. Oferujemy możliwość zorganizowania Państwa upragnionej wycieczki - o indywidualnym programie, na unikalnej trasie i dla wybranego grona osób. Podejmujemy się również organizacji konferencji biznesowych, szkoleniowych oraz o innym profilu dla firm, urzędów, stowarzyszeń oraz innych przedsiębiorców.</p>

<p>Spełnimy Państwa najśmielsze oczekiwania dotyczące podróży marzeń – nasz zespół dołoży wszelkich starań, by upragniony wyjazd przyniósł ze sobą niezapomniane wrażenia i liczne wspomnienia. Zapraszamy do zapoznania się z naszą ofertą turystyczną. Do zobaczenia na szlaku!</p>


<p>Z turystycznym pozdrowieniem</p>

<p>właściciel biura <br>
Krystyna Prusko</p>

<p>dyrektor biura <br>
Marcin Prusko

</p>
          </div>
        <router-link to="/home">
          <button class="visited pa-2 mt-5">WRÓĆ
            <v-icon style="color: black">arrow_right_alt</v-icon>
          </button>
        </router-link>
      </v-layout>
    </v-container>
  </div>
</template>

<style>
.bigB{
    font-size: 19px;
    font-weight: 600;
}
.textContent {
  font-size: 18px;
}
.shape {
  width: 60vw;
}
.visited {
  text-decoration: none;
  color: black;
  outline: none;
  border: 4px solid black;
  font-size: 30px;
  font-weight: 700;
  letter-spacing: 7px;
  transition: 0.4s;
  margin-bottom: 40px;
  margin-top: 120px;
}
.visited:hover {
  border-radius: 50px;
}
</style>

