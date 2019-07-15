"use strict";

class Layout {
  constructor(root, style) {
    this.root = root;
    this.style = style;
    this.header = null;
    this.main = null;
    this.footer = null;
    this.render();
  }
  generate() {
    this.elements = `<header id="site-header"></header>
    <main id="site-main"></main>
    <footer id="site-footer"></footer>
    `;
    this.render();
    this.getContainers();
  }
  render() {
    this.root.innerHTML = this.elements;
  }
  getContainers() {
    //get header, main y footer del DOM
    this.header = document.querySelector("#site-header");
    this.main = document.querySelector("#site-main");
    this.footer = document.querySelector("#site-footer");
  }
}
