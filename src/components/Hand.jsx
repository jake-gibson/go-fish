import React from 'react';
import Card from './Card';

const Hand = ({ hand, selectCard }) => {
  const cards = [];

  for (let card of hand) {
    cards.push(<Card data={card} selectCard={selectCard} />);
  }
  return <div className="hand">{cards}</div>;
};

export default Hand;
