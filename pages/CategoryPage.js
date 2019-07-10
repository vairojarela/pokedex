"use strict";

function CategoryPage(parentElement, url) {
  this.parentElement = parentElement;
  this.elements = null;
  this.items = null;
  this.loading = null;
  this.title = "";
  this.url = url;
}

CategoryPage.prototype.generate = async function() {
  this.loading = new Loading(this.parentElement);
  this.loading.generate();
  switch (this.url) {
    case "/pokemons":
      this.title = "Pokemons";
      await this.connectToAPIPokemons();
      break;
    case "/pokemon":
      this.title = "Pokemon";
      await this.connectToAPIPokemon();
      break;
    case "/ability":
      this.title = "Abilities";
      await this.connectToAPIAbility();
      break;
    case "/natures":
      this.title = "Natures";
      await this.connectToAPINatures();
      break;
    default:
      console.log("url not found.");
  }
  /* await this.connectToAPI(); */
  this.elements = `<header>
                  <h1>${this.title}</h1>
                  </header>
                  <section class="card-container">
                  `;
  this.items.forEach(item => {
    this.elements += `<article class="card">
                      <a class="category-item" href="#0" url='${item.name}'>${
      item.name
    }</a>
                    
                      </article>`;
  });
  this.elements += `</section>`;
  this.render();
  var anchors = document.querySelectorAll(".category-item");
  console.log(anchors);
  anchors.forEach(function(anchor) {
    anchor.addEventListener("click", changePage);
  });
  function changePage(event) {
    console.log(event);
    var url = event.target.attributes.url.value;
    console.log(url);
    routerInstance.buildDOM(url);
    console.dir(url);
  }
};

CategoryPage.prototype.render = function() {
  this.parentElement.innerHTML = this.elements;
};

CategoryPage.prototype.connectToAPIPokemon = async function() {
  this.items = await PokeAPIServiceInstance.getPokemon();
};
CategoryPage.prototype.connectToAPIPokemons = async function() {
  this.items = await PokeAPIServiceInstance.getAllPokemons();
};
CategoryPage.prototype.connectToAPIAbility = async function() {
  this.items = await PokeAPIServiceInstance.getAllAbility();
};
CategoryPage.prototype.connectToAPINatures = async function() {
  this.items = await PokeAPIServiceInstance.getAllNatures();
};
