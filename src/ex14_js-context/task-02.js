function Hangman(word) {
    this.countErrors = 6;
    this.inputWord = word;
    this.arrayGuessedLetters = [];
    this.invalidLetters = [];
    for (let index = 0; index < word.length; index++) {
        this.arrayGuessedLetters.push("_");
    }

    this.guess = function (letter) {
        let repeatingletters = [];
        for (let index = 0; index < word.length; index++) {
            if (letter == this.inputWord[index]) {
                repeatingletters.push(index);
            }
        }
        if (repeatingletters.length != 0) {
            for (let index1 = 0; index1 < repeatingletters.length; index1++) {
                this.arrayGuessedLetters[repeatingletters[index1]] =
                    this.inputWord[repeatingletters[index1]];
            }
            if (!this.arrayGuessedLetters.includes("_")) {
                return `${this.arrayGuessedLetters} | You won!`;
            }
            return this.arrayGuessedLetters.join("");
        }
        this.countErrors--;
        this.invalidLetters.push(letter);
        return `wrong letter, errors left ${this.countErrors} | ${this.invalidLetters}`;
    };

    this.getGuessedString = function () {
        return this.arrayGuessedLetters.join("");
    };

    this.getErrorsLeft = function () {
        return this.countErrors;
    };

    this.getWrongSymbols = function () {
        return this.invalidLetters;
    };

    this.getStatus = function () {
        return `${this.arrayGuessedLetters.join("")} | errors left ${this.countErrors
            }`;
    };

    this.startAgain = function (newWord) {
        this.countErrors = 6;
        this.inputWord = newWord;
        this.arrayGuessedLetters = [];
        this.invalidLetters = [];
        for (let index = 0; index < newWord.length; index++) {
            this.arrayGuessedLetters.push("_");
        }
    };
}

let Hangman1 = new Hangman("webpurple");
module.exports = Hangman1;