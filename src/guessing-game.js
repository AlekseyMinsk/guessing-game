class GuessingGame {
    constructor(current = null, min = null, max = null, guess = null) {
        this.current = current;
        this.min = min;
        this.max = max;
        this.guessNumber = guess;
    }

    setRange(min, max) {
    	this.min = min;
    	this.max = max;
    }

    guess() {
    	let halfDifference = Math.ceil((this.max - this.min) / 2);
    	this.current = this.min + halfDifference;
    	return this.current;

    }

    lower() {
    	this.max = this.current;
    }

    greater() {
		this.min = this.current;
    }
}

module.exports = GuessingGame;
