import React from 'react';
import { render } from 'react-dom';
import Header from './Header/index.jsx';
import './style.css';
import './index.html';

const App = () => {
  return <Header />;
};
render(<App />, document.querySelector('#app'));
