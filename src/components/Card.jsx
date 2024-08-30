import React from 'react';

const Card = ({ data, selectCard }) => {
  return (
    <div className="card" onClick={() => selectCard(data.value)}>
      <h5>{data.value}</h5>
      <p>{data.suit}</p>
      <h5>{data.value}</h5>
    </div>
  );
};

export default Card;
