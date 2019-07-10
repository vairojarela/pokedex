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
      this.generateCategoryPage(parentElement, url);
      break;

    case "/pokemon":
      this.generateDetailsPage(parentElement, url);
      break;

    case "/ability":
      this.generateCategoryPage(parentElement, url);
      break;

    case "/natures":
      this.generateCategoryPage(parentElement, url);
      break;

   /*  case "/details":
      this.generateDetailsPage(parentElement, url);
      break; */

    default:
      this.generateLandingPage(parentElement);
      break;
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
 Router.prototype.generateDetailsPage = function(parentElement, url) {
  this.page = new DetailsPage(parentElement, url);
  this.page.generate();
}; 

var routerInstance = new Router();
