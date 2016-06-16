
 var cards = ['queen', 'queen', 'king', 'king'];
 var cardsInPlay = [];


var gameBoard = document.getElementById('game-board');

/*for (i=1;i<=4; ++i) {
	var newCard = document.createElement('div');
	newCard.className = 'card';
	document.getElementById('card')[i].appendChild('board');
};*/

var createBoard = function() {

	var newCard = document.createElement('div');
	
		newCard.className = 'card';
	
		document.getElementByClassName('card').appendChild('board');

	for (i=0; i<cards; i += 1) {

		cardElement.setAttribute('data-card', cards[i]);

		cardElement.addEventListener('click', isTwoCards);

		if (cardElement.getAttribute('data-card') === 'queen') {
			cardElement.innerHTML = '<img src="queen.png" alt="Queen of Clubs" />';
		} else if (cardElement.getAttribute('data-card') === 'king') {
			cardElement.innerHTML = '<img src="king.png" alt="King of Clubs" />';
		};

	};
};

var isMatch = function() {
	function isTwoCards() {
	cardsInPlay.push(this.getAttribute('data-card'));
	if (cardsInPlay.length === 2) {
		isMatch(cardsInPlay);
		cardsInPlay = [];
		}
	}

};


createBoard();




/*if (cardOne === cardTwo) {
	alert('You found a match!');
}*/