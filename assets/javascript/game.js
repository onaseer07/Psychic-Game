
//Start
//Computer selects a random alphabet;
function startGame() {
let letterChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
let computerChoices = letterChoices[Math.floor(Math.random()*letterChoices.length)];
let lives = 9;
let wins = 0;
let losses = 0;
let guessedList = [ ];

alert("Computer picked " + " ' " + computerChoices + " ' ");


document.getElementById("losses").innerHTML = "Total Losses: " + losses;
document.getElementById("lives").innerHTML = "Total Lives Left: " + lives;


    do {
        
        document.onkeyup = function (event) {
            let userGuess = event.key;
        if (letterChoices.indexOf(userGuess) > -1) {
            guessedList.push(userGuess);
            document.getElementById("lettersGuessed").innerHTML = "Letter Guessed: [ " + guessedList + " ]";
        
            if (userGuess == computerChoices) {
                wins++;  
                document.getElementById("win").innerHTML = "Total Wins: " + wins;
                let restartQuestion = confirm("PLAY AGAIN?");
                if(restartQuestion == true) {
                location.reload();
                } else if (restartQuestion == false) {
                alert("YOU MAY 'X' THIS WINDOW!");
                }
            } else if (userGuess !== computerChoices) {
                lives--;
                alert("Total Lives: " + lives);
                if (lives == 0) {
                    alert("GAMEOVER");
                    let restartQuestion = confirm("PLAY AGAIN?");
                    if(restartQuestion == true) {
                    location.reload();
                    } else if (restartQuestion == false) {
                    alert("YOU MAY 'X' THIS WINDOW!");
                    }
                }
            }
        }
    }; 
    }while (lives == 0);
}



/*/if the userguessed letter matches computer's selected alphabet then user wins else the lives go down by 1 out 8.;

//when live is less than 9 the game is over and the user is lost;

//display guessed letters;
//display lives left counter;
//display # of wins:;
//display # of losses:*/
