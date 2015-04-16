define(function() {
	var scoring;

	// @desc: Manages the scores for the game
	function scoring(element) {
		this.scoreBox = element;
		this.scores = [];
		this.length = 0;
		this.gameScore = 0;
	}

	scoring.prototype = {
		// @desc: Will add the score to lst.scores and remove the lowest score.
		// 	If the score is too low to be recorded, it will be ignored
		// @param score: the score that you want to add
		// @return: the updated list of scores
		addScore: function(score) {
			this.scores.push(score);
			this.scores.sort(function(a, b) {
				return a - b;
			});
			this.length += 1;
			return this.scores;
		},

		// @desc: Will add 10 to the current game score when called.
		// Will be called every time the snake increases in length.
		updateGameScore: function() {
			this.gameScore += 10;
			this.scoreBox.innerHTML = "Score: " + this.gameScore;
		},

		// @desc: Will remove the score at a certain index in the scores array
		// @param index: the index of the score you want removed
		// @return: the updated list of scores
		removeScoreAtIndex: function(index) {
			this.scores.splice(index, 1);
			this.length -= 1;
			return this.scores;
		},

		// @desc: removes the last item in the scores array
		// @return: the updated list of scores
		removeLowest: function() {
			this.scores.pop();
			this.scores.length -= 1;
			return this.scores;
		},

		// @desc: removes the first item in the scores array
		// @return: the updated list of scores
		removeHighest: function() {
			this.scores.splice(0, 1);
			this.scores.length -= 1;
			return this.scores;
		},

		// @desc: will get the highest score in the scores array
		// @return: the highest score in the scores array
		getHighScore: function() {
			return this.scores[0];
		},

		// @desc: decides if score is the current high score
		// @param score: the score to check
		// @return: true or false based on whether or not score is the high score
		isHighScore: function(score) {
			if (score === this.getHighScore()) {
				return true;
			} else {
				return false;
			}
		},

		// @desc: gets the lowest score in the scores array
		// @return: the lowest score in the scores array
		getLowestScore: function() {
			return this.scores[this.length - 1];
		}
	};

	return scoring;
});