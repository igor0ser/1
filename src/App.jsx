import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Nav from './Nav/Nav';
import RecomposedAccordion from './RecomposedAccordion/RecomposedAccordion';
import FuncChildrenPopup from './FuncChildrenPopup/FuncChildrenPopup';
import Counter from './Counter/Counter';
import Fetcher from './Fetcher/Fetcher';
import './App.css';

const App = () => (
  <BrowserRouter>
    <div className="App">
      <Nav
        links={[
          { to: '/', text: 'Home' },
          { to: '/recomposed-accordion', text: 'Recomposed Accordion' },
          { to: '/func-children-popup', text: 'Functional Children' },
          { to: '/counter', text: 'Counter' },
          { to: '/fetcher', text: 'Fetcher' },
        ]}
      />
      <Switch>
        <Route exact path="/" component={() => 'home'} />
        <Route path="/recomposed-accordion" component={RecomposedAccordion} />
        <Route path="/func-children-popup" component={FuncChildrenPopup} />
        <Route path="/counter" component={Counter} />
        <Route path="/fetcher" component={Fetcher} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
