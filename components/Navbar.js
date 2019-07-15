"use strict";

class Navbar {
  constructor(parentElement, links, style) {
    this.parentElement = parentElement;
    this.links = links;
    this.style = style;
    this.elements = null;
  }

  generate() {
    //generar dinamicamente los elementos
    this.elements = `<nav class="flex-container flex-nav" >
  `;
    this.links.forEach(link => {
      this.elements += `
 <a class="nav-a" href="#0" url=${link.url}>${link.name}</a>`;
    });
    this.elements += `</nav>
  `;
    this.render();
  }

  render() {
    //add elements to DOM
    this.parentElement.innerHTML = this.elements;
  }
}
