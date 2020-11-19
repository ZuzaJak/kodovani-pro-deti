import React from 'react';
import WikiContentHead from './components/WikiContentHead';
import WikiContentSection from './components/WikiContentSection';
import './style.css';

const Wiki = () => {
  return (
    <>
    <main>
      <WikiContentHead />
      <WikiContentSection
        snippet="Code_snippet_01"
      />
    </main>
    </>
  );
};

export default Wiki;
