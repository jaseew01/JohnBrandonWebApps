SNAKE
=====================

Description
=====================
You are controlling a snake that will move around the screen as instructed by you.  The goal of the game is to eat as many white pellets as possible without running into yourself or running out of bounds.  As you eat more pellets, the body of the snake will get longer.

Specific Operations
=====================

* move snake left
* move snake right
* move snake up
* move snake down
* eat pellets
* lose the game

Necessary Components
=====================

**Markdown**
* Pellet generator
  * randomly generates 2 ints for x,y coordinate of pellet
  * manages number of pellets in window
* Pellet
  * will have a coordinate location
* Snake
  * will have a direction
  * has a length
* Game
  * Will hold the game loop
  * Handles all collisions
* Scoring
  * Will keep track of score throughout game
  * Will store high scores in browser between sessions

**Model**
  * Will be the browsers temporary files.  Any data (just a few numbers for the high scores) will be stored in there for the game.

**View**
  * Index.html will hold the main view with the scoring table and gaming window.
