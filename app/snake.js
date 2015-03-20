/*



 */

var proto, Obj;

function newSnake() {
	var lst;

	lst = Object.create(proto);
	lst.snakeBody = [];
	lst.direction = "North";
	lst.directions = ["North", "South", "East", "West"];
	return lst;
}

proto = {
	//@desc: Will change the direction of the snake
	//@param dir: Snakes new direction
	changeDirection: function(dir) {
		if(directions.contains(dir)) {
			this.direction = dir;
		} else {
			throw new Error("Invalid Direction");
		}
	},

	//@desc: Will add one box onto the body of the snake
	addOne: function() {
		//
	},

	//@desc: Will move the snake in the current direction
	//	Each item in this.snakeBody will take on the coordinates
	//	of the item before itself in the array.
	//	The first item in the array will move in the direction of this.direction
	move: function() {
		//
	},

	//@desc: Checks to see if the head of the snake hits any part of the snake body
	//@return: boolean
	checkCollision: function() {
		//
	}
};

Obj = {
	new:newSnake
};

Object.defineProperty(Obj, "prototype", {
	value: proto,
	writable: false
});

module.exports = Obj;