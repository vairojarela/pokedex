"use strict";

function Loading(parentElement) {
  this.parentElement = parentElement;
  this.elements = null;
}

Loading.prototype.generate = function() {
  this.elements = `<center><div class="loading"><i class="bounce-6 bounce nes-ash"></i>
  
  <i class=" bounce bounce-6 nes-pokeball"></i>
  
  </div><p>Loading...</p></center>`;
  
  this.render();
};

Loading.prototype.render = function() {
  this.parentElement.innerHTML = this.elements;
};
