import React from 'react';
import './header.css';
import title_img from '../img/title.svg';
import Button from './components/Button.jsx';

const Header = () => {
  return (
    <div className="home">
      <img className="title__img" src={title_img} alt="titulní obrázek" />
      <div className="title">
        <h1 a href="/index" className="title__heading">
          KÓDOVÁNÍ PRO DĚTI
        </h1>
        <div className="header__btn-display">
          <Button />
        </div>
      </div>
    </div>
  );
};
export default Header;
