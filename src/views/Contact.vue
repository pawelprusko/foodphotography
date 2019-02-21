<template>
  <div class="about">
    <v-container class="contact shape">
      <v-layout justify-center align-center class="contact shape" column>
        <div class="textContent1"  justify-center align-center>
        <h1><strong> BIURO TURYSTYCZNE SAMBIA</strong></h1>
               <br>
        <h1>ul.Plac Wolności 9</h1>
        <h1>19-400 Olecko</h1>
        <br>
        <h1>phone: +48 87 520 16 44</h1>
        <h1 class="leftT"> +48 53 074 16 44</h1>
        <h1 class="leftT"> +48 693 451 089</h1>
        <br>
        <h1>sambiaolecko@gmail.com</h1>
        <br>
        <h1 class="konto">nr konta: Pekao S.A. 40 1240 5758 1111 0000 5716 0070</h1>
        <router-link to="/home">
          <button class="visited pa-2 mt-5">BACK
            <v-icon style="color: black">arrow_right_alt</v-icon>
          </button>
        </router-link>
        </div>
      </v-layout>
    </v-container>
  </div>
</template>

<style>
.textContent1 {
  width: 75vw;
  text-align: center;
}
.konto{
  text-align: center;
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
  margin-top: 120px;
}
.visited:hover {
  border-radius: 50px;
}
.contact {
  margin-top: 2vw;
  letter-spacing: 5px;
  width: 80vw;
  font-size: 15px;
 
}
@media (max-width: 600px) {
  .contact {
    font-size: 10px;
  }
}
@media (max-width: 500px) {
  .contact {
    font-size: 9px;
    letter-spacing: 2px;
  }
}
@media (max-width: 400px) {
  .contact {
    font-size: 8px;
    letter-spacing: 2px;
  }
}
@media (max-width: 350px) {
  .contact {
    font-size: 7px;
    letter-spacing: 1px;
  }
}
.line {
  width: 120px;
  height: 1px;
  background-color: black;
}
</style>
