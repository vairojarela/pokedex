# pokedex

## Description

Pokemon App using vanilla JS, DOM manipulation and fetching from PokeAPI(link to be included).


## MVP (DOM - CANVAS)

This app has four states: 

Landing Page: Initial app screen, containing categories and filters.

Category Page: Displays a list of card components with the items of the selected category.

Details Page: More info about the selected item.


## Backlog

- Levels
- Music
- Intro & Storyline
- Animations
- Items (Invincibility & Others)
- Different difficulties

## Data structure

 - main.js: only methods-> createSplash(), createGame(), createGameOver(), buildDOM()
 - Player.js: this.x, this.y(fixed), this.width, this.height, this.color, this.direction, this.speed. this.draw(), this.move(), this.checkBorders(), this.updateLives()
 - Enemy.js: this.x, this.y, this.width, this.height, this.color, this.direction, this.speed. this.draw(), this.move(), this.eliminateEnemy()
 - Powerup.js: this.x, this.y, this.height, this.color, this.direction, this.speed, this.draw(), this.move(), this.eliminatePowerup()


## States y States Transitions
Definition of the different states and their transition (transition functions)

- Landing Page
- Caregory Page
- Details Page
- Loading Screen


## Task
Task definition in order of priority

(to be modified)

- create files (index.html, style.css, main.js, Game.js, Player.js, Enemy.js.
- wireframe and game states (start->game->win/gameover->start)
- create canvas
- create loop
- display Player on canvas
- code movement of player, limited to widht of the canvas
- generate an enemy
- generate Item
- generate multiple and random enemies
- make enemies randomized colors
- code collisions between Player and Enemy
- substract life from player if collision happens
- code collisions between Player and Item
- do something about the item(initally food, add +1 life)

## Links
(to be modified)

### Trello
[Link url](https://trello.com/b/XAWVbXaC/pokedex)


### Git
URls for the project repo and deploy
[Link Repo](http://github.com)
[Link Deploy](http://github.com)


### Slides
URls for the project presentation (slides)
[Link Slides.com](http://slides.com)
