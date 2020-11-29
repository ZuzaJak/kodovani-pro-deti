import React from 'react';
import './wiki_section.css';
import SyntaxHighlighter from 'react-syntax-highlighter';
import MouseOverPopoverHtml from '../PopoverHtml/popover';
import MouseOverPopoverCss from '../PopoverCss/popover';

const WikiContentSection = (language) => (props) => {
  return (
    <div className="wiki__sections">
      <div className="wiki__section1">
        <h2 className="wiki__section1-header">{props.header}</h2>
        <h3 className="wiki_section1_subHeader">{props.subHeader}</h3>
        <p className="wiki__section1-text">{props.text}</p>
      </div>
      <div className="wiki__section2">
        <div className="wiki__section2-item">
          <MouseOverPopoverHtml />
          <div className="wiki__section2-border">
            <SyntaxHighlighter language={language}>
              {props.snippetText}
            </SyntaxHighlighter>
          </div>
<<<<<<< HEAD
        </div>
        <div className="wiki__section2-item">
          <MouseOverPopoverCss />
          <div dangerouslySetInnerHTML={{ __html: props.snippetText }}></div>
        </div>
=======
        </div>
        <MouseOverPopoverCss />
        <div
          className="wiki__section2-item"
          dangerouslySetInnerHTML={{ __html: props.snippetText }}
        ></div>

>>>>>>> e4144b2106c6f522d138b68aaf0f6d5c8dab6b46
      </div>
    </div>
  );
};

export const HtmlWikiContentSection = WikiContentSection('html');
export const CssWikiContentSection = WikiContentSection('css');
