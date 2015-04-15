define(function() {
	var game;

	// @desc: will handle the interactions between the game's different classes
	// @params: the width and height of the window
	function game(width, height, snake, pelletGenerator, scoring) {
		this.pageObjects = [];
		this.tick = 1000;
		this.width = width;
		this.height = height;
		this.isStopped = false;
		this.snake = snake;
		this.pelletGenerator = pelletGenerator;
		this.scoring = scoring;
		this.canvas = document.getElementById("canvas");
	}

	game.prototype = {
		// @desc: will run the game
		// @return: null
		run: function() {
			var len = this.snake.length;
			
			this.draw();
			this.snake.move();
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
				return true;
			}
			return false;
		},

		update: function() {
			//
		},

		draw: function() {
			if(canvas.getContext){
				var bodySize = this.snake.bodySize;
				var ctx = canvas.getContext("2d");
				var head = this.snake.getHead();
				var tail = this.snake.getTail();
				var temp = {};

				ctx.clearRect(0, 0, canvas.width, canvas.height);
				ctx.fillStyle = "rgb(200,0,0)";
				for (var i = 0; i < this.snake.length; i++) {
					temp = this.snake.snakeBody[i];
					ctx.fillRect (temp.x, temp.y, bodySize, bodySize);
				};
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

	return game;
});