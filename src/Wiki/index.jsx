import React from 'react';
import './style.css';



const Wiki = () => {
  return (
    <>
    <div className="wiki">
      <div className="header_nav">

        <div className="wiki__content">
          <span class="bracket"> {'{'} </span>
          <div className="wiki__title-flex">
           <h1 className="wiki__title">LOREM IPSUM</h1>
           <p className="wiki__title-text">Lorem ipsum dolor sit amet, consectetur  adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
          </div>
        </div>

        {/* <div className="wiki__section">
          <h2 className="wiki__section"> header </h2>
            <p className="wiki__section-text">Lorem ipsum dolor sit amet, consectetur  adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        </div> */}
      </div>
    </div>
    </>
  );
};

export default Wiki;
