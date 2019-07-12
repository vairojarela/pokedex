"use strict";

function LandingPage(parentElement) {
  this.parentElement = parentElement;
  this.elements = null;
  this.title = ``;
}

LandingPage.prototype.generate = function() {
  this.elements = `<header class="container">
  <center></center>
  <h1 class="landing-title">Pokedex</h1>
  
                  <h2 class="landing-text">A lot of data about...</h2>
          <center>
          <img class="grow" id="mew" src="http://25.media.tumblr.com/8e4aafd22dfc23592ea2bf16f4f7be87/tumblr_mze2tugzvO1qh44dro1_500.gif"/>
          
                  <i class="nes-bulbasaur wiggle"></i>
                  <i class="nes-squirtle wiggle"></i>
                  <i class="nes-charmander wiggle"></i></center>
                  <h3 class="landing-text">Thanks to <a href="https://pokeapi.co/" target="__blank">PokeAPI</a> and <a href="https://nostalgic-css.github.io/NES.css/" target="__blank">NES.css</a></h3>
                  <p></p>
                  </header>`;
  this.render();
};

LandingPage.prototype.render = function() {
  this.parentElement.innerHTML = this.elements;
};

setTimeout(function addListenersToMew() {
  var mew = document.querySelectorAll("i");
  mew.forEach(function(i) {
    i.addEventListener("click", changePage);
  });
  var clickMe = document.querySelector("#mew");
  clickMe.addEventListener("click", changePage);
}, 1000);

function changePage() {
  var main = document.querySelector("main");
  routerInstance.buildDOM("/pokemon", main);
}
