import React, { useState } from 'react';
import './nav.css';

const HamMenu = ({ href, onSelect, text }) => {
  return (
    <a href={href} className="menu-item" onClick={onSelect}>
      {text}
    </a>
  );
};

const Nav = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  const handleHamMenu = () => {
    setMenuOpened(false);
  };
  return (
    <div className="navbar">
      <div className="navbar__left">{'<kódování pro děti/>'}</div>
      <div className="navbar__right">
        <div className={menuOpened ? 'menu' : 'menu--closed'}>
          <button
            className="menu__btn"
            onClick={() => setMenuOpened(true)}
          ></button>
          <div className="menu__items" onMouseLeave={handleHamMenu}>
            <HamMenu href="#about" text="o projektu" onSelect={handleHamMenu} />
            <HamMenu
              href="#wiki"
              text="kódovací wikipedie"
              onSelect={handleHamMenu}
            />
            <HamMenu href="#" text="vyzkoušej to" onSelect={handleHamMenu} />
            <HamMenu href="#links" text="kam dál" onSelect={handleHamMenu} />
          </div>
          <a className="navbar__right-item" href="#about">
            o projektu
          </a>
          <a className="navbar__right-item" href="#wiki">
            kódovací wikipedie
          </a>
          <a className="navbar__right-item" href="#">
            vyzkoušej to
          </a>
          <a className="navbar__right-item" href="#links">
            kam dál
          </a>
        </div>
      </div>
    </div>
  );
};
export default Nav;
