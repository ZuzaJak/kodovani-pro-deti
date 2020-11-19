import React from 'react';
import snippet from '../../../img/snippet/Code_snippet_01.svg';
import './style.css';

const WikiContentSection = (props) => {
  return (
    <div className="wiki__sections">
      <div className="wiki__section">
        <h2 className="wiki__section-header">&lt;HTML&gt; </h2>
        <h3 className="wiki_section_subHeader">LOREM IPSUM</h3>
        <p className="wiki__section-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </p>
      </div>
      <div className="wiki__section">
        <img
          src={props.snippet}
          className="wiki__snippet"
          alt="obrazek HTML kod"
        />
      </div>
      <div className="wiki__section">
        <img
          src={props.snippet}
          className="wiki__snippet"
          alt="obrazek HTML kod"
        />
      </div>
    </div>
  );
};

export default WikiContentSection;
