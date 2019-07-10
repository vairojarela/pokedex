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
  this.elements = `<header class="header-item">
  
  <img class="sprite-img" src="${
    this.pokemon.sprites.front_default
                  }"/>
                  <h1>${this.pokemon.name}</h1>
                  
                  </header>
                  <section class="card-container">
                  <h2>#${this.pokemon.id}</h2>
                  <p>Type:</p>`;
  this.pokemon.types.map(function(element) { 
    types.push(element.type.name);
  });
  this.elements += `<p>${types.toString()}</p>`;

   this.elements += this.pokemon.stats.forEach(function(element) {
    /* stats.push(element.stat.name, element.base_stat); */
    /* `<p>${element.stat.name}</p>`; */
    stats.push(" "+element.stat.name +": "+ element.base_stat);
  }); 
  this.elements += `<p>${stats}</p>`;
  console.log(stats);
 /*  this.elements += `<p>${stats.toString()}</p>`; */
  this.elements += `</section>`;
  this.render();
};

PokemonPage.prototype.render = function() {
  this.parentElement.innerHTML = this.elements;
};

PokemonPage.prototype.connectToAPIPokemon = async function() {
  this.pokemon = await PokeAPIServiceInstance.getPokemon(this.url);
};

/* DetailsPage.prototype.connectToAPIPokemons = async function() {
  this.items = await PokeAPIServiceInstance.getAllPokemons();
}; */
/* DetailsPage.prototype.connectToAPIAbility = async function() {
  this.items = await PokeAPIServiceInstance.getAllAbility();
}; */
/* DetailsPage.prototype.connectToAPINatures = async function() {
  this.items = await PokeAPIServiceInstance.getAllNatures();
}; */
