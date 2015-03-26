/*
 *
 *
 *
 *
 */

var proto, Obj, pellet;

pellet = require("./pellet.js");

function makeNewpelletGenerator() {
	var lst;

	lst = Object.create(proto);
	lst.currPellet = pellet.new(500, 500);
	return lst;
}

proto = {
	// @desc: updates the current pellet on the screen to a
	//	new randomly generated one
	addPellet: function() {
		lst.currPellet = pellet.new(500, 500);
	}
};

Obj = {
	new: makeNewpelletGenerator
};

Object.defineProperty(Obj, "prototype", {
	value: proto,
	writable: false
});

module.exports = Obj;
