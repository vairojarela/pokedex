"use strict";

function AbilityPage(parentElement, url) {
  this.parentElement = parentElement;
  this.elements = null;
  this.items = null;
  this.loading = null;
  this.title = "";
  this.url = url;
}
AbilityPage.prototype.generate = async function() {
  this.loading = new Loading(this.parentElement);
  this.loading.generate();
  await this.connectToAPIPokemon();
  var whoCanLearnAbility = [];
  this.elements = `<header>
                  <h1 class="capitalize">${this.ability.name}</h1>
                  </header>
                  <section class="card-container">
                  <p>${this.ability.flavor_text_entries[2].flavor_text}</p>
                  <p>Learned by:</p>
                  `;

  this.ability.pokemon.map(function(element) {
    whoCanLearnAbility.push(`<a class=".whoCanLearn" href="#0" url="${element.pokemon.url}"><card>${element.pokemon.name}</card></a>`);
    console.log(element.pokemon.url);
  });
  console.log(whoCanLearnAbility);
  whoCanLearnAbility.forEach(function() {});
  this.elements += whoCanLearnAbility.join("");
  this.elements += `
                  </section>`;
  this.render();
};

AbilityPage.prototype.render = function() {
  this.parentElement.innerHTML = this.elements;
};

AbilityPage.prototype.connectToAPIPokemon = async function() {
  this.ability = await PokeAPIServiceInstance.getAbility(this.url);
  console.log(this.ability);
};
function addListenersToAbilities() {
  var items = document.querySelectorAll("card");
  console.log(items);
  items.forEach(function(item) {
    item.addEventListener("click", changePage);
  });
}
function changePage(event) {
  var clicked = event;
  console.log(clicked);
 /*  var urlRouter = targetUrl + clicked;
  var main = document.querySelector("main");
  routerInstance.buildDOM(urlRouter, main); */
}
addListenersToAbilities();
