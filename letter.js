var Letter = function(letter){
    this.letter= letter;
    this.guessed= false;
    this.ifGuessed= function(){
        if(!this.guessed){
            return "_";
        }
        else{
            return this.letter;
        }
    }
    this.compare= function(guessedLetter){
        if(guessedLetter===this.letter){
            this.guessed=true;
        }
    }
}

module.exports = Letter