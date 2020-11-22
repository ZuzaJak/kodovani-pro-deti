import React from 'react';
import WikiContentHead from './components/WikiContentHead/wiki_head.jsx';
import WikiContentSection from './components/WikiContentSection/wiki_section.jsx';
// import snippet from './components/WikiContentSection/index.jsx';

const Wiki = () => {
  return (
    <div id="wiki">
      <main>
        <WikiContentHead />
        <WikiContentSection /* snippet={snippet} */ />
      </main>
    </div>
  );
};

export default Wiki;
