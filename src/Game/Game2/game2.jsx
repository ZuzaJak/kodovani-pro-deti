import React, { useState } from 'react';
import './game2.css';
import picture1 from '../../img/FIN_picture/frame/fin/frame_01.svg';
import picture2 from '../../img/FIN_picture/frame/fin/frame_02.svg';
import picture3 from '../../img/FIN_picture/frame/fin/frame_03.svg';

const Game2 = () => {
  const [border, setBorder] = useState('');
  const [usedBorders, setUsedBorders] = useState({});

  const drag = (event) => {
    event.dataTransfer.setData('border', event.target.classList[1]);
  };

  const drop = (event) => {
    const newBorder = event.dataTransfer.getData('border');
    setUsedBorders({ ...usedBorders, [newBorder]: true });
    setBorder(newBorder);
  };

  const allowDrop = (event) => {
    event.preventDefault();
  };

  const reload = (event) => {
    event.preventDefault();
    location.reload();
  };

  return (
    <div id="game2" className="game2">
      <h2 className="game__quest2">
        {!border ? (
          'Úkol 2: Přidej obrázkům tečkovaný rámeček (přetáhni obdélník se správným kódem na obrázky).'
        ) : border === 'dotted' ? (
          <a className="game__next" href="#game3">
            Hurá! Povedlo se ti to 😊 Klikni TADY pro další hru!
          </a>
        ) : (
          <a className="reload" href="#" onClick={reload}>
            Tečkovaný rámeček jsi netrefil/a, klikni tady pro další pokus!
          </a>
        )}
      </h2>
      <div className="game2__container">
        {!usedBorders?.dotted && (
          <div className="drag__game2 dotted" draggable onDragStart={drag}>
            {'{ border-style: dotted }'}
          </div>
        )}
        {!usedBorders?.solid && (
          <div className="drag__game2 solid" draggable onDragStart={drag}>
            {'{ border-style: solid }'}
          </div>
        )}
        {!usedBorders?.dashed && (
          <div className="drag__game2 dashed" draggable onDragStart={drag}>
            {'{ border-style: dashed }'}
          </div>
        )}
      </div>
      <div className="game2__pictures">
        <img
          src={picture1}
          alt="obrázek"
          className={`picture1 ${!!border ? border : ''}`}
          onDrop={drop}
          onDragOver={allowDrop}
        />
        <img
          src={picture2}
          alt="obrázek"
          className={`picture2 ${!!border ? border : ''}`}
          onDrop={drop}
          onDragOver={allowDrop}
        />
        <img
          src={picture3}
          alt="obrázek"
          className={`picture3 ${!!border ? border : ''}`}
          onDrop={drop}
          onDragOver={allowDrop}
        />
      </div>
    </div>
  );
};

export default Game2;
