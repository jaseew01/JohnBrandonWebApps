define(function() {
	var pellet;

	// @desc: generates x and y coordinates within the grid limits
	// @param width: width of the game area
	// @param height: height of the game area
	function generateXY(width, height) {
		var x = Math.floor(Math.random() * width), y, tempArr = [];
		y = Math.floor(Math.random() * height);
		tempArr.push(x, y);
		return tempArr;
	}

	// @desc: creates a new pellet
	// @param width: width of the game area
	// @param height: height of the game area
	function pellet(width, height) {
		var arr;

		arr = generateXY(width, height);
		this.x = arr[0];
		this.y = arr[1];
		this.width = width;
		this.height = height;
		this.pelletSide = 7;
	}

	pellet.prototype = {
		randomize: function() {
			var temp = generateXY(this.width, this.height);
			this.x = temp[0];
			this.y = temp[1];
		}
	};

	return pellet;
});