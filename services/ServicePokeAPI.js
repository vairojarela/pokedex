"use strict";

function PokeAPIService() {
  this.baseUrl = "https://pokeapi.co/api/v2/";
}

PokeAPIService.prototype.getAllPokemons = async function() {
  var response = await fetch(`${this.baseUrl}pokemon`);
  var data = await response.json();
  return data.results;
};

PokeAPIService.prototype.getAllAbility = async function() {
  var response = await fetch(`${this.baseUrl}ability`);
  var data = await response.json();
  return data.results;
};

var PokeAPIServiceInstance = new PokeAPIService();
