import React, { useState } from 'react';
import './style.css';

const MenuItem = (props) => {
  return (
    <a href={props.href} className="menu-item" onClick={props.onSelect}>
      {props.text}
    </a>
  );
};

const Nav = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  const handleSelectItem = () => {
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
          <div className="menu__items">
            <MenuItem href="#" text="o projektu" onSelect={handleSelectItem} />
            <MenuItem
              href="#wiki"
              text="kódovací wikipedie"
              onSelect={handleSelectItem}
            />
            <MenuItem
              href="#"
              text="vyzkoušej to"
              onSelect={handleSelectItem}
            />
            <MenuItem href="#" text="kam dál" onSelect={handleSelectItem} />
          </div>
          <a className="navbar__right-item" href="#">
            o projektu
          </a>
          <a className="navbar__right-item" href="#wiki">
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
