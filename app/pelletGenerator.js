define(function() {
	var pg;

	function pg(pellet, width, height) {
		this.currPellet = pellet;
	}

	pg.prototype = {
		// @desc: updates the current pellet on the screen to a
		//	new randomly generated one
		addPellet: function() {
			lst.currPellet = pellet(width, height);
		}
	};

	return pg;
});
