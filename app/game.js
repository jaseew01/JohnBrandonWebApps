define(function() {
	// @desc: will handle the interactions between the game's different classes
	// @params: the width and height of the window
	function game(width, height, snake, scoring, pellet) {
		this.pageObjects = [];
		this.tick = 250;
		this.width = width;
		this.height = height;
		this.isStopped = false;
		this.snake = snake;
		this.pellet = pellet;
		this.scoring = scoring;
		this.canvas = document.getElementById("canvas");
	}

	game.prototype = {
		// @desc: will run the game
		// @return: null
		run: function() {
			this.snake.move();
			this.eatPellet();
			this.draw();
			this.checkCollisions();
		},

		// @desc: will look to see if the snake has touched any
		// 	of the objects in this.pageObjects
		// @return: false for no collisions, true for a collision
		checkCollisions: function() {
			var temp = [];

			temp.push(this.snake.checkOutOfBounds(this.width, this.height));
			temp.push(this.snake.checkCollision());

			if (temp.indexOf(true) !== -1) {
				this.isStopped = true;
				return true;
			} else {
				return false;
			}
		},

		eatPellet: function() {
			var pellBoundaries = [], snakeHead = this.snake.getHead();
			pellBoundaries.push(this.pellet.x);
			pellBoundaries.push(this.pellet.x + this.pellet.pelletSide);
			pellBoundaries.push(this.pellet.y);
			pellBoundaries.push(this.pellet.y + this.pellet.pelletSide);

			if (snakeHead.x < pellBoundaries[1] &&
				snakeHead.x + this.snake.bodySize > pellBoundaries[0] &&
				snakeHead.y < pellBoundaries[3] &&
				snakeHead.y + this.snake.bodySize > pellBoundaries[2]) {
				this.snake.addOne();
				this.scoring.updateGameScore();
				this.pellet.randomize();
			}
		},

		draw: function() {
			var bodySize, ctx, temp, i;
			if (this.canvas.getContext){
				bodySize = this.snake.bodySize;
				ctx = this.canvas.getContext("2d");
				temp = {};

				ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
				ctx.fillStyle = "rgb(0,0,200)";
				ctx.fillRect(this.pellet.x, this.pellet.y, 7, 7);
				ctx.fillStyle = "rgb(200,0,0)";
				for (i = 0; i < this.snake.length; i += 1) {
					temp = this.snake.snakeBody[i];
					ctx.fillRect(temp.x, temp.y, bodySize, bodySize);
				}
			}
		}
	};

	return game;
});
