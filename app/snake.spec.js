/*
 * Snake.spec.js
 *
 * Test file for Snake class
 */

 var expect, Snake;

 expect = require('./chai.js').expect;

 Snake = require('./snake.js');

var mySnake = Snake.new();

describe("Testing the snake constructor", function() {
	"use strict";
	it("Testing that it has a length of 1", function() {
		expect(mySnake.length).to.equal(1);
	});

	it("Testing the default direction is North", function () {
		expect(mySnake.direction).to.equal("North");
	});
});