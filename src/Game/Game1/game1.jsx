import React, { useState } from 'react';
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
      <h2 className="game__quest1">
        {!color ? (
          'Úkol 1: Obarvi pozadí vesmíru tmavě modrou barvou (přetáhni obdélník se správným kódem na obrázek).'
        ) : color === 'blue' ? (
          <a className="game__next" href="#game2">
            Hurá! Povedlo se ti to 😊 Klikni TADY pro další hru!
          </a>
        ) : (
          <a className="reload" href="#" onClick={reload}>
            Modrou jsi netrefil/a, klikni tady pro další pokus!
          </a>
        )}
      </h2>
      <div className="game__container">
        <div className="game__container-options">
          {!usedColors?.blue && (
            <div className="drag__game1 blue" draggable onDragStart={drag}>
              {'{background-color: blue}'}
            </div>
          )}
          {!usedColors?.pink && (
            <div className="drag__game1 pink" draggable onDragStart={drag}>
              {'{background-color: pink}'}
            </div>
          )}
          {!usedColors?.yellow && (
            <div className="drag__game1 yellow" draggable onDragStart={drag}>
              {'{background-color: yellow}'}
            </div>
          )}
        </div>

        <img
          src={space_image}
          alt="space image"
          className={`image ${!!color ? color : ''}`}
          onDrop={drop}
          onDragOver={allowDrop}
        />
      </div>
    </div>
  );
};

export default Game1;
