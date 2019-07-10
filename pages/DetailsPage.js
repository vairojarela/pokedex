"use strict";

function DetailsPage(parentElement, url) {
  this.parentElement = parentElement;
  this.elements = null;
  this.items = null;
  this.loading = null;
  this.title = "";
  this.url = url;
}

DetailsPage.prototype.generate = async function() {
  this.loading = new Loading(this.parentElement);
  this.loading.generate();
  console.log(this.url);
  this.elements = `<header>
                  <h1>${this.title}</h1>
                  </header>
                  <section class="card-container">
                  </section>`;

  this.items.forEach(item => {
    this.elements += `<article>
                      <h3>${item.name}</h3>
                    
                      <article>`;
  });
  this.elements += `</section>`;
  this.render();
};

DetailsPage.prototype.render = function() {
  this.parentElement.innerHTML = this.elements;
};

DetailsPage.prototype.connectToAPIPokemon = async function() {
  this.items = await PokeAPIServiceInstance.getPokemon(this.url);
  
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

