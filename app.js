"use strict";

function main() {
  var ENTRY_POINT = "/";
  var layoutInstance = null;
  var navbarInstance = null;
  var footerInstance = null;
  var links = [
    { name: "Home", url: "/" },
    { name: "Pokemons", url: "/pokemons" },
    { name: "Ability", url: "/ability" },
    { name: "Natures", url: "/natures" }
  ];
  var rootElement = document.querySelector("#root");

  generateLayout();
  generateFooter();
  generateNavbar();
  addListenersToNavbar();
  /*   addListenersToList(); */
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
    console.log('is this called');
    var url = event.target.attributes.url.value;
    routerInstance.buildDOM(url, layoutInstance.main);
    console.dir();
  }
}

window.addEventListener("load", main);
