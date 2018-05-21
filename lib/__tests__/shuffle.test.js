import { Deck, Shuffle } from '../';

test('Nothing provided to shuffle, throws error', () => {
  function shuffle() {
    Shuffle();
  }
  expect(shuffle).toThrowError('shuffle requires a deck');
});

test('No deck provided to shuffle, throws error', () => {
  function shuffle() {
    Shuffle({ });
  }
  expect(shuffle).toThrowError('shuffle requires a deck');
});

test('Shuffling the deck returns back a full deck of cards', () => {
  const deck = Deck();
  const shuffled = Shuffle({ deck });
  expect(shuffled.length).toBe(52);
});

test('A shuffled deck does not match the original deck - this could happen', () => {
  const deckToShuffle = Deck();
  const originalDeck = Deck();

  const shuffled = Shuffle({ deck: deckToShuffle });
  expect(shuffled).not.toEqual(originalDeck);
});
