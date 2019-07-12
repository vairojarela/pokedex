"use strict";

function PokeAPIService(url) {
  this.baseUrl = "https://pokeapi.co/api/v2/";
  this.detailUrl = "https://pokeapi.co/api/v2";
  this.url = url;
}

PokeAPIService.prototype.getAllPokemons = async function() {
  var response = await fetch(`${this.baseUrl}pokemon/?limit=150`);
  var data = await response.json();
  var nextPage = data.next;
  var responseSpritesArr  = await data.results;
  var spritesArr = [];
  var fetchedArr = [];
  var spriteUrl = responseSpritesArr.forEach(function(sprite){
  var aSprite = sprite.url;
  spritesArr.push(aSprite);
});
data.spritesArray = spritesArr;
var spritesArr = data.spritesArray

  await Promise.all(spritesArr.map(async function(url){
    var fetched = await fetch(url);
    var data = await fetched.json()
    fetchedArr.push(data);
  })); 

  fetchedArr.forEach(function(pokemon){
    pokemon.image = pokemon.sprites.front_default;
  })

  var sortedArray = fetchedArr.sort(function(a,b) {
    return a.id - b.id;
  })
  sortedArray.next = data.next;

 
  return sortedArray;
};
PokeAPIService.prototype.getAllAbilities = async function() {
  var response = await fetch(`${this.baseUrl}ability/?limit=300`);
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
 

  var sprite = data.speciesNew ;

  return data;
};
PokeAPIService.prototype.getAbility = async function(url) {
  this.url = url;
  var response = await fetch(`${this.detailUrl}${this.url}`);
  var data = await response.json();

  return data;
};
PokeAPIService.prototype.getNature = async function(url) {
  this.url = url;
  var response = await fetch(`${this.detailUrl}${this.url}`);
  var data = await response.json();

  return data;
};


var PokeAPIServiceInstance = new PokeAPIService();
