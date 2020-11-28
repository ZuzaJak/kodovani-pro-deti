import React, { useState } from 'react';
import unicorn1 from '../../img/FIN_picture/position/fin_unicorn/unicorn_ballon.svg';
import './game3.css';

const Game3 = () => {
  const [flex, setFlex] = useState('');
  const [usedFlex, setUsedFlex] = useState({});

  const drag = (event) => {
    event.dataTransfer.setData('flex', event.target.classList[1]);
  };

  const drop = (event) => {
    const newFlex = event.dataTransfer.getData('flex');
    setUsedFlex({ ...usedFlex, [newFlex]: true });
    setFlex(newFlex);
  };

  const allowDrop = (event) => {
    event.preventDefault();
  };

  const reload = (event) => {
    event.preventDefault();
    location.reload();
  };

  return (
    <div id="game3" className="game3">
      <h2 className="game__quest3">
        {!flex ? (
          'Úkol 3: Pomocí vlastnosti justify-content přiměj jednorožce, aby létal před duhou (přetáhni obdélník se správným kódem na obrázek jednorožce).'
        ) : flex === 'center' ? (
          <a className="game__next" href="#">
            Hurá! Povedlo se ti to 😊 Splnil/a jsi všechny úkoly!
          </a>
        ) : (
          <a className="reload" href="#" onClick={reload}>
            Jednorožec odletěl jinam! Klikni TADY pro další pokus!
          </a>
        )}
      </h2>
      <div className="game3__container">
        <div className="game3__container-options">
          {!usedFlex?.center && (
            <div className="drag__game3 center" draggable onDragStart={drag}>
              {'{justify-content: center}'}
            </div>
          )}
          {!usedFlex?.start && (
            <div className="drag__game3 start" draggable onDragStart={drag}>
              {'{justify-content: flex-start}'}
            </div>
          )}
          {!usedFlex?.end && (
            <div className="drag__game3 end" draggable onDragStart={drag}>
              {'{justify-content: flex-end}'}
            </div>
          )}
        </div>
      </div>
      <div
        className={`game3__pictures ${!!flex ? flex : ''}`}
        onDrop={drop}
        onDragOver={allowDrop}
      >
        <img src={unicorn1} alt="jednorožec" className="unicorn" />
      </div>
    </div>
  );
};

export default Game3;
