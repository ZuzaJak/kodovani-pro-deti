import React, { useState } from 'react';
import './nav.css';
import { Link, NavLink } from 'react-router-dom';

const HamMenu = ({ href, onSelect, text }) => {
  return (
    <Link to={href} className="menu-item" onClick={onSelect}>
      {text}
    </Link>
  );
};

const Nav = (props) => {
  const [menuOpened, setMenuOpened] = useState(false);

  const handleHamMenu = () => {
    setMenuOpened(false);
  };

  return (
    <div className="navbar">
      <div className="navbar__left">
        {props.children}
        <Link className="navbar__left" to="/index">
          {'<kódování pro děti />'}
        </Link>
      </div>
      <div className="navbar__right">
        <div className={menuOpened ? 'menu' : 'menu--closed'}>
          <button
            className="menu__btn"
            onClick={() => setMenuOpened(true)}
          ></button>
          <div className="menu__items" onMouseLeave={handleHamMenu}>
            <HamMenu href="/index" text="o projektu" onSelect={handleHamMenu} />
            <HamMenu
              href="/kodovaci-wikipedie"
              text="kódovací wikipedie"
              onSelect={handleHamMenu}
            />
            <HamMenu
              href="/vyzkousej-to/1"
              text="pojď si zahrát"
              onSelect={handleHamMenu}
            />
            <HamMenu href="/kam-dal" text="kam dál" onSelect={handleHamMenu} />
          </div>
          <NavLink
            className="navbar__right-item"
            activeClassName="is-active"
            to="/index"
          >
            o projektu
          </NavLink>
          <NavLink
            className="navbar__right-item"
            activeClassName="is-active"
            to="/kodovaci-wikipedie"
          >
            kódovací wikipedie
          </NavLink>
          <NavLink
            className="navbar__right-item"
            activeClassName="is-active"
            to="/vyzkousej-to/1"
          >
            pojď si zahrát
          </NavLink>
          <NavLink
            className="navbar__right-item"
            activeClassName="is-active"
            to="/kam-dal"
          >
            kam dál
          </NavLink>
        </div>
      </div>
    </div>
  );
};
export default Nav;
