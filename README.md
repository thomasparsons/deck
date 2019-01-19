# Deck

Deck is a very simple, card deck creator, with optional shuffling.
The purpose of this code is to be used with an additional 'Dealer' package.

Deck returns an array of objects, with each card having a suit, and a card value, such as the ace of spades:

```
{
  card: 1,
  suit: 'spades',
}
```

## Examples

You can initalise the deck by itself, which will return you four suites of 13 cards - 1 through 13, and Shuffle it afterwards if you like.

```
import { Deck, Shuffle } from 'deck';

console.log(Deck());
console.log(Shuffle({ deck: Deck() }));
```

Alternatively, you can initalise the deck, already shuffled:

```
import { Deck } from 'deck';

console.log(Deck({ shuffled: true }));
```

Multiple packs can be requested with a `packs` integer, 2 packs = 104 cards etc.

```
import { Deck } from 'deck';

console.log(Deck({ packs: 2, shuffled: true }));
```

## Additional Params
Along with `packs` and `shuffled` you can also add Jokers to the pack, if you desire by running

```
import { Deck } from 'deck';

console.log(Deck({ jokers: true }))
```

## Decision Process

I've left the cards as integers, instead of `ace`, `2`, `3`, ... `jack`, `queen`, `king`, in order to make the maths and precision of card moving (i.e. in solitaire or poker), simpler.
