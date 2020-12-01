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

/* const [text, setText] = useState(''); */

function draw(context, canvas) {
  const image = new Image();
  image.src = diplom;
  image.onload = () => {
    resizeCanvas(canvas);
    context.beginPath();
    context.drawImage(
      image,
      canvas.width / 4,
      canvas.height / 8,
      1280 / 2,
      720 / 2,
    );
    context.textAlign = 'center';
    context.font = '30px Roboto';
    context.fillStyle = '#aa236d';
    context.textAlign = 'center';
    context.fillText('jméno příjmení', canvas.width / 2.1, canvas.height / 2.1);
    context.save();
  };
}

const Certificate = () => {
  const canvasRef = useRef();
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
          Odešli a přiletí ti diplom!
        </button>
      </div>
      <canvas
        className="cert__canvas"
        ref={canvasRef}
        style={{
          width: 1280,
          height: 300,
          flex: 1,
        }}
      ></canvas>
    </div>
  );
};

export default Certificate;
