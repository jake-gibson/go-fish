import React, { useState } from 'react';
import Hand from '../Hand';

const User = ({ role, hand, askForCard, isUsersTurn, toggleUsersTurn }) => {
  const selectCard = (value) => {
    if (!isUsersTurn) {
      console.log('Not your turn');
      return;
    }
    console.log(value);
    const otherRole = role === 'User' ? 'NPC' : 'User';

    // toggleUsersTurn();
    askForCard(role, otherRole, value);
  };

  return (
    <div>
      <h3>My role is: {role}</h3>
      <Hand hand={hand} selectCard={selectCard} />
    </div>
  );
};

export default User;
