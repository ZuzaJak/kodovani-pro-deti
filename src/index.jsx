import React from 'react';
import { render } from 'react-dom';
import Header from './Header/header.jsx';
import About from './About/about.jsx';
import Wiki from './Wiki/wiki.jsx';
import Nav from './Nav/nav.jsx';
import Links from './Links/links.jsx';
import Footer from './Footer/footer.jsx';
import './style.css';
import './index.html';

const App = () => (
  <>
    <Nav />
    <Header />
    <About />
    <Wiki />
    <Links />
    <Footer />
  </>
);
render(<App />, document.querySelector('#app'));
