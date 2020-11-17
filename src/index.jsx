import React from 'react';
import { render } from 'react-dom';
import Home from './Home/index.jsx';
import './style.css';
import './index.html';

const App = () => {
  return <Home />;
};
render(<App />, document.querySelector('#app'));
