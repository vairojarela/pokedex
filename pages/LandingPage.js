"use strict";

function LandingPage(parentElement) {
  this.parentElement = parentElement;
  this.elements = null;
  this.title = `<h1 class="landing-title">Welcome to the Pokedex</h1>`;
}

LandingPage.prototype.generate = function() {
  this.elements = `<header class="container">
                  ${this.title}
                  <h2 class="landing-text">A lot of info about Pokémons</h2>
                  <!-- octocat -->
          <center>
                  <img id="mew" src="http://24.media.tumblr.com/22a09e751c29806f1d775438aafaa495/tumblr_mzqgw7X6Go1sycp1mo1_500.gif"/><div class="nes-balloon from-left">
                  <p>Click me!</p>
                  </div>    </center>
                  <h3 class="landing-text">Thanks to <a href="https://pokeapi.co/" target="__blank">PokeAPI</a> and <a href="https://nostalgic-css.github.io/NES.css/" target="__blank">NES.css</a></h3>
                  <p></p>
                  </header>`;
  this.render();
};

LandingPage.prototype.render = function() {
  this.parentElement.innerHTML = this.elements;
};

setTimeout(function addListenersToMew() {
  var mew = document.querySelector("#mew");
  mew.addEventListener("click", changePage);
}, 300);

function changePage() {
  var main = document.querySelector("main");
  routerInstance.buildDOM("/pokemon", main);
}
