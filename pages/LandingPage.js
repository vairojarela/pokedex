"use strict";

class LandingPage {
  constructor(parentElement) {
    this.parentElement = parentElement;
    this.elements = null;
    this.title = ``;
  }

  generate() {
    this.elements = `<header class="container">
    <center></center>
    <h1 class="landing-title">Pokedex</h1>
    
                    <h2 class="landing-text">A lot of data about...</h2>
            <center>
            <img class="grow" id="mew" src="logo.gif"/>
            
                    <i class="nes-bulbasaur wiggle"></i>
                    <i class="nes-squirtle wiggle"></i>
                    <i class="nes-charmander wiggle"></i></center>
                    <h3 class="landing-text">Thanks to <a href="https://pokeapi.co/" target="__blank">PokeAPI</a> and <a href="https://nostalgic-css.github.io/NES.css/" target="__blank">NES.css</a></h3>
                    <p></p>
                    </header>`;
    this.render();
  }

  render() {
    this.parentElement.innerHTML = this.elements;
  }
}

const addListenersToMew = () => {
  let mew = document.querySelectorAll("i");
  mew.forEach(i => {
    i.addEventListener("click", changePage);
  });
  let clickMe = document.querySelector("#mew");
  clickMe.addEventListener("click", changePage);
};

setTimeout(addListenersToMew, 500);

const changePage = () => {
  let main = document.querySelector("main");
  routerInstance.buildDOM("/pokemon", main);
};
