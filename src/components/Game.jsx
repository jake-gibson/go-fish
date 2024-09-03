import React, { useEffect, useState, useRef } from 'react';

//React Components for UI
import NPC from './Players/NPC';
import User from './Players/User';
import Controls from './Controls';

//Controller functions for game logic:
import gameController from '../utilities/gameController';
import deckController from '../utilities/deckController';
const { dealCards, parseHand, sortHand } = gameController;
const { newDeck, shuffle } = deckController;

const Game = () => {
  //Card Locations:
  const [currentDeck, setCurrentDeck] = useState([]);
  const [userHand, setUserHand] = useState([]);
  const [NPCHand, setNPCHand] = useState([]);
  const askedCard = useRef(null);

  //Rounds of the Game:
  const [isUsersTurn, setIsUsersTurn] = useState(true);
  const [NPCIsAsking, setNPCIsAsking] = useState(false);
  const [goFishIsDone, setGoFishIsDone] = useState(false);

  //Game Message:
  const [message, setMessage] = useState('Click a card to get started');

  //New Game Begins:
  useEffect(() => {
    const deck = shuffle(newDeck());
    const { hand1, hand2 } = dealCards(deck);

    setUserHand(sortHand(hand1));
    setNPCHand(sortHand(hand2));
    setCurrentDeck(deck);
  }, []);

  //When turn changes, NPC asks for a card
  useEffect(() => {
    if (!isUsersTurn) {
      console.log('in NPC use effect');
      setMessage('NPC is thinking');
      setTimeout(() => NPCAsk(), 3000);
    }
  }, [isUsersTurn]);

  const NPCAsk = () => {
    const randomIndex = Math.floor(Math.random() * NPCHand.length);
    const randomCard = NPCHand[randomIndex];
    askedCard.current = randomCard.value;
    setMessage(`NPC is asking for ${randomCard.value}`);
    setNPCIsAsking(true);
  };

  const roleToPlayer = {
    User: [userHand, setUserHand],
    NPC: [NPCHand, setNPCHand],
  };

  const askForCard = (sourcePlayer, targetPlayer, desiredValue) => {
    const [targetHand, targetHandSetter] = roleToPlayer[targetPlayer];
    const [sourceHand, sourceHandSetter] = roleToPlayer[sourcePlayer];

    const { removedCards, newHand } = parseHand(targetHand, desiredValue);

    if (removedCards.length === 0) {
      setMessage(`${targetPlayer} has no ${desiredValue}s. Go Fish!`);
      return;
    }

    //Sets new hands
    sourceHand.push(...removedCards);
    sourceHandSetter(sortHand(sourceHand));
    targetHandSetter(sortHand(newHand));

    //Dynamic Dialogue
    setMessage(
      `${targetPlayer} gave up (${removedCards.length}) ${desiredValue}s. Ask for More!`
    );
    setNPCIsAsking(false);

    //NPC will ask again
    if (sourcePlayer === 'NPC') setTimeout(() => NPCAsk(), 2000);
  };

  const toggleUsersTurn = () => {
    setIsUsersTurn(!isUsersTurn);
    setGoFishIsDone(false);
  };

  const pullFromDeck = (sourcePlayer) => {
    const [sourceHand, sourceHandSetter] = roleToPlayer[sourcePlayer];
    const topCard = currentDeck.pop();
    sourceHand.push(topCard);

    sourceHandSetter(sortHand(sourceHand));
    setCurrentDeck(currentDeck);

    setMessage(`${sourcePlayer} went fishing...`);
    setNPCIsAsking(false);
    setGoFishIsDone(true);

    toggleUsersTurn();
  };

  return (
    <div className="game">
      <NPC role="NPC" hand={NPCHand} isUsersTurn={isUsersTurn} />
      <Controls
        goFishIsDone={goFishIsDone}
        toggleUsersTurn={toggleUsersTurn}
        isUsersTurn={isUsersTurn}
        message={message}
        pullFromDeck={pullFromDeck}
        NPCIsAsking={NPCIsAsking}
        askForCard={askForCard}
        askedCard={askedCard}
      />
      <User
        role="User"
        hand={userHand}
        askForCard={askForCard}
        isUsersTurn={isUsersTurn}
      />
    </div>
  );
};

export default Game;
