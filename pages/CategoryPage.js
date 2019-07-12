"use strict";

function CategoryPage(parentElement, url) {
  this.parentElement = parentElement;
  this.elements = null;
  this.items = null;
  this.loading = null;
  this.sprites = null;
  this.title = "";
  this.url = url;
}

CategoryPage.prototype.generate = async function() {
  this.loading = new Loading(this.parentElement);
  this.loading.generate();
  switch (this.url) {

    
    case "/pokemon":
      this.title = "Pokemons";
      await this.connectToAPIPokemons();
      this.elements = `<header>
                  <h1>${this.title}</h1>
                  </header>
                
                  <section class="flex-container flex-main">
                  `;
      this.items.forEach(item => {
        this.elements += `<a class="category-item grow" href="#0" url='${
          item.name
        }'>
    <article class="card nes-container with-title is-centered" url='${
      item.name
    }'>
    
<img src="${item.image}" url='${item.name}'/>
<h3 class="capitalize smaller" url='${item.name}'>${
          item.name
        }</h3>                      
</article></a>
`;
      });
      var nextPage = this.items.next;
      this.elements += `</section>
  `;
      break;




    case "/ability":
      this.title = "Abilities";
      await this.connectToAPIAbilities();
      this.elements = `<header>
                  <h1>${this.title}</h1>
                  </header>
                
                  <section class="flex-container flex-main">
                  `;
      this.items.forEach(item => {
        this.elements += `<a class="category-item grow" href="#0" url='${
          item.name
        }'>
    <article class="card nes-container with-title is-centered" url='${
      item.name
    }'>
    
  
                      <h3 class="capitalize smaller" url='${item.name}'>${
          item.name
        }</h3>
                      
                      </article></a>
                      `;
      });
      var nextPage = this.items.next;
      this.elements += `</section>
  `;
      break;
    case "/nature":
      this.title = "Natures";
      await this.connectToAPINatures();
      break;
    default:
      console.log("urlnotfound404");
  }

  this.render();
  function addListenersToCategory() {
    var items = document.querySelectorAll(".card");
    items.forEach(function(item) {
      item.addEventListener("click", changePage);
    });
  }

  function changePage(event) {
    var clicked = event.target.attributes.url.value;
    var urlRouter = targetUrl + clicked;
    var main = document.querySelector("main");
    routerInstance.buildDOM(urlRouter, main);
  }
  addListenersToCategory();

  var targetUrl = this.url + "/";
};

CategoryPage.prototype.render = function() {
  this.parentElement.innerHTML = this.elements;
};

CategoryPage.prototype.connectToAPIPokemon = async function() {
  this.items = await PokeAPIServiceInstance.getPokemon(this.url);
  /* this.sprites = await PokeAPIServiceInstance.getPokemon(
    this.results.spritesArray
  ); */
  /*   console.log(this.sprites); */
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
