import React from 'react';
import Card from './Card';

const Hand = ({ hand }) => {
  console.log(hand);
  const cards = [];

  for (let card of hand) {
    cards.push(<Card data={card} />);
  }
  return <div className="hand">{cards}</div>;
};

export default Hand;
