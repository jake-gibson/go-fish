import React from 'react';

const Card = ({ data }) => {
  return (
    <div className="card">
      <h5>{data.value}</h5>
      <p>{data.suit}</p>
      <h5>{data.value}</h5>
    </div>
  );
};

export default Card;
