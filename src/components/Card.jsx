import React from 'react';

const Card = ({ data, selectCard, role }) => {
  const suitToSymbol = {
    club: '♣',
    diamond: '♦',
    heart: '♥',
    spade: '♠',
  };

  const suitToColor = {
    club: 'black',
    diamond: 'red',
    heart: 'red',
    spade: 'black',
  };

  const mySymbol = suitToSymbol[data.suit];
  const myColor = suitToColor[data.suit];

  return (
    <div className="card" onClick={() => selectCard(data.value)}>
      {role !== 'NPC' ? (
        <>
          <p style={{ color: `${myColor}` }}>{mySymbol}</p>
          <h5 style={{ color: `${myColor}` }}>{data.value}</h5>
          <p style={{ color: `${myColor}` }}>{mySymbol}</p>
        </>
      ) : (
        <div className="back"></div>
      )}
    </div>
  );
};

export default Card;
