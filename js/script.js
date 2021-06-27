{
function playGame(playerInput){

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
		console.log('moves:', argComputerMove, argPlayerMove);
		printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
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
	const randomNumber = Math.floor(Math.random() * 3 + 1);

	console.log('Wylosowana liczba to: ' + randomNumber);



	const computerMove = getMoveName(randomNumber);

	printMessage('Mój ruch to: ' + computerMove);

	console.log('Gracz wpisał: ' + playerInput);

	const playerMove = getMoveName(playerInput);

	printMessage('Twój ruch to: ' + playerMove);

	displayResult(computerMove, playerMove)
}
clearMessages();

document.getElementById('play-rock').addEventListener('click', function(){
	playGame(1);
  });
document.getElementById('play-paper').addEventListener('click', function(){
	playGame(2);
  });
document.getElementById('play-scissors').addEventListener('click', function(){
	playGame(3);
  });
}
