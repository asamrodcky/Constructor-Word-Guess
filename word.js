var Letter = require("./letter.js")

var Word = function () {
    this.letters = [];
    this.display = [];
    this.init = function (str) {
        for (var i = 0; i < str.length; i++) {
            this.letters.push(new Letter(str[i]))
        }

        // console.log(this.letters)
    };
    this.displayedWord = function () {
        for (var i = 0; i < this.letters.length; i++) {
            this.display.push(this.letters[i].ifGuessed())
        }
        console.log(this.display.join(" "))
    };
    this.isGuessed = function (l) {
        for (var i = 0; i < this.letters.length; i++) {
            this.letters[i].compare(l)
        }
    };
}

// var w = new Word();
// w.init("Phone");
// w.isGuessed("o");
// w.displayedWord();

module.exports = Word