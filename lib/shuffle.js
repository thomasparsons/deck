export default function fisherYatesShuffleDeck(props = {}) {
  const { deck } = props;
  if (!deck) {
    throw new Error('shuffle requires a deck');
  }

  let m = deck.length, t, i;
  while (m) {
    i = Math.floor(Math.random() * m--);
    t = deck[m];
    deck[m] = deck[i];
    deck[i] = t;
  }
  return deck;
}
