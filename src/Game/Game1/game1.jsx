import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './game1.css';
import space_image from '../../img/FIN_picture/background/fin/background.svg';

const Game1 = () => {
  const [color, setColor] = useState('');
  const [usedColors, setUsedColors] = useState({});

  const drag = (event) => {
    event.dataTransfer.setData('color', event.target.classList[1]);
  };

  const drop = (event) => {
    const newColor = event.dataTransfer.getData('color');
    setUsedColors({ ...usedColors, [newColor]: true });
    setColor(newColor);
  };

  const allowDrop = (event) => {
    event.preventDefault();
  };

  const reload = (event) => {
    event.preventDefault();
    location.reload();
  };

  return (
    <div id="game1" className="game1">
      <h2
        className="game__quest1"
        style={{ height: 100, backgroundColor: '#f2f2f2', color: '#0d0638' }}
      >
        {!color ? (
          <div className="game__quest1-text">
            <span className="quest-nr"> Úkol 1</span>{' '}
            <span> Obarvi pozadí vesmíru tmavě modrou barvou</span>
            <span> (přetáhni obdélník se správným kódem na obrázek).</span>
          </div>
        ) : color === 'blue' ? (
          <Link
            className="game__next"
            to="/vyzkousej-to/2"
            style={{ textDecoration: 'none' }}
          >
            Hurá! Povedlo se ti to 😊 Klikni sem pro další hru!
          </Link>
        ) : (
          <a
            className="reload"
            href="#"
            onClick={reload}
            style={{ textDecoration: 'none' }}
          >
            Modrou jsi netrefil/a, klikni 👉 sem pro další pokus!
          </a>
        )}
      </h2>
      <div className="game1__container">
        {!usedColors?.blue && (
          <div className="drag__game1 blue" draggable onDragStart={drag}>
            {'{ background-color: blue }'}
          </div>
        )}
        {!usedColors?.pink && (
          <div className="drag__game1 pink" draggable onDragStart={drag}>
            {'{ background-color: pink }'}
          </div>
        )}
        {!usedColors?.yellow && (
          <div className="drag__game1 yellow" draggable onDragStart={drag}>
            {'{ background-color: yellow }'}
          </div>
        )}
      </div>

      <img
        src={space_image}
        alt="obrázek vesmíru"
        className={`image ${!!color ? color : ''}`}
        onDrop={drop}
        onDragOver={allowDrop}
      />
    </div>
  );
};

export default Game1;
