import { useState } from 'react';
import Game from './components/Game';
import './App.css';

const App = () => {
  const [gameInPlay, setGameInPlay] = useState(false);

  //When App loads, give player option to click 'New Game' which toggles state to game in play
  return (
    <div className="App">
      {gameInPlay ? (
        <Game />
      ) : (
        <button onClick={() => setGameInPlay(true)}>New Game</button>
      )}
    </div>
  );
};

export default App;
