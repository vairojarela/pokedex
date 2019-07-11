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
  console.log(this.url);
  switch (this.url) {
    case "/pokemon":
      this.title = "Pokemons";
      await this.connectToAPIPokemons();
      break;
    case "/ability":
      this.title = "Abilities";
      await this.connectToAPIAbilities();
      break;
    case "/nature":
      this.title = "Natures";
      await this.connectToAPINatures();
      break;
    default:
      console.log("urlnotfound404");
  }

  this.elements = `<header>
                  <h1>${this.title}</h1>
                  </header>
                  <button class="nes-btn is-primary" url="${this}">Next Page</button>
                  <section class="flex-container flex-main">
                  `;
  this.items.forEach(item => {
    this.elements += `<a class="category-item" href="#0" url='${item.name}'>
    <article class="card">
                      <h3>${
                        item.name
                      }</h3>
                      
                      </article></a>`;
  });
  
  this.elements += `</section>
  `;
  this.render();
  function addListenersToCategory() {
    var items = document.querySelectorAll(".card");
    items.forEach(function(item) {
      item.addEventListener("click", changePage);
    });
  }
  function changePage(event) {
    var clicked = event.path[0].innerText;
    console.log(clicked);
    var urlRouter = targetUrl + clicked;
    var main = document.querySelector("main");
    routerInstance.buildDOM(urlRouter, main);
  }
  addListenersToCategory();

  var targetUrl = this.url + "/";
  
  function addListenerToPagination(event) {
    var nextPage = document.querySelector("button");
    nextPage.addEventListener("click", nextPagination);
    /* var url = event.target.attributes.url;
    routerInstance.buildDOM("pokemon/" + url, layoutInstance.main);
    console.dir(url); */
  }

  function nextPagination(){
    var clicked = event.target;
  /*   console.log(this.url);
    console.log(targetUrl); */
    var urlRouter = targetUrl ;
    console.log(urlRouter);
    var main = document.querySelector("main");
    routerInstance.buildDOM(urlRouter, main); 
  }

   addListenerToPagination();
};

CategoryPage.prototype.render = function() {
  this.parentElement.innerHTML = this.elements;
};

CategoryPage.prototype.connectToAPIPokemon = async function() {
  this.items = await PokeAPIServiceInstance.getPokemon(this.url);
};
CategoryPage.prototype.connectToAPIAbility = async function() {
  this.items = await PokeAPIServiceInstance.getAbility(this.url);
};
CategoryPage.prototype.connectToAPINature = async function() {
  this.items = await PokeAPIServiceInstance.getNature(this.url);
};
CategoryPage.prototype.connectToAPIPokemons = async function() {
  this.items = await PokeAPIServiceInstance.getAllPokemons();
};
CategoryPage.prototype.connectToAPIAbilities = async function() {
  this.items = await PokeAPIServiceInstance.getAllAbilities();
};
CategoryPage.prototype.connectToAPINatures = async function() {
  this.items = await PokeAPIServiceInstance.getAllNatures();
};
