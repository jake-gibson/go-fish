import React from 'react';

const Deck = ({ pullFromDeck }) => {
  return (
    <div className="back" onClick={() => pullFromDeck('User')}>
      Deck
    </div>
  );
};

export default Deck;
