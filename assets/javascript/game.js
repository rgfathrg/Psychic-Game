var wins = 0;
var losses = 0;
var guessesLeft = 12;


var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"];




var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

  document.onkeyup = function(event) {
    var userGuess = event.key;
    
 if (userGuess !== computerGuess) {
    guessesLeft = guessesLeft - 1;
    if (guessesLeft <= 0) {
       losses++;
    }   
  }
  else {
      wins++;
  }
      
  
  var html = 
  "<p>Wins: " + wins + "</p>" +
  "<p>Losses: " + losses + "</p>" +
  "<p>Guess left: " + guessesLeft + "</p>" +
  "<p>You guessed so far: " + userGuess + "</p>";

  document.querySelector("#game").innerHTML = html;
 };

 
