"use strict";

function Footer(parentElement, style) {
  this.parentElement = parentElement;
  this.elements = null;
  this.style = style;
}

Footer.prototype.generate = function() {
  this.elements = `<p>Pokefooter</p>`;
  this.render();
};

Footer.prototype.render = function() {
  this.parentElement.innerHTML = this.elements;
};
