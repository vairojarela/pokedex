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
  this.elements = `<header class="flex-container flex-sprites">
  
  <img class="sprite-img grow-sprite" src="${this.pokemon.sprites.front_default}"/>
  <img class="sprite-img grow-sprite" src="${this.pokemon.sprites.back_default}"/>
  <img class="sprite-img grow-sprite" src="${this.pokemon.sprites.front_shiny}"/>
  <img class="sprite-img grow-sprite" src="${this.pokemon.sprites.back_shiny}"/></header>
                  <h1 class="capitalize">${this.pokemon.name}</h1>
                  
                  
                  <section class="card-container">
                  <h2>#${this.pokemon.id}</h2>
                  <p>Type:</p>`;
  this.pokemon.types.map(function(element) {
    types.push(element.type.name);
  });
  types.reverse();
 
  this.elements += `<p class="capitalize">${types.join(" / ")}</p></section>`;
  this.elements += `<div class="flex-container progress-bars">`;
  var colorStat = this.pokemon.speciesNew.color.name;

  if(colorStat==="white"){colorStat = "grey";}
  this.pokemon.stats.reverse();
  this.pokemon.stats.forEach(function(element) {
    if(element.base_stat<100){
      stats.push(
        ` <p class="capitalize" data-value="${element.base_stat}">${
          element.stat.name
        } <span style="color:${colorStat}">${element.base_stat}</span></p><progress class="nes-progress" value="${
          element.base_stat
        }" max="100"></progress>`
      );
    } else if (element.base_stat>100) {
      stats.push(
        ` <p class="capitalize" data-value="${element.base_stat}">${
          element.stat.name
        } <span style="color:${colorStat}">${element.base_stat}</span></p><progress class="nes-progress" value="${
          element.base_stat
        }" max="200"></progress>`
      );
    
    } else if (element.base_stat>200) {
      stats.push(
        ` <p class="capitalize" data-value="${element.base_stat}">${
          element.stat.name
        } <span style="color:${colorStat}">${element.base_stat}</span></p><progress class="nes-progress" value="${
          element.base_stat
        }" max="300"></progress>`
      );
    }
  
    
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

