import React, { useState } from 'react';
import Hand from '../Hand';

const NPC = ({ role, hand, askForCard, isUsersTurn, toggleUsersTurn }) => {
  if (!isUsersTurn) {
    const randomIndex = Math.floor(Math.random() * hand.length);
    const randomCard = hand[randomIndex];

    // toggleUsersTurn();
    setTimeout(() => askForCard('NPC', 'User', randomCard.value), 1000);
  }

  const selectCard = (value) => {
    console.log('Not your card!');
  };

  return (
    <div>
      <h3>My role is: {role}</h3>
      <Hand hand={hand} selectCard={selectCard} />
    </div>
  );
};

export default NPC;
