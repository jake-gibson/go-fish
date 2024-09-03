const gameController = {
  dealCards: (deck) => {
    const hand1 = [];
    const hand2 = [];

    //switch off dealing 7 cards to each player
    for (let i = 0; i < 7; i++) {
      hand1.push(deck.pop());
      hand2.push(deck.pop());
    }

    return { hand1, hand2 };
  },
  parseHand: (hand, desiredValue) => {
    const removedCards = [];
    const newHand = [];

    for (let card of hand) {
      card.value === desiredValue
        ? removedCards.push(card)
        : newHand.push(card);
    }

    return { removedCards, newHand };
  },
  sortHand: (hand) => {
    const valueOrder = [
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
      'J',
      'Q',
      'K',
      'A',
    ];

    return hand.sort((a, b) => {
      return valueOrder.indexOf(a.value) - valueOrder.indexOf(b.value);
    });
  },
};

export default gameController;
