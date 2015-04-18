/*
 * Snake.spec.js
 *
 * Test file for Snake class
 */
require.config({
	baseUrl: "app",
	paths: {
		"jquery": "https://code.jquery.com/jquery-2.1.3.min"
		// or the following to load remotely:
		// "jquery": "https://code.jquery.com/jquery-2.1.3.min"
	}
});

require(["jquery, snake, chai"], function($, Snake, Chai) {

	var expect, snake, mySnake;
	$(function() {
		expect = Chai.expect;
		snake = new Snake(15);

		describe("Testing the snake constructor", function() {
			"use strict";
			it("Testing that it has a length of 1", function() {
				expect(mySnake.length).to.equal(1);
			});

			it("Testing the default direction is North", function () {
				expect(mySnake.direction).to.equal("North");
			});

			it("Testing the default location", function() {
				expect(mySnake.snakeBody[0].x).to.equal(250);
				expect(mySnake.snakeBody[0].y).to.equal(250);
			})
		});

		describe("Testing the proto methods", function() {
			"use strict";
			it("Testing the changeDirection method", function() {
				expect(mySnake.direction).to.equal("North");
				mySnake.changeDirection("South");
				expect(mySnake.direction).to.equal("South");
				mySnake.changeDirection("West");
				expect(mySnake.direction).to.equal("West");
				mySnake.changeDirection("East");
				expect(mySnake.direction).to.equal("East");
			});

			it("Testing addOne and getTail methods", function() {
				expect(mySnake.length).to.equal(1);
				mySnake.addOne();
				expect(mySnake.length).to.equal(2);
				expect(mySnake.getTail().x).to.equal(245);
				expect(mySnake.getTail().y).to.equal(250);
			});

			it("Testing the move and getHead methods", function() {
				mySnake.move();
				expect(mySnake.getHead().x).to.equal(255);
				expect(mySnake.getHead().y).to.equal(250);
				expect(mySnake.getTail().x).to.equal(250);
				expect(mySnake.getTail().y).to.equal(250);
				mySnake.changeDirection("North");
				mySnake.move();
				expect(mySnake.getHead().x).to.equal(255);
				expect(mySnake.getHead().y).to.equal(245);
				expect(mySnake.getTail().x).to.equal(255);		
				expect(mySnake.getTail().y).to.equal(250);		
			});

			it("Testing checkCollision method", function() {
				mySnake.addOne();
				mySnake.addOne();
				mySnake.addOne();
				mySnake.addOne();
				expect(mySnake.length).to.equal(6);
				mySnake.changeDirection("West");
				mySnake.move();
				expect(mySnake.checkCollision()).to.equal(false);
				mySnake.changeDirection("South");
				mySnake.move();
				expect(mySnake.checkCollision()).to.equal(false);
				mySnake.changeDirection("East");
				mySnake.move();
				expect(mySnake.checkCollision()).to.equal(true);
			})
		});
	});
});