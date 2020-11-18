import React from 'react';
import { render } from 'react-dom';
import Header from './Header/index.jsx';
import Wiki from './Wiki/index.jsx';

import './style.css';
import './index.html';

const App = () => (
  <>
    <Header />
    <Wiki />
  </>
);
render(<App />, document.querySelector('#app'));
