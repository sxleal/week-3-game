

$( document ).ready(function() {
	console.log ("Ready!");

//global variables
var alphabet = ["A", "B","C","D","E","F","G","H","I","J","K",
	"L","M","N","O","P","Q","R","S","T","U","V","X","Y","Z","_"];

	
	var targetWord; 	//random word selected
	var guess;			//User's guess
	var guesses = [];	//Stored guesses
	var lives;			//Lives
	var correct;		//Count orrect guesses
	var space;			//Number of spaces in targetWord



//We pick a random word for player to guess
	var wordArray = ["cat","dog","pig","duck"];
	

	targetWord = wordArray[Math.floor(Math.random()*wordArray.length)];
	console.log(targetWord)






//We store all the letters and underscore inside of an array called letters


	for (var i=0; i<alphabet.length; i++) {
		console.log(alphabet[i]);
		 var b = $('<button>').addClass("letter letter-button letter-button-color");
		 b.attr("data-let", alphabet[i]);
		 b.text(alphabet[i]);
		 $("#buttons").append(b);
	}

	$('.letter-button').on('click',function() {
		var Guess = $('<div>').text($(this).data('let'));
	    	$('#display').append(Guess);
	    	$('#display').append(Guess);
	})

//Inserts correct guess into dash display
	result = function () {
		wordHolder = document.getElementById('hold');
		correct = document.createElement('ul');

		for (var i=0; i<targetWord.length; i++) {
			correct.setAttribute('id','myWord')
		}
	}


});
