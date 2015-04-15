define(function() {
	var snake;

	// @desc: this class will handle the snake moving around the page
	// @param bodySize: the width/height of each square in the snake body
	function snake(bodySize) {
		this.snakeBody = [{x: 250, y: 250}];
		this.length = 1;
		this.direction = "North";
		this.directions = ["North", "South", "East", "West"];
		this.bodySize = bodySize;
		this.moveCoordinates = {
			North: {x: 0, y: -bodySize},
			South: {x: 0, y: bodySize},
			East: {x: bodySize, y: 0},
			West: {x: -bodySize, y: 0}
		};

		this.snakeBody.unique = function() {
			var o = {}, i, l = this.length, r = [];
			for (i = 0; i < l; i += 1) {
				o["" + this[i].x + "" + this[i].y] = this[i];
			}
			for (i in o) {
				r.push(o[i]);
			}
			return r;
		};
	}

	snake.prototype = {
		// @desc: Will change the direction of the snake
		// @param dir: Snakes new direction
		changeDirection: function(dir) {
			for (var i = 0; i < this.directions.length; i += 1) {
				if (this.directions[i] === dir) {
					this.direction = dir;
					return;
				}
			}
			throw new Error("Invalid Direction");
		},

		// @desc: Will add one box onto the body of the snake
		addOne: function() {
			var currTail = this.getTail(), newTail;
			
			if (this.direction === "North") {
				newTail = {x: currTail.x, y: currTail.y + this.bodySize};
			} else if (this.direction === "East") {
				newTail = {x: currTail.x - this.bodySize, y: currTail.y};
			} else if (this.direction === "South") {
				newTail = {x: currTail.x, y: currTail.y - this.bodySize};
			} else if (this.direction === "West") {
				newTail = {x: currTail.x + this.bodySize, y: currTail.y};
			}
			this.snakeBody.push(newTail);
			this.length += 1;
		},

		// @desc: Will move the snake in the current direction
		// 	The old tail will be removed, and a new square will be added
		//  to the front
		// 	The first item in the array will move in the direction of this.direction
		move: function() {
			var newObj = {}, distChange, head;
			distChange = this.moveCoordinates[this.direction];
			head = this.getHead();

			this.snakeBody.pop();
			newObj.x = head.x + distChange.x;
			newObj.y = head.y + distChange.y;

			this.snakeBody.unshift(newObj);
			return newObj;
		},

		// @desc: Will get the tail of the snake body
		// @return: the last object in the snake body
		getTail: function() {
			return this.snakeBody[this.length - 1];
		},

		// @desc: Will get the head of the snake body
		// @return: the first object in the snake body
		getHead: function() {
			return this.snakeBody[0];
		},

		// @desc: Checks to see if the head of the snake hits any part of the snake body
		// @return: boolean
		checkCollision: function() {
			if (this.snakeBody.unique().length < this.length) {
				return true;
			} else {
				return false;
			}
		},

		// @desc: Will handle detecting if the snake head is currently
		// 	out of the bounds of the page
		// @param width: the width of the game area
		// @param height: the height of the game area
		// @return: Boolean value dependant on it being out of bounds or not
		checkOutOfBounds: function(width, height) {
			var head = this.getHead();
			if (head.x < 0 || head.x > width) {
				return true;
			}
			if (head.y > height || head.y < 0) {
				return true;
			}

			return false;
		}
	};
	
	return snake;
});