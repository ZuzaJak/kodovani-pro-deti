import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
      <h2
        className="game__quest2"
        style={{ height: 100, backgroundColor: '#f2f2f2', color: '#0d0638' }}
      >
        {!border ? (
          <div className="game__quest2-text">
            <span className="quest-nr"> Úkol 2</span>{' '}
            <span>Přidej obrázkům tečkovaný rámeček</span>
            <span> (přetáhni obdélník se správným kódem na obrázky)</span>
          </div>
        ) : border === 'dotted' ? (
          <Link
            className="game__next"
            to="/vyzkousej-to/3"
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
            Tečkovaný rámeček jsi netrefil/a, klikni sem pro další pokus!
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
      <div className="game2__background">
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
