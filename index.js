var Word = require("./word.js")

var inquirer = require("inquirer");

var renderIntro = function(){
    console.log("Hello, and welcome to my Word Guess Game. The category is streetwear brands. The first word has already been generated for you. Guess a letter to begin")
}
renderIntro();

var wordArr = ["Nike","Adidas","Supreme","Palace","Champion"];
var randWord = "";
var w = "";

var renderWord = function(){
    randWord = wordArr[Math.floor(Math.random() * 5)].toLowerCase();
    w = new Word ();
    w.init(randWord);
}
renderWord();

w.displayedWord();

var guess = ""
var numGuesses = 5;
var alreadyGuessed = []
console.log("Number of Guesses: " + numGuesses)

var playRound = function(){

    if(numGuesses > 0){
        inquirer
        .prompt([
          // Here we give the user a list to choose from.
          {
            type: "input",
            message: "Guess a letter: ",
            name: "guess",
            validate: function(value){
                if(isNaN(value) && value.length == 1 && !alreadyGuessed.includes(value)){
                    return true;
                }
                else{
                    return false;
                }
            }
          },
        ])
        .then(function(input) {
            alreadyGuessed.push(input.guess.toLowerCase())
            guess = input.guess.toLowerCase();
            w.isGuessed(guess);
            w.display = []
            w.displayedWord();
            if(!w.display.includes(guess)){
                numGuesses--
            }

            if(w.display.join("")===randWord){
                console.log("YOU'VE WON! Get ready for the next round.")
                numGuesses = 5;
                alreadyGuessed = []
                renderWord();
                w.displayedWord();
            }
            console.log("Number of Guesses: " + numGuesses)
            playRound();
        });
    }
    else{
        console.log("You're all out of guesses, take this L. Get ready for the next round.")
        numGuesses = 5;
        alreadyGuessed = [];
        renderWord();
        w.displayedWord();
        console.log("Number of Guesses: " + numGuesses);
        playRound();
    } 
}


playRound();