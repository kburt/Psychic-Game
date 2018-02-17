    // Computer guesses a random letter from the alphabet
    $(window).keypress(function(){
        function randLetter() {
            var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
            var letter = alphabet[Math.floor(Math.random() * alphabet.length)];
            return letter;
            
        }

       $('#letter').text(randLetter())
        });


function checkLetters() {
    // The number of wins initially set to 0
    var numWins = 0;

    // The number of losses initially set to 0
    var numLoss = 0;

    // The number of guesses initially set to 9
    var numGuess = 9;

    // The number of incorrectly guessed letters initially set to blank
    var letterGraveyard; 
    
    // function logs key pressed by user
    var guessedLetter = $(".wins").addEventListener("keyup", function(){
    document.getElementById(".losses").innerHTML = "Test";
});
                  
    // While the number of user guesses is less than 10, check to see if guessedLetter === randomLetter, if yes then numWins++, if not then numLoss++. With each guess the numGuess--. 
    while (numGuess < 10) {
        for (numGuess = 0; numGuess < 10; numGuess++){
            if (letter === guessedLetter){
                numWins++;
                numGuess--;
                console.log(numWins);
                console.log(numGuess);
                document.getElementById("numberofGuesses").innerHTML = "<p>" + "Your letter guesses so far:" + numGuess + "</p>";
            } else if (letter != guessedLetter) {
                numLoss++;
                numGuess--;
                document.getElementById("numberofGuesses").innerHTML = "<p> " + "Your letter guesses so far:" + numGuess + "</p>";  
            }
        }
    }
}
    



                 