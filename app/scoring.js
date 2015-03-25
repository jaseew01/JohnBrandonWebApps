var proto, Obj;

//@desc: creates a new pellet
//@param width: width of the game area
//@param height: height of the game area
function createScoring() {
	var lst;
	lst = Object.create(proto);
	lst.scores = [];
	lst.length = 0;

	return lst;
}

proto = {
	//@desc: Will add the score to lst.scores and remove the lowest score.
	//	If the score is too low to be recorded, it will be ignored
	//@param score: the score that you want to add
	//@return: the updated list of scores
	addScore: function(score) {
		//
	},

	//@desc: Will remove the score at a certain index in the scores array
	//@param index: the index of the score you want removed
	//@return: the updated list of scores
	removeScoreAtIndex: function(index) {
		//
	},

	//@desc: removes the last item in the scores array
	//@return: the updated list of scores
	removeLowest: function() {
		//
	},

	//@desc: will get the highest score in the scores array
	//@return: the highest score in the scores array
	getHighScore: function() {
		//
	},

	//@desc: decides if score is the current high score
	//@param score: the score to check
	//@return: true or false based on whether or not score is the high score
	isHighScore: function(score) {
		//
	},

	//@desc: gets the lowest score in the scores array
	//@return: the lowest score in the scores array
	getLowestScore: function() {
		//
	}
};

Obj = {
	new:createScoring
};

Object.defineProperty(Obj, "prototype", {
	value: proto,
	writable: false
});

module.exports = Obj;