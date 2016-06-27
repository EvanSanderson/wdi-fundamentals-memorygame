
 var cards = ['queen', 'queen', 'king', 'king'];
 var cardsInPlay = [];


var board = document.getElementById('game-board');

var createBoard = function() {
  for (i=1;i<=cards.length; ++i) {
  	var newCard = document.createElement('div');
    newCard.className = 'card';
  	newCard.setAttribute('data-card', cards[i]);
    newCard.addEventListener("click", isTwoCards);
  	board.appendChild(newCard);
  }

};

function isTwoCards() {
  cardsInPlay.push(this.getAttribute('data-card'));

		if (this.getAttribute('data-card') === 'queen') {

			this.innerHTML = '<img src="queen.png" alt="Queen of Clubs" />';

		} else if (this.getAttribute('data-card') === 'king') {

			this.innerHTML = '<img src="king.png" alt="King of Clubs" />';
		};

if (cardsInPlay.length ===2) {
  isMatch(cardsInPlay);
  cardsInPlay =[];
  };
};


var isMatch = function() {
  if (cards[0] === cards[1]) {
  	alert('You found a match!');
} else {
  alert('Try again!')
}
};

createBoard();
