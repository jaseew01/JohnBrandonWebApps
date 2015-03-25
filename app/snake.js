var proto, Obj;

function newSnake() {
	var lst;

	lst = Object.create(proto);
	lst.snakeBody = [{x: 250, y: 250}];
	lst.length;
	lst.direction = "North";
	lst.directions = ["North", "South", "East", "West"];	
	Array.prototype.unique = function() {
	    var o = {}, i, l = this.length, r = [];
	    for(i=0; i<l;i+=1) o[this[i]] = this[i];
	    for(i in o) r.push(o[i]);
	    return r;
	};
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
		newTail = {x: null, y: null};
		this.length += 1;
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
		if(this.snakeBody.length < this.length) {
			return true;
		} else {
			return false;
		}
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