"use strict";

class CategoryPage {
  constructor(parentElement, url) {
    this.parentElement = parentElement;
    this.url = url;
    this.elements = null;
    this.items = null;
    this.loading = null;
    this.sprites = null;
    this.title = "";
  }

  async generate() {
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
        let nextPage = this.items.next;
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
    const addListenersToCategory = ()=> {
      let items = document.querySelectorAll(".card");
      items.forEach((item) => {
        item.addEventListener("click", changePage);
      });
    }

    const changePage = (event) => {
      let clicked = event.target.attributes.url.value;
      let urlRouter = targetUrl + clicked;
      let main = document.querySelector("main");
      routerInstance.buildDOM(urlRouter, main);
    }
    addListenersToCategory();

    var targetUrl = this.url + "/";
  }

  render() {
    this.parentElement.innerHTML = this.elements;
  }

  async connectToAPIPokemons() {
    this.items = await PokeAPIServiceInstance.getAllPokemons();
  }
  async connectToAPIPokemon() {
    this.items = await PokeAPIServiceInstance.getPokemon(this.url);
  }
  async connectToAPIAbilities() {
    this.items = await PokeAPIServiceInstance.getAllAbilities();
  };
  async connectToAPIAbility() {
    this.items = await PokeAPIServiceInstance.getAbility(this.url);
  }
}
