"use strict";

function Layout(root, style) {
  this.root = root;
  this.style = style;
  this.header = null;
  this.main = null;
  this.footer = null;
  this.render();
}

Layout.prototype.generate = function() {
  //generar elementos del DOM
  this.elements = `<header id="site-header"></header>
  <main id="site-main"></main>
  <footer id="site-footer"></footer>
`;
  this.render();
  this.getContainers();
};
Layout.prototype.render = function() {
  //anadir los elementos al DOM
  this.root.innerHTML = this.elements;
};
Layout.prototype.getContainers = function() {
  //get header, main y footer del DOM
  this.header = document.querySelector("#site-header");
  this.main = document.querySelector("#site-main");
  this.footer = document.querySelector("#site-footer");
};
