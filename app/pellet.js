var proto, Obj;

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
function makeNewPellet(width, height) {
	var lst, arr;

	arr = generateXY(width, height);
	lst.x = arr[0];
	lst.y = arr[1];
	lst.width = 5;
	lst.height = 5;
	lst = Object.create(proto);
	return lst;
}

proto = {
	//
};

Obj = {
	new: makeNewPellet
};

Object.defineProperty(Obj, "prototype", {
	value: proto,
	writable: false
});

module.exports = Obj;
