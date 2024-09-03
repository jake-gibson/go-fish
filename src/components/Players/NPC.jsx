import React from 'react';
import Hand from '../Hand';

const NPC = ({ role, hand, isUsersTurn }) => {
  const selectCard = (value) => {
    console.log('Not your card!');
  };

  return (
    <div
      className="player"
      style={{
        border: `3px solid ${isUsersTurn ? 'transparent' : '#B21807'}`,
        boxShadow: `${
          !isUsersTurn ? '0 0 5px .5px #B21807' : '0 0 10px 5px transparent'
        }`,
      }}
    >
      <h3>{role}</h3>
      <p>Card count: {hand.length}</p>
      <Hand role={role} hand={hand} selectCard={selectCard} />
    </div>
  );
};

export default NPC;
