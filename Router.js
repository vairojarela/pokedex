"use strict";

function Router() {
  this.page = null;
}

Router.prototype.buildDOM = function(url, parentElement) {
  switch (url) {
    case "/":
      this.generateLandingPage(parentElement);
      break;

    case "/pokemons":
      this.generateCategoryPage(parentElement);
      break;

    case "/ability":
      this.generateCategoryPage(parentElement);
      break;

    default:
      this.generateLandingPage(parentElement);
      break;
  }
};

Router.prototype.generateLandingPage = function(parentElement) {
  this.page = new LandingPage(parentElement);
  this.page.generate();
};
Router.prototype.generateCategoryPage = function(parentElement) {
  this.page = new CategoryPage(parentElement);
  this.page.generate();
};

var routerInstance = new Router();
