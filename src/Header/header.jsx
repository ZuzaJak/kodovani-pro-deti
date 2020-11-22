import React from 'react';
import './header.css';
import title_img from '../img/title.png';

const Header = () => {
  return (
    <div className="home">
      <img className="title__img" src={title_img} alt="titulní obrázek" />
      <div className="title">
        <h1 className="title__heading">KÓDOVÁNÍ PRO DĚTI</h1>
        <button className="btn">pojď to zkusit ▶</button>
      </div>
    </div>
  );
};
export default Header;
