import React from 'react';
import { render } from 'react-dom';
import Header from './Header/index.jsx';
import Wiki from './Wiki/index.jsx';
import Nav from './Nav/index.jsx';
import About from './About/index.jsx';
import Links from './Links/index.jsx';

import './style.css';
import './index.html';

const App = () => (
  <>
    <Nav />
    <Header />
    <About />
    <Wiki />
    <Links />
  </>
);
render(<App />, document.querySelector('#app'));
