import { brandNewDeck } from './brandNewDeck';

const deckController = {
  newDeck: () => {
    return [...brandNewDeck];
  },

  shuffle: (deck) => {
    const shuffled = [...deck];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));

      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  },
};

//Helper Functions
// const randomSplit = (deck) => {
//   //Find a split point around the middle of the deck
//   const splitPoint = 21 + Math.floor(Math.random() * 10);

// };
// const classicShuffle = () => {};

export default deckController;
