"use strict";

function LandingPage(parentElement) {
  this.parentElement = parentElement;
  this.elements = null;
  this.title = `<h1 class="landing-title">Welcome to the Pokedex</h1>`;
}

LandingPage.prototype.generate = function() {
  this.elements = `<header class="container">
                  ${this.title}
                  <h2 class="landing-text">A lot of info about the Pokémon Universe</h2>
                  <!-- octocat -->
                  <center><i class="nes-octocat animate"></i></center>
                  
                  <h3 class="landing-text">Made possible thanks to <a href="https://pokeapi.co/" target="__blank">PokeAPI</a> and <a href="https://nostalgic-css.github.io/NES.css/" target="__blank">NES.css</a></h3>
                  <p></p>
                  </header>`;
  this.render();
};

LandingPage.prototype.render = function() {
  this.parentElement.innerHTML = this.elements;
};
