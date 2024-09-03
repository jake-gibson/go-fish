import React from 'react';
import Card from './Card';

const Hand = ({ role, hand, selectCard }) => {
  const cards = [];

  for (let card of hand) {
    cards.push(<Card data={card} selectCard={selectCard} role={role} />);
  }
  return <div className="hand">{cards}</div>;
};

export default Hand;
