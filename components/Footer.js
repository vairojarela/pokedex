"use strict";

class Footer {
  constructor(parentElement, style) {
    this.parentElement = parentElement;
    this.elements = null;
    this.style = style;
  }

  generate() {
    this.elements = `<div class="flex-container flex-footer">
    
              
                    <!-- github -->
                    <a href="https://github.com/vairojarela" target="__blank"><i class="nes-icon github is-medium"></i></a>
                    <!-- gmail -->
                    <i class="nes-icon gmail is-medium"></i>
                    <!-- linkedin -->
                    <a href="https://www.linkedin.com/in/jairo-enrique-varela-martinez/" target="__blank"><i class="nes-icon linkedin is-medium"></i></a>
                      <!-- whatsapp -->
                      <a href="tel:+34695439043"><i class="nes-icon whatsapp is-medium"></i></a>
                    </div>
                    <p class="footer-text" style="float: left; " >By <a href="https://vairojarela.com/">vairojarela</></p><a/>
    `;
    this.render();
  }

  render() {
    this.parentElement.innerHTML = this.elements;
  }
}
