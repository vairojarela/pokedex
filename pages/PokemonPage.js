"use strict";

function PokemonPage(parentElement, url) {
  this.parentElement = parentElement;
  this.elements = null;
  this.items = null;
  this.loading = null;
  this.title = "";
  this.url = url;
}
PokemonPage.prototype.generate = async function() {
  this.loading = new Loading(this.parentElement);
  this.loading.generate();
  await this.connectToAPIPokemon();
  var types = [];
  var stats = [];
  console.log(this.pokemon.sprites);
  this.elements = `<header class="flex-container flex-sprites">
  
  <img class="sprite-img" src="${this.pokemon.sprites.front_default}"/>
  <img class="sprite-img" src="${this.pokemon.sprites.front_shiny}"/></header>
                  <h1 class="capitalize">${this.pokemon.name}</h1>
                  
                  
                  <section class="card-container">
                  <h2>#${this.pokemon.id}</h2>
                  <p>Type:</p>`;
  this.pokemon.types.map(function(element) {
    types.push(element.type.name);
  });
  types.reverse();
  console.log(types);
  this.elements += `<p>${types.join(" / ")}</p>`;
  this.elements += `<div class="flex-container progress-bars">`;

  this.pokemon.stats.forEach(function(element) {
    /* stats.push(element.stat.name, element.base_stat); */
    /* `<p>${element.stat.name}</p>`; */
    stats.push(
      ` <p class="capitalize" data-value="${element.base_stat}">${
        element.stat.name
      }</p><progress class="nes-progress" value="${
        element.base_stat
      }" max="100"></progress>`
    );
  });
  this.elements += `${stats.join(" ")}`;
  this.elements += `</div></section>`;
  this.render();
};

PokemonPage.prototype.render = function() {
  this.parentElement.innerHTML = this.elements;
};

PokemonPage.prototype.connectToAPIPokemon = async function() {
  this.pokemon = await PokeAPIServiceInstance.getPokemon(this.url);
};
