import { Shuffle } from './';

const suits = ['spades', 'hearts', 'clubs', 'diamonds'];
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

export default function createDeck(props) {
  const allCards = [];

  suits.map((suit) => {
    cards.map((card) =>
      allCards.push({
        card,
        suit,
      }),
    );
  });

  const packs = (props && props.packs) || 1;

  let deck = [];

  if (packs > 1) {
    for (let i = 0; i < packs; i += 1) {
      allCards.map(c => deck.push(c));
    }
  } else {
    deck = allCards;
  }

  if (props && props.shuffle) {
    return Shuffle({ deck });
  }

  return deck;
}
