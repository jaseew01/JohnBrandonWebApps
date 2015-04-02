var proto, Obj, pG, scoring, snake, EventEmitter, game;
//EventEmitter = require("events").EventEmitter;

//pG = require(".pelletGenerator.js");
//scoring = require("./scoring.js");
snake = require("./snake.js");

// @desc: will handle the interactions between the game's different classes
// @params: the width and height of the window
function makeNewGame(width, height) {
	var lst;
	lst = Object.create(proto);
	lst.pageObjects = [];
	lst.tick = 2000;
	lst.width = width;
	lst.height = height;
	lst.isStopped = false;
	lst.snake = snake.new();
	lst.pelletGenerator = pG.new();
	lst.scoring = scoring.new();
	lst.canvas = document.getElementById("canvas");

	return lst;
}

proto = {
	// @desc: will run the game
	// @return: null
	run: function() {
		this.draw();
		this.snake.move();
		this.snake.checkCollision();
		this.snake.checkOutOfBounds();
		this.checkCollisions();
	},

	// @desc: will look to see if the snake has touched any
	// 	of the objects in this.pageObjects
	// @return: null
	checkCollisions: function() {
		var temp = [];

		temp.push(this.snake.checkOutOfBounds(this.width, this.height));
		temp.push(this.snake.checkCollision());

		if (temp.indexOf(true) != -1) {
			this.emit("stopGame");
		}
	},

	update: function() {
		//
	},

	draw: function() {
		if(canvas.getContext){
			var ctx = canvas.getContext("2d");
			ctx.fillStyle = "rgb(200,0,0)";
			ctx.fillRect (100, 100, 200, 200);
		}
	},

	leftKeyPressed: function() {
		this.snake.changeDirection("West");
	},

	rightKeyPressed: function() {
		this.snake.changeDirection("East");
	},

	upKeyPressed: function() {
		this.snake.changeDirection("North");
	},

	downKeyPressed: function() {
		this.snake.changeDirection("South");
	}
};

Obj = {
	new: makeNewGame
};

Object.defineProperty(Obj, "prototype", {
	value: proto,
	writable: false
});

module.exports = Obj;