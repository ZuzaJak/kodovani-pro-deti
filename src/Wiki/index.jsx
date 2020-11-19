import React from 'react';
import WikiContentHead from './components/WikiContentHead/index.jsx';
import WikiContentSection from './components/WikiContentSection/index.jsx';
import snippet from '../img/snippet/Code_snippet_01.svg';
import './style.css';

const Wiki = () => {
  return (
    <>
      <main>
        <WikiContentHead />
        <WikiContentSection snippet />
      </main>
    </>
  );
};

export default Wiki;
