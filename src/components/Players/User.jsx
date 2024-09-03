import React, { useState } from 'react';
import Hand from '../Hand';

const User = ({ role, hand, askForCard, isUsersTurn }) => {
  const selectCard = (value) => {
    if (!isUsersTurn) {
      console.log('Not your turn');
      return;
    }
    console.log(value);
    const otherRole = role === 'User' ? 'NPC' : 'User';

    askForCard(role, otherRole, value);
  };

  return (
    <div
      className="player"
      style={{
        border: `3px solid ${isUsersTurn ? '#B21807' : 'transparent'}`,
        boxShadow: `${
          isUsersTurn ? '0 0 5px .5px #B21807' : '0 0 10px 5px transparent'
        }`,
      }}
    >
      <h3>{role}</h3>
      <p>Card count: {hand.length}</p>
      <Hand hand={hand} selectCard={selectCard} />
    </div>
  );
};

export default User;
