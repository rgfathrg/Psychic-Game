var wins = 0;
var losses = 0;
var guessesLeft = 12;
var userAttempts = [];

var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"];



function compGuess() {
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
return computerGuess;
}
var holdGuess = compGuess();


  document.onkeyup = function(event) {
    var userGuess = event.key;
    
 if (userGuess !== holdGuess) {
    guessesLeft = guessesLeft - 1;
     userAttempts = userAttempts + event.key + ", ";
    }   
  
 if (userGuess === holdGuess) {
      wins++;
      holdGuess = compGuess();
      guessesLeft = 12;
      userAttempts = [];
  }

 if (guessesLeft <= 0) {
    losses++;
    guessesLeft = 12;
    userAttempts = [];
    holdGuess = compGuess();
 }
      
  
  var html = 
  "<p>Wins: " + wins + "</p>" +
  "<p>Losses: " + losses + "</p>" +
  "<p>Guess left: " + guessesLeft + "</p>" +
  "<p>You guessed so far: " + userAttempts + "</p>";

  document.querySelector("#game").innerHTML = html;
 };

 
