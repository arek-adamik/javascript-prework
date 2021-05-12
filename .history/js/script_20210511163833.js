
function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}
function getMoveName(argMoveId){
	if(argMoveId == 1){
		return 'kamień';
	}
	else if(argMoveId == 2){
		return 'papier';
	}
	else if(argMoveId == 3){
		return 'nożyce';
	}

	printMessage('Nie znam ruchu o id ' + argMoveId + '.');
	return 'nieznany ruch';
}
function displayResult(argComputerMove, argPlayerMove){
	printMessage('Zagrałem ' + argComputerMove(computerMove) + ', a Ty ' + argPlayerMove(playerMove));
	if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
		printMessage('Ty wygrywasz!');
	}
	else if( argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
		printMessage('Przegrywasz!');
	}
	else if( argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
		printMessage('Remis! Spróbuj ponownie!');
	}
	else if( argComputerMove == 'nożyce' && argPlayerMove == 'nożyce'){
		printMessage('Remis! Spróbuj ponownie!');
	}
	else if( argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
		printMessage('Przegrywasz!');
	}
	else if( argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
		printMessage('Ty wygrywasz!');
	}
	else if( argComputerMove == 'papier' && argPlayerMove == 'papier'){
		printMessage('Remis! Spróbuj ponownie!');
	}
	else if( argComputerMove == 'papier' && playerMove == 'kamień'){
		printMessage('Przegrywasz!');
	}
	else if( argComputerMove == 'papier' && playerMove == 'nożyce'){
		printMessage('Ty wygrywasz!');
	}
}
let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);



let computerMove = getMoveName(randomNumber);
/*
if(randomNumber == 1){
	computerMove = 'kamień';
}
else if(randomNumber == 2){
	computerMove = 'papier';
}
else if(randomNumber == 3){
	computerMove = 'nożyce';
}
*/
printMessage('Mój ruch to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(playerInput);
/*
if(playerInput == '1'){
	playerMove = 'kamień';
}
else if(playerInput == '2'){
	playerMove = 'papier';
}
else if(playerInput == '3'){
	playerMove = 'nożyce';
}
*/
printMessage('Twój ruch to: ' + playerMove);
/*
if( computerMove == 'kamień' && playerMove == 'papier'){
	printMessage('Ty wygrywasz!');
}
else if( computerMove == 'kamień' && playerMove == 'nożyce'){
	printMessage('Przegrywasz!');
}
else if( computerMove == 'kamień' && playerMove == 'kamień'){
	printMessage('Remis! Spróbuj ponownie!');
}
else if( computerMove == 'nożyce' && playerMove == 'nożyce'){
	printMessage('Remis! Spróbuj ponownie!');
}
else if( computerMove == 'nożyce' && playerMove == 'papier'){
	printMessage('Przegrywasz!');
}
else if( computerMove == 'nożyce' && playerMove == 'kamień'){
	printMessage('Ty wygrywasz!');
}
else if( computerMove == 'papier' && playerMove == 'papier'){
	printMessage('Remis! Spróbuj ponownie!');
}
else if( computerMove == 'papier' && playerMove == 'kamień'){
	printMessage('Przegrywasz!');
}
else if( computerMove == 'papier' && playerMove == 'nożyce'){
	printMessage('Ty wygrywasz!');
}
 */
let displayResult