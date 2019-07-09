"use strict";

function main() {
  var ENTRY_POINT = "/";
  var layoutInstance = null;
  var navbarInstance = null;
  var links = [{ name: "Home", url: "/" }, { name: "Pokemons", url: "/pokemons" }, {name: "Ability", url: "/ability"}];
  var rootElement = document.querySelector("#root");

  generateLayout();
  generateNavbar();
  addListenersToNavbar();
  activateRouter();

  function generateLayout() {
    layoutInstance = new Layout(rootElement);
    layoutInstance.generate();
  }
  function generateNavbar() {
    navbarInstance = new Navbar(layoutInstance.header, links);
    navbarInstance.generate();
  }
  function generateFooter() {}
  function activateRouter() {
    routerInstance.buildDOM(ENTRY_POINT, layoutInstance.main);
  }

  function addListenersToNavbar() {
    var anchors = document.querySelectorAll("nav a");
    anchors.forEach(function(anchor) {
      anchor.addEventListener("click", changePage);
    });
  }

  function changePage(event) {
    var url = event.target.attributes.url.value;
    routerInstance.buildDOM(url, layoutInstance.main);
    console.dir();
  }
}

window.addEventListener("load", main);
