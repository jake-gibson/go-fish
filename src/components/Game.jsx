import React, { useEffect, useState } from 'react';

//React Components for UI
import Deck from './Deck';
import Player from './Player';

//Controller functions for game logic:
import deckController from '../utilities/deckController';
import gameController from '../utilities/gameController';

const Game = () => {
  //Card Locations:
  const [currentDeck, setCurrentDeck] = useState([]);
  const [playerHand, setPlayerHand] = useState([]);
  const [NPCHand, setNPCHand] = useState([]);

  //Rounds of the Game:
  const [isPlayersTurn, setIsPlayersTurn] = useState(true);

  useEffect(() => {
    const deck = deckController.newDeck();
    const shuffledDeck = deckController.shuffle(deck);

    // //Generate two hands of 7 cards by removing from the deck
    const { hand1, hand2 } = gameController.dealCards(shuffledDeck);

    setPlayerHand(hand1);
    setNPCHand(hand2);
    setCurrentDeck(shuffledDeck);
  }, []);

  // useEffect(() => {
  //  deckController.sortHand(); //make sure visually cards in order
  //   gameController.checkWin();
  // }, [playerHand, NPCHand]);

  return (
    <div>
      <h1>Game</h1>
      <Player role="NPC" hand={NPCHand} />
      <Deck currentDeck={currentDeck} />
      <Player role="User" hand={playerHand} />
    </div>
  );
};

export default Game;
