import React from 'react';
import Hand from './Hand';

const Player = ({ role, hand }) => {
  return (
    <div>
      <h3>My role is: {role}</h3>
      <Hand hand={hand} />
    </div>
  );
};

export default Player;
