define(function() {
	var game;

	// @desc: will handle the interactions between the game's different classes
	// @params: the width and height of the window
	function game(width, height, snake, scoring, pellet) {
		this.pageObjects = [];
		this.tick = 1000;
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
			var len = this.snake.length;
			
			this.snake.move();
			this.draw();

			if (this.snake.length > len) {
				this.scoring.updateGameScore();
			}

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
				this.isStopped = true;
				return true;
			} else {
				return false;
			}
		},

		update: function() {
			//
		},

		draw: function() {
			if(canvas.getContext){
				var bodySize = this.snake.bodySize;
				var ctx = canvas.getContext("2d");
				var temp = {};

				ctx.clearRect(0, 0, canvas.width, canvas.height);
				ctx.fillStyle = "rgb(0,0,200)";
				ctx.fillRect(this.pellet.x, this.pellet.y, 7, 7);
				ctx.fillStyle = "rgb(200,0,0)";
				for (var i = 0; i < this.snake.length; i++) {
					temp = this.snake.snakeBody[i];
					ctx.fillRect (temp.x, temp.y, bodySize, bodySize);
				};
			}
		}
	};

	return game;
});