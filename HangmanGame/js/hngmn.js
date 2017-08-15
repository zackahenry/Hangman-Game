//Var

var wordOptions = ["luke", "leia", "han", "lando", "vader", "yoda", "ben", "lightsaber"];
var selectWord = "";
var lettersInWord = [];
var numBlanks = 0;
var blanksAndSuccesses = [];
var wrongLetters = [];

var winCount = 0;
var lossCount = 0;
var guessesLeft = 9;



// funcs
function startGame () {
	selectWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
	lettersInWord = selectWord.split("");
	numBlanks = lettersInWord.length;

	guessesLeft = 9;
	wrongLetters = [];
	blanksAndSuccesses = [];

//makes blanks of each letter in word
	for (var i = 0; i < numBlanks; i++){
		blanksAndSuccesses.push("_");
	}


	document.getElementById('wordToGuess').innerHTML = blanksAndSuccesses.join(" ");
	document.getElementById('numGuesses').innerHTML = guessesLeft;
	document.getElementById('winCounter').innerHTML = winCount;
	document.getElementById('lossCounter').innerHTML = lossCount;

// con log


	console.log(selectWord);
	console.log(lettersInWord);
	console.log(numBlanks);
	console.log(blanksAndSuccesses);

}

//Check letters
function checkLetters(letter) {
	var isLetterInWord = false;

	for (var i = 0; i < numBlanks; i++) {
		if (selectWord[i] == letter) {
			isLetterInWord = true;
		}
	}

	if (isLetterInWord) {
		for (var i = 0; i < numBlanks; i++) {
			if (selectWord[i] == letter) {
				blanksAndSuccesses[i] = letter;
			}
		}
	}

	else {
		wrongLetters.push(letter);
		guessesLeft--
	}
}

function roundComplete(){
	console.log("Win Count: " + winCount + " | Loss Count: " + lossCount + " | Guesses Left: " + numGuesses);


	document.getElementById("numGuesses").innerHTML = guessesLeft;
	document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
	document.getElementById("wrongGuesses").innerHTML = wrongLetters.join(" ");

	if (lettersInWord.toString() == blanksAndSuccesses.toString()) {
		winCount++;

		document.getElementById("winCounter").innerHTML = winCount;

		startGame();
	} 

	else if (guessesLeft == 0) {
		lossCount++;
		document.getElementById("lossCounter").innerHTML = lossCount;
		startGame();
	}

}

startGame();


document.onkeyup = function (event) {
	var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
	checkLetters(letterGuessed);
	roundComplete();

	console.log(letterGuessed);
	}







