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
      <h2
        className="game__quest3"
        style={{ height: 100, backgroundColor: '#f2f2f2', color: '#0d0638' }}
      >
        {!flex ? (
          <div className="game__quest4-text">
            <span className="quest-nr"> Úkol 4</span>
            <span>
              Pomocí vlastnosti align-items dej prasátko na obrázek úplně dolů
            </span>
            <span>
              (přetáhni obdélník se správným kódem na obrázek prasátka)
            </span>
          </div>
        ) : flex === 'end' ? (
          <Link
            className="game__next"
            to="/vyzkousej-to/5"
            style={{ textDecoration: 'none' }}
          >
            Hurá! Povedlo se ti to 😊 Klikni a získáš DIPLOM! 🎓
          </Link>
        ) : (
          <Link
            className="reload"
            to="/vyzkousej-to/4"
            onClick={reload}
            style={{ textDecoration: 'none' }}
          >
            Prasátko není úplně dole! Klikni sem pro další pokus!
          </Link>
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
