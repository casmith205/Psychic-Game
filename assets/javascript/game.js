// Creating a function to determine if user correctly guessed
function isPsychic (user, computer){

    if(user===computer){
        return "Win"
    } else {
        return "Incorrect"
    }

};

// Checking whether user input is in the userChoices array
function inArray(user, arr)
{
    var count=arr.length;
    for(var i=0;i<count;i++)
    {
        if(arr[i]===user){return true;}
    }
    return false;
}


// Reset the funtion after a win/loss
function reset (){
    guessesLeft=9;
    guessedLetters=[];
    computerLetter = computerChoices[Math.floor(Math.random() * computerChoices.length)];
}

// Creates an array for the computer choices (entire alphabet - lowercase)
computerChoices = [];
for (i=97;i<=122;i++){
    computerChoices[computerChoices.length] = String.fromCharCode(i);
};


// Connect variables to HTML & starting position
var wins = 0;
var losses = 0;
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
    
    // Checks if input is accpetable
    var validLetter = inArray(userGuess, computerChoices); 
    console.log(validLetter);

    // creating a "result" variable for the resilt of the isPsychic function
    var result = isPsychic(userGuess, computerLetter);
    console.log(result);

    // Creating an "If" stmt to first check if valids input, and then if win/incorrect result
    if(validLetter == true){
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
        
    } else {
            alert("Invalid input! Please use the alphabet :)")

    };  

    // Changing HTML text
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("losses").innerHTML = losses;
    document.getElementById("remainingGuesses").innerHTML = guessesLeft;
    document.getElementById("guessedLetters").innerHTML = guessedLetters;

};