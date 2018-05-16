
    let letterChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
                        "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", 
                        "u", "v", "w", "x", "y", "z",];
    let wins = 0;
    let losses = 0;
    let guessedList = [ ];
    let computerChoices = letterChoices[Math.floor(Math.random()*letterChoices.length)];;
    let lives = 9;
    alert("My initial choice is: " + computerChoices);
            document.onkeyup = function (event) {
            let userGuess = event.key.toLowerCase();
            if (letterChoices.indexOf(userGuess) > -1) {
                
                if (userGuess === computerChoices) {
                    wins++;
                    lives = 9;
                    guessedList = [];
                    computerChoices = letterChoices[Math.floor(Math.random()*letterChoices.length)];;
                    alert(computerChoices);
                } else if (userGuess !== computerChoices) {
                    lives--;
                    guessedList.push(userGuess);
                    if (lives === 0) {
                        losses++;
                        lives = 9;
                        guessedList = [];
                        computerChoices = letterChoices[Math.floor(Math.random()*letterChoices.length)];
                    } 
                }   

			var html = 
			"<h1> The Psychic Game </h1>" +
			"<p>Guess what letter I'm thinking of!</p>" +
			"<p>Wins: " + wins + "</p>" +
			"<p>Losses: " + losses + "</p>" +
			"<p>Lives Left: " + lives + "</p>" +
			"<p>Your Guesses so far: " + guessedList.join(", ") + "</p>";

            document.querySelector("#scoreboard").innerHTML = html;
            }
        }
