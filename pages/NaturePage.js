"use strict";

function NaturePage(parentElement, url) {
  this.parentElement = parentElement;
  this.elements = null;
  this.items = null;
  this.loading = null;
  this.title = "";
  this.url = url;
}
NaturePage.prototype.generate = async function() {
  this.loading = new Loading(this.parentElement);
  this.loading.generate();
  await this.connectToAPIPokemon();
  this.elements = `<header>
                  <h1>${this.nature.name}</h1>
                  </header>
                  <section class="card-container">
                  </section>`;

  /* this.items.forEach(item => {
    this.elements += `<article>
                      <h3>${item.name}</h3>
                    
                      <article>`;
  });
  this.elements += `</section>`; */
  this.render();
};

NaturePage.prototype.render = function() {
  this.parentElement.innerHTML = this.elements;
};

NaturePage.prototype.connectToAPIPokemon = async function() {
  this.nature = await PokeAPIServiceInstance.getNature(this.url);
  console.log(this.nature);
}



/* DetailsPage.prototype.connectToAPIPokemons = async function() {
  this.items = await PokeAPIServiceInstance.getAllPokemons();
}; */
/* DetailsPage.prototype.connectToAPIAbility = async function() {
  this.items = await PokeAPIServiceInstance.getAllAbility();
}; */
/* DetailsPage.prototype.connectToAPINatures = async function() {
  this.items = await PokeAPIServiceInstance.getAllNatures();
}; */

