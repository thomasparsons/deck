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

  var packs = props && props.packs || 1;

  var deck = [];

  if (packs > 1) {
    for (var i = 0; i < packs; i += 1) {
      allCards.map(function (c) {
        return deck.push(c);
      });
    }
  } else {
    deck = allCards;
  }

  if (props && props.shuffle) {
    return (0, _.Shuffle)({ deck: deck });
  }

  return deck;
}