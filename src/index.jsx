import React from 'react';
import { render } from 'react-dom';
import Home from './Home/index.jsx';
import Wiki from './Wiki/index.jsx';

import './style.css';
import './index.html';

const App = () => (
  <>
    <Home />
    <Wiki />
  </>
)
render(<App />, document.querySelector('#app'));
