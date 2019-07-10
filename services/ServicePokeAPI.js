"use strict";

function PokeAPIService(details_url) {
  this.baseUrl = "https://pokeapi.co/api/v2/";
  this.details_url = details_url;
}

PokeAPIService.prototype.getAllPokemons = async function() {
  var response = await fetch(`${this.baseUrl}pokemon`);
  var data = await response.json();
  console.log(data);
  return data.results;
};
PokeAPIService.prototype.getAllAbility = async function() {
  var response = await fetch(`${this.baseUrl}ability`);
  var data = await response.json();
  console.log(data);
  return data.results;
};
PokeAPIService.prototype.getAllNatures = async function() {
  var response = await fetch(`${this.baseUrl}nature`);
  var data = await response.json();
  console.log(data);
  return data.results;
};
PokeAPIService.prototype.getPokemon = async function() {
  var response = await fetch(`${this.baseUrl}pokemon/1`);
  var data = await response.json();
  console.log(data);
  return data.results;
};

/* PokeAPIService.prototype.getAllDetails = async function() {
  var response = await fetch(`${this.baseUrl}${this.details_url}`);
  var data = await response.json();
  console.log(data);
  return data.results;
}; */




var PokeAPIServiceInstance = new PokeAPIService();
