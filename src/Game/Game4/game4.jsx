import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import pig from '../../img/FIN_picture/position/fin_krajina/pig.svg';
import './game4.css';

const Game4 = () => {
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
    <div id="game4" className="game4">
      <h2 className="game__quest3">
        {!flex ? (
          'Úkol 4: Pomocí vlastnosti align-items dej prasátko na obrázek úplně dolů (přetáhni obdélník se správným kódem na obrázek prasátka).'
        ) : flex === 'end' ? (
          <Link className="game__next" to="/vyzkousej-to/5">
            Hurá! Povedlo se ti to 😊 Klikni a získáš DIPLOM!
          </Link>
        ) : (
          <a className="reload" href="#" onClick={reload}>
            Prasátko není na kopci! Klikni TADY pro další pokus!
          </a>
        )}
      </h2>
      <div className="game4__container">
        {!usedFlex?.center && (
          <div className="drag__game4 center" draggable onDragStart={drag}>
            {'{ align-items: center }'}
          </div>
        )}
        {!usedFlex?.start && (
          <div className="drag__game4 start" draggable onDragStart={drag}>
            {'{ align-items: flex-start }'}
          </div>
        )}
        {!usedFlex?.end && (
          <div className="drag__game4 end" draggable onDragStart={drag}>
            {'{ align-items: flex-end }'}
          </div>
        )}
      </div>
      <div
        className={`game4__background ${!!flex ? flex : ''}`}
        onDrop={drop}
        onDragOver={allowDrop}
      >
        <img src={pig} alt="prasátko" className="pig" />
      </div>
    </div>
  );
};

export default Game4;
