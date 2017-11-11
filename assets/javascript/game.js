//options for computer to choose from array

var options = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

// variables to keep score
var wins = 0;
var losses = 0;
var guesses = 5;
var yourGuess = [];

//for computer to pick random letters

var computerguess = options[Math.floor(Math.random()*options.length)];

console.log(computerguess);

//user to key in answer
document.onkeyup = function(){
	var userguess = String.fromCharCode(event.keyCode).toLowerCase();

	console.log("userguess...",userguess);
	console.log("computerguess...",computerguess);
//logs what letters are being selected

	yourGuess.push(userguess);
//conditions for games and resets

	if (userguess === computerguess){ 
		wins++;
		computerguess = options[Math.floor(Math.random()*options.length)];
		// alert("You win!")
		alert(`You win! u guessed ${userguess}`)
	}else{
		guesses--;
	}

	if (guesses == 0) {
		losses++;
		console.log("You lost!");
		alert("You are not Psychic!");
		//wins = 0;
		//losses = 0;
		guesses = 5;
		yourGuess = [];
		computerguess = options[Math.floor(Math.random()* options.length)]
	}
	 
	if (wins === 2){ 
//checked that this worked with less options and more guesses

		console.log("you win");
		alert("You are Psychic!");
		resetGame();
	}else if (losses === 2){
		alert("Game Over!");
		resetGame();

	}
	
	
	
	console.log("-----------");
	console.log("Wins: "+wins);
	console.log("-----------");
	console.log("losses: "+losses)
	console.log("-----------");
	console.log("guesses left: "+guesses)
	console.log("-----------");
	console.log("Guesses so far: "+ yourGuess)
//show in html

	var html = "<p>Wins: " + wins + "</p>" + "<p>Losses: " + losses + "</p>" + "<p>Guesses Left: " + guesses + "</p>" + "<p> Your Guesses: " + yourGuess + "</p>";

//show html

	document.querySelector("#game").innerHTML = html;


	function resetGame(){
		console.log("reseting game")
		wins = 0;
		losses = 0;
		guesses = 5;
		yourGuess = [];
		computerguess = options[Math.floor(Math.random()*options.length)];
	}

};





