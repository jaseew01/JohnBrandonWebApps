SNAKE
=====================

Description
=====================
You are controlling a snake that will move around the screen as instructed by you.  The goal of the game is to eat as many white pellets as possible without running into yourself or running out of bounds.

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
* Pellet gernerator
  * randomly generates 2 ints for x,y coordinate of pellet
  * manages number of pellets in window
* Pellet
  * will have a coordinate location
* Snake
  * will have a direction
  * has a length
  * has a speed
* Game Area
  * will have both a width and height
  * holds coordinates of all 4 corners

**Views/Controls**
* Game window
