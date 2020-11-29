import React, { useRef } from 'react';
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
  resizeCanvas(canvas);

  context.beginPath();
  context.fill();
  context.drawImage(diplom);
  context.fillText('Text', canvas.width / 2, canvas.height / 2);
  context.save();
}

const Certificate = (props) => {
  const canvasRef = useRef(null);

  const render = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    draw(context, canvas);
  };

  return (
    <div
      id="certificate"
      style={{ display: 'flex', flexDirection: 'column', minHeight: '50vh' }}
    >
      <canvas ref={canvasRef} style={{ flex: '1' }}></canvas>
      <button onClick={render}>Render</button>
    </div>
  );
};

export default Certificate;
