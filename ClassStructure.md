Class Structure
=====================

Description
=====================
The structure of our application contains encapsuled classes brought together by one file.  They are described below:

**Markdown**
*Snake.js
	*The core file for handling the behavior of the snake object.  It contains the methods involved in it's movement and growth.
*Pellet.js
	*An additional class built to maintain a pellet for the snake to eat.  It contains the methods to generate a new set of coordinates after the snake eats it.
*Scoring.js
	*An additional class built to maintain the scoring system for the game.  It contains the methods to maintain a scores list as well as updating the score of the current game.
*Game.js
	*The core file for handling the game itself.  This file contains the methods for detecting game-ending scenarios along with drawing the snake and pellet objects.
*Main.js
	*The main file that links all .js files together.
