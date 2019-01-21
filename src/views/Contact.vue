<template>
  <div class="about">
    <v-container class="contact">
      <v-layout justify-center align-center class="contact" column>
        <h1>WARSAW</h1>
        <br>
        <h1>phone: 693 600 920</h1>
        <br>
        <h1>email: pruskopawel@gmail.com</h1>
        <router-link to="/home">
          <button class="visited pa-2 mt-5">BACK
            <v-icon style="color: black">arrow_right_alt</v-icon>
          </button>
        </router-link>
      </v-layout>
    </v-container>
  </div>
</template>

<style>
.visited {
  text-decoration: none;
  color: black;
  outline: none;
  border: 4px solid black;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 7px;
  transition: 0.4s;
}
.visited:hover {
  border-radius: 50px;
}
.contact {
  width: 100%;
  height: 80vh;
  letter-spacing: 5px;
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
