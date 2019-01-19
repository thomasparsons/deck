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

// packs

test('word provided as packs throws error', () => {
  function packs() {
    Deck({ packs: 'one' });
  }
  expect(packs).toThrowError('packs must be an integer');
});

test('1 pack of cards is 52 cards', () => {
  const deck = Deck({ packs: 1 });
  expect(deck.length).toBe(52);
});

test('2 packs of cards is 104 cards', () => {
  const deck = Deck({ packs: 2 });
  expect(deck.length).toBe(104);
});

test('3 packs of cards is 156 cards', () => {
  const deck = Deck({ packs: 3 });
  expect(deck.length).toBe(156);
});

test('4 packs of cards is 208 cards', () => {
  const deck = Deck({ packs: 4 });
  expect(deck.length).toBe(208);
});

// joker

test('Create deck, add joker, returns back 54 cards', () => {
  const deck = Deck({ jokers: true });
  expect(deck.length).toBe(54);
});

// shuffled

test('Shuffled', () => {
  const deck = Deck({ shuffled: true });
  expect(deck.length).toBe(52);
});
