# Constructor-Word-Guess

# Overview
This Constructor Word Guess application is a command line interface (CLI) game that mimics that of your typical hangman. The game will initialize and present you a certain number of underscores; each underscore represents a letter in a word you are attempting to guess. This game will go on until either:

1. You run out of guesses (which decrement everytime you guess a letter that is not in the word)
OR
2. You guess the word correctly _before_ you run out of guesses

Once an entire round has been completed, you have the opportunity to play another (or opt out).

The app keeps track of your wins and losses.

# Instructions
This is a Node.js application and thus has to be run in the bash/terminal on your computer.

In order to initialize this app, you must type ```node index.js``` in your terminal window while inside of the Constructor-Word-Guess folder.

After, the app will provide a short introduction and then prompt you to guess a letter. To play simply guess a letter until you either correctly guess the word, or run out of guesses. 

From there you will have the option to either try again and play another round or not and exit out of the game.

Below is an example of how the game will function:

![Word Guess Cli](Images/01-WordGuess-Cli.gif)

## Technology
The [Inquirer npm package](https://www.npmjs.com/package/inquirer#questions)was used to create the CLI for the user to interact with and
play the game.

## Role
Lead Developer