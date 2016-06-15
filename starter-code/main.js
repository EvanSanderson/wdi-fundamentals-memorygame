

var cardOne = 'queen';
var cardTwo = 'queen';
var cardThree = 'king';
var cardFour = 'king';

var gameBoard = document.getElementById('game-board');

/*for (i=1;i<=4; ++i) {
	var newCard = document.createElement('div');
	newCard.className = 'card';
	document.getElementById('card')[i].appendChild('board');
};*/

var createBoard = function() {
	for (i=0; i<=3; ++i) {
	var newCard = document.createElement('div');
	newCard.className = 'card';
	document.getElementByClassName('card').appendChild('board');
	/* above line could also read newCard.appendChild('board')*/
	};
};

createBoard();




/*if (cardOne === cardTwo) {
	alert('You found a match!');
}*/