define(function() {
	var pg;

	function pg(pellet) {
		this.currPellet = pellet;
	}

	pg.prototype = {
		// @desc: updates the current pellet on the screen to a
		//	new randomly generated one
		addPellet: function() {
			lst.currPellet = pellet.new(500, 500);
		}
	};
	
	return pg;
});
