"use strict";

function CategoryPage(parentElement) {
  this.parentElement = parentElement;
  this.elements = null;
  this.items = null;
  this.loading = null;
  this.title = "";
}

CategoryPage.prototype.generate = async function() {
  this.loading = new Loading(this.parentElement);
  this.loading.generate();
  await this.connectToAPI();
  this.elements = `<header>
                  <h1>Categoria:</h1>
                  </header>
                  <section class="class-container">
                  </section>`;

  this.items.forEach(item => {
    this.elements += `<article>
                      <h3>${item.name}</h3>
                    
                      <article>`;
  });
  this.elements += `</section>`;
  this.render();
};

CategoryPage.prototype.render = function() {
  this.parentElement.innerHTML = this.elements;
};

CategoryPage.prototype.connectToAPI = async function() {
  this.items = await PokeAPIServiceInstance.getAllPokemons();
};
CategoryPage.prototype.connectToAPI = async function() {
  this.items = await PokeAPIServiceInstance.getAllAbility();
};
