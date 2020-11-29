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
    context.fillText('Text', canvas.width / 2, canvas.height / 2);
    context.drawImage(image, 0, 0, 600, 600);
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
      <canvas
        className="cert__canvas"
        ref={canvasRef}
        style={{ flex: '1' }}
      ></canvas>
      <label className="cert__label" htmlFor="name">
        Napiš své jméno a příjmení:
      </label>
      <input className="cert__input" type="text" />
      <button className="cert__btn" onClick={render}>
        Odešli do diplomu
      </button>
    </div>
  );
};

export default Certificate;
