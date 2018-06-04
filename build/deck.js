'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createDeck;

var _ = require('./');

var suits = ['spades', 'hearts', 'clubs', 'diamonds'];
var cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function createDeck(props) {
  var allCards = [];

  suits.map(function (suit) {
    cards.map(function (card) {
      return allCards.push({
        card: card,
        suit: suit
      });
    });
  });

  if (props && props.shuffle) {
    return (0, _.Shuffle)({ deck: allCards });
  }

  return allCards;
}