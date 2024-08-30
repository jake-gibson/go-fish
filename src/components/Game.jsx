import React, { useEffect, useState } from 'react';

//React Components for UI
import Deck from './Deck';
import NPC from './Players/NPC';
import User from './Players/User';

//Controller functions for game logic:
import gameController from '../utilities/gameController';
import deckController from '../utilities/deckController';
const { dealCards } = gameController;
const { newDeck, shuffle } = deckController;

const Game = () => {
  //Card Locations:
  const [currentDeck, setCurrentDeck] = useState([]);
  const [userHand, setUserHand] = useState([]);
  const [NPCHand, setNPCHand] = useState([]);

  //Rounds of the Game:
  const [isUsersTurn, setIsUsersTurn] = useState(true);

  useEffect(() => {
    const deck = shuffle(newDeck());

    // //Generate two hands of 7 cards by removing from the deck
    const { hand1, hand2 } = dealCards(deck);

    setUserHand(hand1);
    setNPCHand(hand2);
    setCurrentDeck(deck);
  }, []);

  // useEffect(() => {
  //  deckController.sortHand(); //make sure visually cards in order
  //   gameController.checkWin();
  // }, [userHand, NPCHand]);

  const askForCard = (sourcePlayer, targetPlayer, desiredValue) => {
    //issue is the automated NPC is asking for two cards
    alert(`${sourcePlayer} asks for ${desiredValue}`);
    setIsUsersTurn(!isUsersTurn);

    const roleToPlayer = {
      User: [userHand, setUserHand],
      NPC: [NPCHand, setNPCHand],
    };

    const targetHand = roleToPlayer[targetPlayer][0];
    const sourceHand = roleToPlayer[sourcePlayer][0];
    const targetHandSetter = roleToPlayer[targetPlayer][1];
    const sourceHandSetter = roleToPlayer[sourcePlayer][1];

    const removedCards = [];
    const newHand = [];

    for (let card of targetHand) {
      card.value === desiredValue
        ? removedCards.push(card)
        : newHand.push(card);
    }

    sourceHand.push(...removedCards);
    sourceHandSetter(sourceHand);
    targetHandSetter(newHand);
  };

  const toggleUsersTurn = () => {
    setIsUsersTurn(!isUsersTurn);
  };

  return (
    <div className="game">
      {/* <h1>Game</h1> */}
      <NPC
        role="NPC"
        hand={NPCHand}
        askForCard={askForCard}
        isUsersTurn={isUsersTurn}
        toggleUsersTurn={toggleUsersTurn}
      />
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <p>It's {isUsersTurn ? 'User' : 'NPC'}'s turn</p>
        <Deck currentDeck={currentDeck} />
      </div>
      <User
        role="User"
        hand={userHand}
        askForCard={askForCard}
        isUsersTurn={isUsersTurn}
        toggleUsersTurn={toggleUsersTurn}
      />
    </div>
  );
};

export default Game;
