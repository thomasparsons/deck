import { Deck } from '../';

test('Create deck, returns back 52 cards', () => {
  const deck = Deck();
  expect(deck.length).toBe(52);
});

test('Not Shuffled, first card is ace of spades', () => {
  const deck = Deck();
  expect(deck[0].card).toBe(1);
  expect(deck[0].suit).toBe('spades');
});

test('Not Shuffled, thirteenth and fourteenth cards are; king of spades, and ace of hearts', () => {
  const deck = Deck();
  expect(deck[12].card).toBe(13);
  expect(deck[12].suit).toBe('spades');

  expect(deck[13].card).toBe(1);
  expect(deck[13].suit).toBe('hearts');
});

test('Not Shuffled, last card is the king of diamonds', () => {
  const deck = Deck();
  expect(deck[51].card).toBe(13);
  expect(deck[51].suit).toBe('diamonds');
});

test('Shuffled', () => {
  const deck = Deck({ shuffled: true });
  expect(deck.length).toBe(52);
});
