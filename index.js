var Word = require("./word.js")

var inquirer = require("inquirer");

var renderIntro = function(){
    console.log("Hello, and welcome to my Word Guess Game. The category is streetwear brands. The first word has already been generated for you. Guess a letter to begin")
}
renderIntro();

var renderWord = function(guess){
    var wordArr = ["Nike","Adidas","Supreme","Palace","Champion"]
    var randWord = wordArr[Math.floor(Math.random() * 5)].toLowerCase();
    var w = new Word ();
    w.init(randWord);
    w.displayedWord();
    w.isGuessed(guess);
}
renderWord();


var playRound = function(){
    var guess = ""
    var numGuesses = 5;
    if(numGuesses > 0){
        inquirer
        .prompt([
          // Here we give the user a list to choose from.
          {
            type: "input",
            message: "Guess a letter: ",
            name: "guess",
            validate: function(value){
                if(isNaN(value)){
                    return true;
                }
                else{
                    return false;
                }
            }
          },
        ])
        .then(function(input) {
            guess = input.guess.toLowerCase();
            renderWord(guess);
            playRound();
        });
    }
    else{
        console.log("You're all out of guesses, take this L")
    } 
}


playRound();