export default function fisherYatesShuffleDeck(props) {
  if (!props || !props.deck) {
    throw new Error('shuffle requires a deck');
  }

  const { deck } = props;
  let m = deck.length, t, i;
  while (m) {
    i = Math.floor(Math.random() * m--);
    t = deck[m];
    deck[m] = deck[i];
    deck[i] = t;
  }
  return deck;
}
