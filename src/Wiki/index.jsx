import React from 'react';
import WikiContentHead from './components/WikiContentHead/index.jsx';
import WikiContentSection from './components/WikiContentSection/index.jsx';
import { snippet } from './components/WikiContentSection/index.jsx';
import './style.css';

const Wiki = () => {
  return (
    <div id="wiki">
      <main>
        <WikiContentHead />
        <WikiContentSection snippet />
      </main>
    </div>
  );
};

export default Wiki;
