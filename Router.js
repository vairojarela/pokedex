"use strict";

function Router() {
  this.page = null;
}

Router.prototype.buildDOM = function(url, parentElement) {
  switch (url) {
    case "/":
      this.generateLandingPage(parentElement);
      break;
    case "/pokemon":
      this.generateCategoryPage(parentElement, url);
      break;
    case "/ability":
      this.generateCategoryPage(parentElement, url);
      break;
    case "/nature":
      this.generateCategoryPage(parentElement, url);
      break;
    default:
      var singlePokemon = url.startsWith("/pokemon");
      var singleAbility = url.startsWith("/ability");
      var singleNature = url.startsWith("/nature");
      
      if (singlePokemon) {
        this.generatePokemonPage(parentElement, url);
      } else if (singleAbility) {
        this.generateAbilityPage(parentElement, url);
      } else if (singleNature) {
        this.generateNaturePage(parentElement, url);
      }

    /*    this.generatePokemonPage(parentElement, url); */
  }
};

Router.prototype.generateLandingPage = function(parentElement) {
  this.page = new LandingPage(parentElement);
  this.page.generate();
};
Router.prototype.generateCategoryPage = function(parentElement, url) {
  this.page = new CategoryPage(parentElement, url);
  this.page.generate();
};
Router.prototype.generatePokemonPage = function(parentElement, url) {
  this.page = new PokemonPage(parentElement, url);
  this.page.generate();
};
Router.prototype.generateAbilityPage = function(parentElement, url) {
  this.page = new AbilityPage(parentElement, url);
  this.page.generate();
};
Router.prototype.generateNaturePage = function(parentElement, url) {
  this.page = new NaturePage(parentElement, url);
  this.page.generate();
};

var routerInstance = new Router();
