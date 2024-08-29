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
  checkWin: () => {},
};

export default gameController;
