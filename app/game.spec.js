/*
 * Game.spec.js
 *
 * Test file for Game class
 */

var expect, Game;

expect = require('./chai.js').expect;

Game = require('./snake.js');

// var myGame =  not sure how to load up a game?  snake.spec won't work now either due to the new structure of snake.js
// var mySnake = same as above

describe("Testing the game methods", function() {
	"use strict";
	it("Testing the checkCollisions method", function() {
		mySnake.move();
		expect(mGame.checkCollisions()).to.equal(false);
		mySnake.addOne();
		mySnake.addOne();
		mySnake.addOne();
		mySnake.addOne();
		mySnake.changeDirection("West");
		mySnake.move();
		mySnake.changeDirection("South");
		mySnake.move();
		mySnake.changeDirection("East");
		mySnake.move();
		expect(myGame.checkCollisions()).to.equal(true);
})

