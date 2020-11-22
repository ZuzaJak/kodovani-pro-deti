import React from 'react';
import './wiki_section.css';
import snippet from '../../../img/snippet/Code_snippet_01.svg';

const WikiContentSection = (props) => {
  return (
    <div className="wiki__sections">
      <div className="wiki__section">
        <h2 className="wiki__section-header">&lt;HTML&gt; </h2>
        <h3 className="wiki_section_subHeader">LOREM IPSUM</h3>
        <p className="wiki__section-text">
          Je to zkratka z anglického "Hypertext Markup Language", česky říkáme
          značkovací jazyk. HTML je taková kostra webové stránky. Skládá se z
          takzvaných tagů (značek), které se píší pomocí špičatých závorek
          {'<>'}. Tagů je velké množství, na této stránce si ukážeme ty základní
          a nejdůležitější.
        </p>
      </div>
      <div className="wiki__section">
        <img src={snippet} className="wiki__snippet" alt="obrazek HTML kod" />
      </div>
      <div className="wiki__section">
        <img src={snippet} className="wiki__snippet" alt="obrazek HTML kod" />
      </div>
    </div>
  );
};

export default WikiContentSection;
