import React from 'react';
import Deck from './Deck';

const Controls = ({
  goFishIsDone,
  toggleUsersTurn,
  isUsersTurn,
  message,
  pullFromDeck,
  NPCIsAsking,
  askForCard,
  askedCard,
}) => {
  return (
    <>
      <div className="middle">
        <button
          style={{ visibility: `${goFishIsDone ? 'visible' : 'hidden'}` }}
          onClick={toggleUsersTurn}
        >{`Switch to ${!isUsersTurn ? 'User' : 'NPC'}'s turn`}</button>
        <div id="dialogue">
          <p>
            it's <i>{isUsersTurn ? 'User' : 'NPC'}'s</i> turn
          </p>
          <h3>{message}</h3>
        </div>
        <Deck pullFromDeck={pullFromDeck} />
      </div>
      <div className='response-buttons'
        style={{
          visibility: `${NPCIsAsking ? 'visible' : 'hidden'}`,
        }}
      >
        <button onClick={() => askForCard('NPC', 'User', askedCard.current)}>
          Fine..
        </button>
        <button onClick={() => pullFromDeck('NPC')}>Go Fish</button>
      </div>
    </>
  );
};

export default Controls;
