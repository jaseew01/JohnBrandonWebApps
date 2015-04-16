Class Structure
=====================

Description
=====================
The structure of our application contains encapsuled classes brought together by one file.  They are described below:

Class Files
=====================

* Snake.js
	* The core file for handling the behavior of the snake object.  It contains the methods involved in it's movement and growth.
* Pellet.js
	* An additional class built to maintain a pellet for the snake to eat.  It contains the methods to generate a new set of coordinates after the snake eats it.
* Scoring.js
	* An additional class built to maintain the scoring system for the game.  It contains the methods to maintain a scores list as well as updating the score of the current game.
* Game.js
	* The core file for handling the game itself.  This file contains the methods for detecting game-ending scenarios along with drawing the snake and pellet objects.
* Main.js
	* The main file that links all .js files together.  This file maintains the game loop itself.

Functionality
====================

* The main.js file defines all the class files and starts the game loop.  This file listens for the arrow key presses and updates the game accordingly.  Upon the game class reaching an end-game scenario, the main file terminates the game loop.

* The files work together through the game.js file.  This maintains the snake and pellet visual, and allows for the game to run.  It checks for collisions between the snake and the walls, the snake and itself, and the snake and the pellet.  If one of the first two occur, a stop game event occurs terminating the loop.  If the snake eats a pellet, the game class updates the snake model appropriately along with the score and then updates the view.
