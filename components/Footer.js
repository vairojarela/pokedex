"use strict";

function Footer(parentElement, style) {
  this.parentElement = parentElement;
  this.elements = null;
  this.style = style;
}

Footer.prototype.generate = function() {
  this.elements = `<div class="flex-container flex-footer">
                  
                  <!-- instagram -->
                  <i class="nes-icon instagram is-medium"></i>
                  <!-- github -->
                  <i class="nes-icon github is-medium"></i>
                  <!-- google -->
                  <i class="nes-icon google is-medium"></i>
                  <!-- gmail -->
                  <i class="nes-icon gmail is-medium"></i>
                  <!-- linkedin -->
                  <i class="nes-icon linkedin is-medium"></i>
                  <!-- whatsapp -->
                  <i class="nes-icon whatsapp is-medium"></i>
                  </div>
                  <p class="footer-text">Made by <a href="https://vairojarela.com/">vairojarela</></p>
  `;
  this.render();
};

Footer.prototype.render = function() {
  this.parentElement.innerHTML = this.elements;
};
