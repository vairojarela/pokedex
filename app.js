"use strict";

const main = () => {
  const ENTRY_POINT = "/";
  let layoutInstance = null;
  let navbarInstance = null;
  let footerInstance = null;
  let links = [
    { name: "Home", url: "/" },
    { name: "Pokemons", url: "/pokemon" },
    { name: "Abilities", url: "/ability" }
  ];
  const rootElement = document.querySelector("#root");

  const generateLayout = () => {
    layoutInstance = new Layout(rootElement);
    layoutInstance.generate();
  };
  const generateNavbar = () => {
    navbarInstance = new Navbar(layoutInstance.header, links);
    navbarInstance.generate();
  };
  const generateFooter = () => {
    footerInstance = new Footer(layoutInstance.footer, links);
    footerInstance.generate();
  };
  const activateRouter = () => {
    routerInstance.buildDOM(ENTRY_POINT, layoutInstance.main);
  };

  const addListenersToNavbar = () => {
    let anchors = document.querySelectorAll("nav a");
    anchors.forEach((anchor) => {
      anchor.addEventListener("click", changePage);
    });
  };

  const changePage = event => {
    let url = event.target.attributes.url.value;

    routerInstance.buildDOM(url, layoutInstance.main);
  };
  generateLayout();
  generateFooter();
  generateNavbar();
  addListenersToNavbar();
  activateRouter();
};

window.addEventListener("load", main);
