

$( document ).ready(function() {
	console.log ("Ready!");

//global variables
var alphabet = ["A", "B","C","D","E","F","G","H","I","J","K",
	"L","M","N","O","P","Q","R","S","T","U","V","X","Y","Z","_"];

	
	var targetWord; 	//random word selected
	var guess;			//User's guess
	var guesses = [];	//Stored guesses
	var emptyLetters = []; //starting dashes to be filled
	var emptyLettersStr= "";	//print the dashes and correct guesses
	var lives;			//Lives
	var correct;		//Count orrect guesses
	var space;			//Number of spaces in targetWord


//We pick a random word for player to guess.  
	var wordArray = ["cat","dog","pig","duck"];
	

	targetWord = wordArray[Math.floor(Math.random()*wordArray.length)];
	console.log(targetWord);



//Parse targetWord's letters into targetWordArray

	var targetWordArray = targetWord.split("");
	console.log(targetWordArray);

// Display word to be guessed as dashes.  Use emptyLetters array to print dashes
	
		for (var i = 0; i< targetWordArray.length; i++) {
			emptyLetters.push("_ ");
		}
		console.log("emptyLetters", emptyLetters);

		emptyLettersStr = "";

		for (var i = 0; i< emptyLetters.length; i++) {
			emptyLettersStr = emptyLettersStr + emptyLetters[i];
		}

		$('#hold').append(emptyLettersStr);


//Collect input from user to guess a letter and convert to lowercase
	
	document.onkeyup = function(event) {
		var guess = String.fromCharCode(event.keyCode).toLowerCase();

// Check if guess has been selected before -->not done

		guesses.push(guess);
		console.log(guess);


//Check targetWordArray to see if letter matches
//If it's not in the array,

		if (targetWordArray.indexOf(guess) == -1) {
			// document.querySelector('#picked').innerHTML = 'You chose ' + guess + " This is not a correct guess";
			
			$('#picked').append(guess + ", ");
		}

		else {
			document.querySelector('#picked').innerHTML = "YAY, correct";
		}
	}


		
/*	

Make it an array and then replace dashes with correct guesses

Create number of guesses available
Create counter of guesses
If incorrect guess, deduct counter

If counter at 0, end game

If correct guess, put letter on screen in correct postion

If all letters guessed, Win the game

Reset function to play again
*/



});


