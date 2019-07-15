"use strict";

class Loading {
  constructor(parentElement) {
    this.parentElement = parentElement;
    this.elements = null;
  }
  generate() {
    this.elements = `<center><div class="loading"><i class="bounce-6 bounce nes-ash"></i>
    <i class=" bounce bounce-6 nes-pokeball"></i>
    </div><p>Loading...</p></center>`;
    this.render();
  }

  render() {
    this.parentElement.innerHTML = this.elements;
  }
}
