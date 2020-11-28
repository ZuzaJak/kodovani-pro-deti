import React from 'react';
import { render } from 'react-dom';
import HomePage from './Pages/HomePage.jsx'
import WikiPage from './Pages/WikiPage.jsx';
import GamePage from './Pages/GamePage.jsx';
import LinksPage from './Pages/LinksPage.jsx';
import Nav from "./Nav/nav.jsx";
import Footer from "./Footer/footer.jsx";
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import style from "./style.css"
import index from "./index.html"

const App = () => (
    <Router>
    <Nav />
    <Switch>
      <Route path="/index">
        <HomePage />
      </Route>
      <Route path="/kodovaci-wikipedie">
        <WikiPage />
      </Route>
      <Route path="/vyzkousej-to">
        <GamePage />
      </Route>
      <Route path="/kam-dal">
        <LinksPage />
      </Route>
    </Switch>
    <Footer />
  </Router>
);
render(<App />, document.querySelector('#app'));
