import React from 'react';
import { render } from 'react-dom';
<<<<<<< HEAD
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
=======
import Header from './Header/index.jsx';
import './style.css';
import './index.html';

const App = () => {
  return <Header />;
};
>>>>>>> c56c22a69c4455904f6d1818aa0fd495a939ddd6
render(<App />, document.querySelector('#app'));
