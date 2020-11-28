import React from 'react';
import './wiki_section.css';
import SyntaxHighlighter from 'react-syntax-highlighter';
import MouseOverPopoverHtml from '../PopoverHtml/popover';
import MouseOverPopoverCss from '../PopoverCss/popover';


const WikiContentSection = (language) => (props) => {
  return (
    <div className="wiki__sections">
      <div className="wiki__section">
        
        <h2 className="wiki__section-header">{props.header}</h2>
        <h3 className="wiki_section_subHeader">{props.subHeader}</h3>
        <p className="wiki__section-text">{props.text}</p>
      </div>
      
      <div className="wiki__section">
      <MouseOverPopoverHtml />
      <div className="wiki__section-border">
      <SyntaxHighlighter language={language} >{props.snippetText}</SyntaxHighlighter>
      </div>
      <MouseOverPopoverCss />
      </div>
      <div className="wiki__section" dangerouslySetInnerHTML={{__html: props.snippetText}}>
      </div>
    </div>
  );
};

export const HtmlWikiContentSection = WikiContentSection("html")
export const CssWikiContentSection = WikiContentSection("css")