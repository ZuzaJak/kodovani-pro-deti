import React from 'react';
import Game1 from './Game1/game1.jsx';
import Game2 from './Game2/game2.jsx';
import Game3 from './Game3/game3.jsx';
import Game4 from './Game4/game4.jsx';
import game_img from "../img/FIN_picture/media_query/responsive_768px_game.svg"
import Certificate from "./Certificate/certificate.jsx"
import './game.css';

const Game = (props) => {
  let Game = <Game1 />;
  if (props.step === 2) Game = <Game2 />;
  if (props.step === 3) Game = <Game3 />;
  if (props.step === 4) Game = <Game4 />;
  if (props.step === 5) Game = <Certificate />;

  return (
    
    <div id="game" className="game">
      <div className="game__title-flex">
        <img className="game_img" src={game_img} alt="obrazek hry" />
          <span className="bracket"> {'{'}</span>{' '}
            <div className="game__title-bracket-flex">
              <h1 className="game__title">Hra</h1>
            <p className="game__text">Vyzkoušej si naši hru!</p>
           </div>
         {Game}
      </div> 
    </div>
  
  );
};
export default Game;
