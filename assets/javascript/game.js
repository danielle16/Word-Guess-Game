$(document).ready(function() {

    var secretWord = ["united states", "mexico", "argentina", "venezuela", "ecuador"];
    var lettersGuessed = [];
    var lettersGuessedCorrectly = [];
    var wins = 0;
    var losses = 0;
    var numOfGuessingRemaining = 10; 
    var currentWord; 
    temp = Math.floor(Math.random() * secretWord.length);
    var currentWord = secretWord[temp];
    
    document.onkeyup = function(event){
       var userGuess = event.key;
    
       for(var i = 0; i < currentWord.length; i++) {
           if(userGuess == currentWord[i]) {
               lettersGuessedCorrectly.push(userGuess);
           }
       };
    
       if(lettersGuessedCorrectly.includes(userGuess)) {
           numOfGuessingRemaining--;
       };
    
       function fillInDashes () {
       var dashes = "";
       for (var i = 0; i < currentWord.length; i++) {
           if(lettersGuessedCorrectly.includes(currentWord[i])) {
              dashes += currentWord[i];
           }
           else {
               dashes += "_";
           }
     
       }
       return dashes;
    }
    
    $(".secretWord").text("Secret Word: " + fillInDashes());
    $(".numOfGuesses").text("Number of Guesses Remaining: " + numOfGuessingRemaining);
    $(".lettersGuessed").text("Letters Guessed: " + lettersGuessed);
    $(".wins").text("Wins: " + wins);
    $(".losses").text("Losses: " + losses);
    
    
    };
    });