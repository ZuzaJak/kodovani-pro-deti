import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import unicorn from '../../img/FIN_picture/position/fin_unicorn/unicorn_ballon.svg';
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
      <h2 className="game__quest3"
      style={{height:70, backgroundColor: 'lightGrey', color: "#0d0638"}}>
        {!flex ? (
          'Úkol 3: Pomocí vlastnosti justify-content přiměj jednorožce, aby létal před duhou (přetáhni obdélník se správným kódem na obrázek).'
        ) : flex === 'center' ? (
          <Link className="game__next" to="/vyzkousej-to/4"
           style={{ textDecoration: 'none' }}>
            Hurá! Povedlo se ti to 😊 Klikni sem pro další úkol!
          </Link>
        ) : (
          <a className="reload" href="#" onClick={reload}
            style={{ textDecoration: 'none' }}>
            Jednorožec odletěl jinam! Klikni sem pro další pokus!
          </a>
        )}
      </h2>
      <div className="game3__container">
        {!usedFlex?.center && (
          <div className="drag__game3 center" draggable onDragStart={drag}>
            {'{ justify-content: center }'}
          </div>
        )}
        {!usedFlex?.left && (
          <div className="drag__game3 left" draggable onDragStart={drag}>
            {'{ justify-content: flex-start}'}
          </div>
        )}
        {!usedFlex?.right && (
          <div className="drag__game3 right" draggable onDragStart={drag}>
            {'{ justify-content: flex-end }'}
          </div>
        )}
      </div>
      <div
        className={`game3__background ${!!flex ? flex : ''}`}
        onDrop={drop}
        onDragOver={allowDrop}
      >
        <img src={unicorn} alt="jednorožec" className="unicorn" />
      </div>
    </div>
  );
};

export default Game3;
