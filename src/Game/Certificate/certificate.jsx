import React, { useRef } from 'react';
import './certificate.css';
import diplom from '../../img/diplom.svg';

function resizeCanvas(canvas) {
  const { width, height } = canvas.getBoundingClientRect();

  if (canvas.width !== width || canvas.height !== height) {
    const { devicePixelRatio: ratio = 1 } = window;
    const context = canvas.getContext('2d');
    canvas.width = width * ratio;
    canvas.height = height * ratio;
    context.scale(ratio, ratio);
    return true;
  }

  return false;
}

function draw(context, canvas) {
  const image = new Image();
  image.src = diplom;
  image.onload = () => {
    resizeCanvas(canvas);
    context.beginPath();
    context.textAlign = 'center';
    context.fillText('jméno a příjmení', canvas.width / 2, canvas.height / 2);
    context.drawImage(image, 0, 0, 1280 / 2, 720 / 2);
    context.save();
  };
}

const Certificate = () => {
  const canvasRef = useRef(null);

  const render = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    draw(context, canvas);
  };

  return (
    <div id="certificate" className="certificate__div">
      <div className="cert__input-box">
        <label className="cert__label" htmlFor="name">
          Napiš své jméno a příjmení:
        </label>
        <input className="cert__input" type="text" />
        <button className="cert__btn" onClick={render}>
          Odešli do diplomu
        </button>
      </div>
      <canvas
        className="cert__canvas"
        ref={canvasRef}
        style={{
          width: 1280,
          height: 720,
          flex: 1,
        }}
      ></canvas>
    </div>
  );
};

export default Certificate;
