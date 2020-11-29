import React from 'react';
import './wiki_section.css';
import SyntaxHighlighter from 'react-syntax-highlighter';


const WikiContentSection = (language) => (props) => {
  return (
    <>
    <div className="wiki__sections">
      <div className="wiki__section1">
        <h2 className="wiki__section1-header">{props.header}</h2>
        <h3 className="wiki_section1_subHeader">{props.subHeader}</h3>
        <p className="wiki__section1-text">{props.text}</p>
      </div>
      <div className="wiki__section2">
        <div className="wiki__section2-item">
          <div className="wiki__section2-border">
            <SyntaxHighlighter language={language}>
              {props.snippetText}
            </SyntaxHighlighter>
          </div>
        </div>
        <div className="wiki__section2-item">
          <div className="wiki__section3-border">
            <div dangerouslySetInnerHTML={{ __html: props.snippetText }}></div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export const HtmlWikiContentSection = WikiContentSection('html');
export const CssWikiContentSection = WikiContentSection('css');
