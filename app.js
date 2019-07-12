"use strict";

function main() {
  var ENTRY_POINT = "/";
  var layoutInstance = null;
  var navbarInstance = null;
  var footerInstance = null;
  var links = [
    { name: "Home", url: "/" },
    { name: "Pokemons", url: "/pokemon" },
    { name: "Abilities", url: "/ability" }
  ];
  var rootElement = document.querySelector("#root");

  generateLayout();
  generateFooter();
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
  function generateFooter() {
    footerInstance = new Footer(layoutInstance.footer, links);
    footerInstance.generate();
  }
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
  }
}

window.addEventListener("load", main);
