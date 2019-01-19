import { Shuffle } from '.';

const suits = ['spades', 'hearts', 'clubs', 'diamonds'];
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

export default function createDeck(props = {}) {
  const {jokers, packs, shuffle} = props
  const allCards = [];

  suits.map((suit) => {
    cards.map((card) =>
      allCards.push({
        card,
        suit
      }),
    );
  });

  if (jokers) {
    allCards.push({ card: "joker", suit: null })
    allCards.push({ card: "joker", suit: null })
  }

  let numberOfPacks = packs || 1;
  if (isNaN(numberOfPacks)) { throw new Error('packs must be an integer'); }

  let deck = [];

  if (numberOfPacks > 1) {
    for (let i = 0; i < numberOfPacks; i += 1) {
      allCards.map(c => deck.push(c));
    }
  } else {
    deck = allCards;
  }

  if (shuffle) {
    return Shuffle({ deck });
  }

  return deck;
}
