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
require(["jquery", "game"], function($, Game) {
	var game;
	$(function() {
		console.log("Page loaded!");
		game = new Game(500, 500);

		//  Start the game loop
		game._intervalId = setInterval(game.run, game.tick);
		//  To stop the game loop
		game.on("stopGame", clearInterval(game._intervalId));
	});
});