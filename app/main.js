// Main file that loads things up.
// Called from require.js
require.config({
	baseUrl: "app",
	paths: {
		"jquery": "https://code.jquery.com/jquery-2.1.3.min"
		// or the following to load remotely:
		// "jquery": "https://code.jquery.com/jquery-2.1.3.min"
	}
});

// All other modules should be called through here
require(["jquery", "game", "pelletGenerator","scoring","snake"], function($, Game, PG, Scoring, Snake) {
	var game, snake, pg, scoring;
	$(function() {
		console.log("Page loaded!");
		snake = new Snake(15);
		pg = new PG();
		scoring = new Scoring();
		game = new Game(500, 500, snake, pg, scoring);

		var handleKeyPress = function(e) {
			var event = window.event ? window.event : e;
			console.log(event.keyCode);
			switch(event.keyCode) {
				case 37:
				snake.changeDirection("West");
				break;

				case 38:
				snake.changeDirection("North");
				break;

				case 39:
				snake.changeDirection("East");
				break;

				case 40:
				snake.changeDirection("South");
				break;
			}
		};

		window.addEventListener("keypress", handleKeyPress, false);

		function temp() {
			if(game.isStopped) {
				//  To stop the game loop
				clearInterval(game._intervalId);
				alert("GAME OVER");
			}else {
				game.run();
			}
		}

		//  Start the game loop
		game._intervalId = setInterval(temp, game.tick);
	});
});