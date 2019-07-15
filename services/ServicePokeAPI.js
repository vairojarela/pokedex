"use strict";

class PokeAPIService {
  constructor(url) {
    this.url = url;
    this.baseUrl = "https://pokeapi.co/api/v2/";
    this.detailUrl = "https://pokeapi.co/api/v2";
  }

  async getAllPokemons() {
    let response = await fetch(`${this.baseUrl}pokemon/?limit=153`);
    let data = await response.json();
    let nextPage = data.next;
    let responseSpritesArr = await data.results;
    let spritesArr = [];
    let fetchedArr = [];
    let spriteUrl = responseSpritesArr.forEach((sprite) => {
      let aSprite = sprite.url;
      spritesArr.push(aSprite);
    });
    data.spritesArray = spritesArr;
    spritesArr = data.spritesArray;

    await Promise.all(
      spritesArr.map(async(url) => {
        let fetched = await fetch(url);
        let data = await fetched.json();
        fetchedArr.push(data);
      })
    );

    fetchedArr.forEach((pokemon) => {
      pokemon.image = pokemon.sprites.front_default;
    });

    let sortedArray = fetchedArr.sort((a, b) => {
      return a.id - b.id;
    });
    sortedArray.next = data.next;

    return sortedArray;
  }

  async getAllPokemons() {
    let response = await fetch(`${this.baseUrl}pokemon/?limit=153`);
    let data = await response.json();
    let nextPage = data.next;
    let responseSpritesArr = await data.results;
    let spritesArr = [];
    let fetchedArr = [];
    let spriteUrl = responseSpritesArr.forEach((sprite) => {
      let aSprite = sprite.url;
      spritesArr.push(aSprite);
    });
    data.spritesArray = spritesArr;
    spritesArr = data.spritesArray;

    await Promise.all(
      spritesArr.map(async (url) => {
        let fetched = await fetch(url);
        let data = await fetched.json();
        fetchedArr.push(data);
      })
    );

    fetchedArr.forEach((pokemon) => {
      pokemon.image = pokemon.sprites.front_default;
    });

    let sortedArray = fetchedArr.sort((a,b) => {
      return a.id - b.id;
    });
    sortedArray.next = data.next;

    return sortedArray;
  }

  async getAllAbilities() {
    let response = await fetch(`${this.baseUrl}ability/?limit=153`);
    let data = await response.json();
    return data.results;
  }

  async getPokemon() {
    this.url = url;
    let response = await fetch(`${this.detailUrl}${this.url}`);
    let data = await response.json();
    let responseSpecies = await fetch(data.species.url);
    let dataSpecies = await responseSpecies.json();
    data.speciesNew = dataSpecies;
    let sprite = data.speciesNew;
    return data;
  }

  async getAbility() {
    this.url = url;
    let response = await fetch(`${this.detailUrl}${this.url}`);
    let data = await response.json();
    return data;
  }
}
const PokeAPIServiceInstance = new PokeAPIService();
