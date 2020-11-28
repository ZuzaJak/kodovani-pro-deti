
import React from 'react';
import WikiContentHead from './components/WikiContentHead/wiki_head.jsx';
import WikiContentSection from './components/WikiContentSection/wiki_section.jsx';
// import snippet from './components/WikiContentSection/index.jsx';
import WikiContentNavigation from './components/WikiContentNavigation/wiki_navigation.jsx';
import WikiContentTabPanel from "./components/WikiContentTabPanel/WikiTabPanel.jsx";
import WikiContentTabList from "./components/WikiContentTabList/WikiContentTabList.jsx";

import { Button } from '@material-ui/core';


const Wiki = () => {
  return (
    <>
      <div id="wiki">
        <main>
          <WikiContentHead />
          <WikiContentNavigation />
          <Button />
          <WikiContentTabPanel />
          <WikiContentTabList />
          <WikiContentSection /* snippet={snippet} */ />
          
        </main>
      </div>
    </>
  );
};

export default Wiki;
