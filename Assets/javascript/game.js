$(document).ready(function() {

// Show alphabet for user to select from
var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_"];

// Create alphabet to choose from
// Create buttons for each letter 
for (var i =0; i < letters.length; i++) {
  var letterBtn = $("<button>");
  letterBtn.addClass("letter-button letter letter-button-color");
  letterBtn.attr("data-letter", letters[i]);
  letterBtn.text(letters[i]);
  $("#buttons").append(letterBtn);
};

// Attach on-event clicks to each letter button
$(".letter-button").on("click", function () {
    var userChoice = $("<span>");
    userChoice.addClass("letter-color");
    userChoice.text($(this).attr("data-letter"));
    $("#display").append(userChoice);
});

// Clear game board
$("#clear").on("click", function() {
    $("#display").empty();
});
/*
  //fill the answer array with under scores
//the number of underscores matches the letters in the randomly choosen word
function startUp() {
  // this loop is to allow for the answerArray index to be added to the randoWords array.
  for (var i = 0; i < randomWord.length; i++) {
      answerArray[i] = "_";
  }
  // Clear game board
  $("#clear").on("click", function() {
    $("#display").empty();
  });

  // Start a new game button
  $("#newGame").on("click", function() {
    $("#displayWord").empty();
  });

// Reference the DOM elements
var $newGameButton = document.getElementById('new-game-button');
var $blanks = document.getElementById('blanks');
var $guessedLetters = document.getElementById('guessed-letters');
var $guessesRemaining = document.getElementById('guesses-Remaining');
var $wins = document.getElementById('wins');
var $losses = document.getElementById('losses');

// Create variables for game 
var wordBank = ["javascript", "bitcoin", "spongebob", "coding", "California", "concatenating", "property", "object", "assignment", "selector"];
var wins = 0;
var losses = 0;
var guessesRemaining = 8;
var gameRunning = false;
var chosenWord = '';
var chosenWordblankArr = [];
var guessedLetterBank = [];
var incorrectLetterBank = [];



// Create newGame function to reset all stats, pick new word and create blanks
function newGame () {
  // reset all game info
  gameRunning = true;
  guessesRemaining = 8;
  guessedLetterBank = [];
  incorrectLetterBank = [];
  chosenWordblankArr = [];

  // pick a new word
  chosenWord = wordBank[Math.floor(Math.random() * wordBank.length)];

  // create blanks for each letter
  for (var i = 0; i < chosenWord.length; i++) {
      if (chosenWord[i] === ' ') {
          chosenWordblankArr.push(' ');
      } else {
          chosenWordblankArr.push('_');
      }
  }

  // write all new game info to DOM
  $guessesRemaining.textContent = guessesRemaining;
  $blanks.textContent = chosenWordblankArr.join('');
  $guessedLetters.textContent = incorrectLetterBank;

}
// userGuess function, takes in the letter you pressed and sees if it's in the selected word
function userGuess(letter) {
  console.log(letter);

  if(gameRunning === true && guessedLetterBank.indexOf(letter) === -1) {
      // Run game logic
      guessedLetterBank.push(letter);

      // Check if guessed letter is in my chosen word
      for (var i = 0; i < chosenWord.length; i++) {
          // Convert both values to lower case they can be compared correctly
          if (chosenWord[i].toLowerCase() === letter.toLowerCase()) {
              // If a match, swap out that character in the blank with the actual letter
              chosenWordblankArr[i] = chosenWord[i];
          }
      }

      $blanks.textContent = chosenWordblankArr.join('');
      checkIncorrect(letter);


  } else {
      if (!gameRunning) {
          alert("The game isn't running, click on the New Game button to start over.");
      } else {
          alert("You've already guessed this letter, try a new one.");
      }
  }
}
// checkIncorrect(letter)
function checkIncorrect(letter) {
  // Check to see if letter DIDN'T make it into our chosenWordblank (therefore, incorrect guess)
  if (
      chosenWordblankArr.indexOf(letter.toLowerCase()) === -1 
      && 
      chosenWordblankArr.indexOf(letter.toUpperCase()) === -1
  ) {
      guessesRemaining--;
      // Add incorrect lettter to incorrectLetterBank
      incorrectLetterBank.push(letter);
      // Write new bank of incorrect letters guessed to DOM
      $guessedLetters.textContent = incorrectLetterBank.join(' ');
      // Write new amount of guesses left to DOM
      $guessesRemaining.textContent = guessesRemaining;
  }
}
// checkLoss
function checkLoss() {
  if (guessesRemaining === 0) {
      losses++;
      gameRunning = false;
      $losses.textContent = losses;
      $blanks.textContent = chosenWord;
  }
  checkWin();
}
// checkWin
function checkWin() {
  // this checks to see if chosen word = the same word in the blank array. If it does, you win
  if (chosenWord.toLowerCase() === chosenWordblankArr.join('').toLowerCase())
  {
      wins++;
      gameRunning = false;
      $losses.textContent = losses;
  }
}

// Add event listener for new game button
$newGameButton.addEventListener('click', newGame);

// Add onkeyup even to trigger userGuess
document.onkeyup = function(event) {
  if (event.keyCode >= 65 && event.keyCode <= 90) {
      // This puts in the actual letter pressed
      userGuess(event.key);
  } */
})