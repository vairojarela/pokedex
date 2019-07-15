"use strict";

class AbilityPage {
  constructor(parentElement, url) {
    this.parentElement = parentElement;
    this.url = url;
    this.elements = null;
    this.items = null;
    this.loading = null;
    this.title = "";
  }

  async generate() {
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

    this.ability.pokemon.map((element) => {
      whoCanLearnAbility.push(
        `<a class="capitalize" who" href="#0" url="${
          element.pokemon.url
        }"><card>${element.pokemon.name}</card></a>`
      );
    });

    whoCanLearnAbility.forEach(() => {});
    this.elements += whoCanLearnAbility.join("");
    this.elements += `
                  </section>`;
    this.render();
  }

  render() {
    this.parentElement.innerHTML = this.elements;
  }

  async connectToAPIPokemon() {
    this.ability = await PokeAPIServiceInstance.getAbility(this.url);
  }
}
