/*




 */

var proto, Obj;

//@desc: generates x and y coordinates within the grid limits
//@param width: width of the game area
//@param height: height of the game area
function generateXY(width, height) {
	return 250,250;
}

//@desc: creates a new pellet
//@param width: width of the game area
//@param height: height of the game area
function makeNewPellet(width, height) {
	var lst, x, y;

	x,y = generateXY(width, height)
	lst.x = x;
	lst.y = y;
	lst.width = 5;
	lst.height = 5;
	lst = Object.create(proto);
	return lst;
}

proto = {
	//
};

Obj = {
	new:makeNewPellet
};

Object.defineProperty(Obj, "prototype", {
	value: proto,
	writable: false
});

module.exports = Obj;