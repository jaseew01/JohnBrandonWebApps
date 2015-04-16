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
require(["jquery", "game", "scoring", "snake", "pellet"], function($, Game, Scoring, Snake, Pellet) {
	var game, snake, pg, scoring, width, height;
	$(function() {
		width = 330;
		height = 330;
		console.log("Page loaded!");
		snake = new Snake(15);
		scoring = new Scoring(document.getElementById("score"));
		pellet = new Pellet(width, height);
		game = new Game(width, height, snake, scoring, pellet);

		var handleKeyPress = function(e) {
			var event = window.event ? window.event : e;
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
				scoring.addScore(scoring.gameScore);
				scoring.gameScore = 0;
				alert("GAME OVER");
			}else {
				game.run();
			}
		}

		//  Start the game loop
		game._intervalId = setInterval(temp, game.tick);
	});
});