'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = fisherYatesShuffleDeck;
function fisherYatesShuffleDeck(props) {
  if (!props || !props.deck) {
    throw new Error('shuffle requires a deck');
  }

  var deck = props.deck;

  var m = deck.length,
      t = void 0,
      i = void 0;
  while (m) {
    i = Math.floor(Math.random() * m--);
    t = deck[m];
    deck[m] = deck[i];
    deck[i] = t;
  }
  return deck;
}