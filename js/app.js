// declaring variables
var userGuesses = [];
var count = 0;
var secretNumber;
var userGuess;

$(document).ready(function(){
	// calls secret number
	generateNumber();
	console.log(secretNumber);

	/*--- Display information modal box ---*/
	$(".what").click(function(){
		$(".overlay").fadeIn(1000);

	});

	/*--- Hide information modal box ---*/
	$("a.close").click(function(){
		$(".overlay").fadeOut(1000);
	});
});


// event handlers
$(".new").on("click", function(){
	newGame();
});
$("#guessButton").on("click", function(){
	getUserGuess($("#userGuess").val());
	// ******not working********
	// allows user to press enter to submit guess
	// $("#userGuess").keyup(function(event){
	// 	if(event.keyCode == 13) {
	// 		$("#guessButton").click();
	// 	}
	// });
});

// new game function
// ********not working*********
// function newGame(){
// 	generateNumber();
// 	console.log(secretNumber);
// 	count = 0;
// 	userGuesses = [];
// 	userGuess = "";

// }

//generate secret number
function generateNumber(){
	secretNumber = Math.floor(Math.random()*100)+1;
}

// counts user guesses
function guessCounter(){
	count++; 
	$("#count").text(count);
};

// get user guess function
function getUserGuess(userGuess){
	userGuesses.push(userGuess);
	if($("#userGuess").val() == 0){
		alert("Please enter a number between 1 and 100");
	}
	else{
		$("#guessList").append("<li>" + userGuess + "</li>");
		$("#userGuess").val("");
		guessCounter();
		hint(userGuess);
		checkUserGuess(userGuess);
	}
}

// check user guess for validity function
function checkUserGuess(userGuess){
	if(userGuess <= 0 || userGuess > 100){
		$("#guessList li").last().remove();
		count--;
		$("#count").text(count);
		alert("Please enter a number between 1 and 100");
	}
}

// give user hint function
function hint(guess){
	var numberDifference;
	var userGuessInt = parseInt(guess);
	
	// applies value to variables to check give hints later
	if (userGuessInt > secretNumber) {
		numberDifference = userGuessInt - secretNumber;
	} 
	else if (userGuessInt < secretNumber) {
		numberDifference = secretNumber - userGuessInt;
	}

	// gives hints based on guess
	if(userGuessInt == secretNumber){
		$("#feedback").text("You win!");
	}
	else if (numberDifference >= 1 && numberDifference <= 10) {
		$("#feedback").text("Very Hot");
	} 
	else if (numberDifference > 10 && numberDifference <= 20){
		$("#feedback").text("Hot");
	} 
	else if (numberDifference > 20 && numberDifference <= 30){
		$("#feedback").text("Warm");
	} 
	else if (numberDifference > 30 && numberDifference <= 50){
		$("#feedback").text("Cold");
	} 
	else if (numberDifference > 50){
		$("#feedback").text("Ice Cold");
	}
	else{
		$("#guessList li").last().remove();
		count--;
		$("#count").text(count);
		alert("Please enter a number between 1 and 100");
	}
}

// track user past guesses function
function trackGuess(){
	// not sure what to do here
}