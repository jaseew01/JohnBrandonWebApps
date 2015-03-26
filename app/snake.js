var proto, Obj;

//@desc: this class will handle the snake moving around the page
//@param bodySize: the width/height of each square in the snake body
function newSnake(bodySize) {
	var lst;

	lst = Object.create(proto);
	lst.snakeBody = [{x: 250, y: 250}];
	lst.length = 1;
	lst.direction = "North";
	lst.directions = ["North", "South", "East", "West"];
	lst.bodySize = bodySize;
	lst.moveCoordinates = {
		North: {x:0, y:bodySize},
		South: {x:0, y:-bodySize},
		East: {x:bodySize, y:0},
		West: {x:-bodySize, y:0}
	};

	Array.prototype.unique = function() {
	    var o = {}, i, l = this.length, r = [];
	    for(i=0; i<l;i+=1) o[""+this[i].x+""+this[i].y] = this[i];
	    for(i in o) r.push(o[i]);
	    return r;
	};

	return lst;
}

proto = {
	//@desc: Will change the direction of the snake
	//@param dir: Snakes new direction
	changeDirection: function(dir) {
		if(this.directions.contains(dir)) {
			this.direction = dir;
		} else {
			throw new Error("Invalid Direction");
		}
	},

	//@desc: Will add one box onto the body of the snake
	addOne: function() {
		var currTail = this.getTail();
		var newTail = {x:currTail.x, y:currTail.y+this.bodySize};
		this.snakeBody.push(newTail);

		this.length += 1;
	},

	//@desc: Will move the snake in the current direction
	//	Each item in this.snakeBody will take on the coordinates
	//	of the item before itself in the array.
	//	The first item in the array will move in the direction of this.direction
	move: function() {
		var newObj = {}, distChange, head;
		distChange = this.moveCoordinates[this.direction];
		head = this.getHead();

		this.snakeBody.pop();
		newObj.x = head.x + distChange.x;
		newObj.y = head.y + distChange.y;

		this.snakeBody.unshift(newObj);
	},

	//@desc: Will get the tail of the snake body
	//@return: the last object in the snake body
	getTail: function() {
		return this.snakeBody[this.length-1];
	},

	//@desc: Will get the head of the snake body
	//@return: the first object in the snake body
	getHead: function() {
		return this.snakeBody[0];
	},

	//@desc: Checks to see if the head of the snake hits any part of the snake body
	//@return: boolean
	checkCollision: function() {
		if(this.snakeBody.unique().length < this.length) {
			return true;
		} else {
			return false;
		}
	},

	//@desc: Will handle detecting if the snake head is currently
	//	out of the bounds of the page
	//@param width: the width of the game area
	//@param height: the height of the game area
	//@return: Boolean value dependant on it being out of bounds or not
	checkOutOfBounds: function(width, height) {
		head = this.getHead();
		if(0 < head.x < width) {
			if(0 < head.y < height) {
				return false;
			}
		} else {
			return true;
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