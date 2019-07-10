"use strict";

function LandingPage(parentElement) {
  this.parentElement = parentElement;
  this.elements = null;
  this.title = "Titulooo";
}

LandingPage.prototype.generate = function() {
  this.elements = `<header class="container">
                  <h1>Welcome to the Pokedex</h1>
                  <h2>A lot of info about Pokemons</h2>
                  </header>`;
  this.render();
};

LandingPage.prototype.render = function() {
  this.parentElement.innerHTML = this.elements;
};
