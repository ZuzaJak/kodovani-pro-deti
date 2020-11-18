import React from 'react';
import './style.css';

const Nav = () => {
  return (
    <div className="navbar">
      <div className="navbar__left">{'<kódování pro děti/>'}</div>
      <div className="navbar__right">
        <button className="navbar__right-btn"></button>
        <a className="navbar__right-item" href="#">
          o projektu
        </a>
        <a className="navbar__right-item" href="#">
          kódovací wikipedie
        </a>
        <a className="navbar__right-item" href="#">
          vyzkoušej to
        </a>
        <a className="navbar__right-item" href="#">
          kam dál
        </a>
      </div>
    </div>
  );
};
export default Nav;
