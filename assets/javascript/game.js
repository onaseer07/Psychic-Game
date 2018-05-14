
//Start
//Computer selects a random alphabet;
let letterChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
let computerChoices = letterChoices[Math.floor(Math.random()*letterChoices.length)];
alert("Computer picked " + " ' " + computerChoices + " ' ");
//userguess could be any alphabet on the keyboard;
document.onkeyup = function (event) {
    let userGuess = event.key;
    alert(userGuess);
    let wins = 0;
    let losses = 0;
    let lives;
    let guessedList = [];
    
    if (userGuess === computerChoices) {
        document.getElementById("win").textContent = wins++;
    } else (lives-1);
    alert (lives);
}

//selected alphabet gets stored as a value to check against userguess;

//if the userguessed letter matches computer's selected alphabet then user wins else the lives go down by 1 out 8.;

//when live is less than 8 the game is over and the user is lost ;

//display guesssed letters;
//display lives left counter;
//display # of wins:;
//display # of losse:;
