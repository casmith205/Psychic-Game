// Creating a function to determine if user correctly guessed
function isPsychic (user, computer){
    if(user===computer){
        return "Win"
    } else {
        return "Incorrect"
    }
};


// Reset the funtion after a win/loss
function reset (){
    guessesLeft=9;
    guessedLetters=[];
    computerLetter = computerChoices[Math.floor(Math.random() * computerChoices.length)];
}

// Creates an array for the entire alphabet(lowercase)
computerChoices = [];
for (i=97;i<=122;i++){
    computerChoices[computerChoices.length] = String.fromCharCode(i);
};

// Connect variables to HTML & starting position
var wins = document.getElementById("wins");
var losses = document.getElementById("losses");
var guessesLeft = 9; 
var guessedLetters = [];


// Get computer's guess
var computerLetter = computerChoices[Math.floor(Math.random() * computerChoices.length)];

// This function is run whenever the user presses a key.
document.onkeyup = function (event) {
    // Checking what the computer generated for testing purposes
    console.log(computerLetter);
    
    // Determines which key was pressed.
    var userGuess = event.key;
    console.log(userGuess);

    // creating a "result" variable for the resilt of the isPsychic function
    var result = isPsychic(userGuess, computerLetter);
    console.log(result);
    
    // Creating an "If" stmt to tell what to do for a win/incorrect result
    if( result=="Win"){
        // add a win into the log
        wins++;
        reset ();
        
    } else {
        // reduce the guesses left 
        guessesLeft--;
        // record the guesses so far
        guessedLetters.push(userGuess);
    }
    
    if(guessesLeft==0) {
        // add a loss into the log
        losses++;
        reset ()

    }

    // Changing HTML text
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("losses").innerHTML = losses;
    document.getElementById("remainingGuesses").innerHTML = guessesLeft;
    document.getElementById("guessedLetters").innerHTML = guessedLetters;


console.log(wins);
console.log(losses);
console.log(guessesLeft);
console.log(guessedLetters);

};