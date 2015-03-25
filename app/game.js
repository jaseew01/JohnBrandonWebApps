var proto, Obj, pG, scoring, snake;

pG = require('./pelletGenerator.js');
scoring = require('./scoring.js');
snake = require('./snake.js');

//@desc: will handle the interactions between the game's different classes
function makeNewGame() {
	var lst;
	lst = Object.create(proto);
	lst.pageObjects = [];
	lst.tick = 1;
	lst.snake = snake.new();
	lst.pelletGenerator = pG.new();
	lst.scoring = scoring.new();

	return lst;
}

proto = {
	//@desc: will run the game
	//@return: null
	gameLoop: function() {
		//
	},

	//@desc: will look to see if the snake has touched any
	//	of the objects in this.pageObjects
	//@return: boolean true or false
	checkCollisions: function() {
		//
	}
};

Obj = {
	new:makeNewGame
};

Object.defineProperty(Obj, "prototype", {
	value: proto,
	writable: false
});

module.exports = Obj;