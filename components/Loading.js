"use strict";

function Loading(parentElement) {
  this.parentElement = parentElement;
  this.elements = null;
}

Loading.prototype.generate = function() {
  this.elements = `<center><i class="nes-ash animate"></i>
  <i class="nes-pokeball animate"></i>
  <p>Loading...</p>
  </center>`;
  this.render();
};

Loading.prototype.render = function() {
  this.parentElement.innerHTML = this.elements;
};
