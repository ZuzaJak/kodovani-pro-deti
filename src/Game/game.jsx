import React from 'react';
import Game1 from './Game1/game1.jsx';
import Game2 from './Game2/game2.jsx';
import './game.css';

const Game = () => {
  return (
    <div id="game" className="game">
      <div className="game__title-flex">
        <span className="bracket"> {'{'}</span>{' '}
        <div className="game__title-bracket-flex">
          <h1 className="game__title">Hra</h1>
          <p className="game__text">Vyzkoušej si naši hru!</p>
        </div>
      </div>
      <Game1 />
      <Game2 />
    </div>
  );
};
export default Game;
