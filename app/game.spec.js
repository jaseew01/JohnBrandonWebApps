/*
 * Game.spec.js
 *
 * Test file for Game class
 */

var expect, Game;

expect = require('./chai.js').expect;
game = require('./snake.js');

describe("Testing the game methods", function() {
	it("Testing the checkCollisions method", function() {
		mySnake.move();
		expect(Game.checkCollisions()).to.equal(false);
		mySnake.addOne();
	});
});

