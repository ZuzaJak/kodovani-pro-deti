import React from 'react';
import './style.css';

const Nav = () => {
  return (
    <div className="navbar__container">
      <div className="navbar">
        <div className="navbar__left">{'<kódování pro děti/>'}</div>
        <div className="navbar__right">
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
    </div>
  );
};
export default Nav;
