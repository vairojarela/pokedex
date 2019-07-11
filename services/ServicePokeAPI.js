"use strict";

function PokeAPIService(url) {
  this.baseUrl = "https://pokeapi.co/api/v2/";
  this.detailUrl = "https://pokeapi.co/api/v2";
  this.url = url;
}

PokeAPIService.prototype.getAllPokemons = async function() {
  var response = await fetch(`${this.baseUrl}pokemon/?limit=50`);
  var data = await response.json();
  var responseSpritesArr  = await data.results;
  var spritesArr = [];
  var fetchedArr = [];
  var spriteUrl = responseSpritesArr.forEach(function(sprite){
  var aSprite = sprite.url;
  spritesArr.push(aSprite);
});
data.spritesArray = spritesArr;
var spritesArr = data.spritesArray
console.log(spritesArr);

  await Promise.all(spritesArr.map(async function(url){
    var fetched = await fetch(url);
    var data = await fetched.json()
    fetchedArr.push(data);
  })); 
  console.log(fetchedArr);
  
  /* responseSpritesArr.forEach(function(sprite){
    var imgSprite = await fetch(`spriteUrl.url`);
  }); */
  var responseSprites  = await fetch(data.results[0].url);
  var dataSprites = await responseSprites.json();
  var imgSprites = await fetch(dataSprites.sprites.front_default);
  console.log(imgSprites.url);
  /*var dataSpecies = await responseSpecies.json();
  data.speciesNew = dataSpecies; */
 
  return data.results;
};
PokeAPIService.prototype.getAllAbilities = async function() {
  var response = await fetch(`${this.baseUrl}ability/?limit=50`);
  var data = await response.json();
  return data.results;
};
PokeAPIService.prototype.getAllNatures = async function() {
  var response = await fetch(`${this.baseUrl}nature/?limit=50`);
  var data = await response.json();
  return data.results;
};
PokeAPIService.prototype.getPokemon = async function(url) {
  this.url = url;
  var response = await fetch(`${this.detailUrl}${this.url}`);
  var data = await response.json();
  var responseSpecies  = await fetch(data.species.url);
  var dataSpecies = await responseSpecies.json();
  data.speciesNew = dataSpecies;
 
  /* var generation = data.speciesNew.generation.name ;
  console.log(generation); */
  var sprite = data.speciesNew ;
  console.log(data);
  return data;
};
PokeAPIService.prototype.getAbility = async function(url) {
  this.url = url;
  var response = await fetch(`${this.detailUrl}${this.url}`);
  var data = await response.json();
  console.log(data);
  return data;
};
PokeAPIService.prototype.getNature = async function(url) {
  this.url = url;
  var response = await fetch(`${this.detailUrl}${this.url}`);
  var data = await response.json();
  console.log(data);
  return data;
};

/* PokeAPIService.prototype.getAllDetails = async function() {
  var response = await fetch(`${this.baseUrl}${this.details_url}`);
  var data = await response.json();
  console.log(data);
  return data.results;
}; */

var PokeAPIServiceInstance = new PokeAPIService();
