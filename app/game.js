define(function() {
	var game;

	// @desc: will handle the interactions between the game's different classes
	// @params: the width and height of the window
	function game(width, height, snake, pelletGenerator, scoring) {
		this.pageObjects = [];
		this.tick = 2000;
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
			var temp = false, len = this.snake.length;
			if(temp === false) {
				this.draw();
				this.snake.move();
				if (this.snake.length > len) {
					this.scoring.updateGameScore();
				}
				temp = this.checkCollisions();
			}
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
				return true;
			}
			return false;
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

	return game;
});