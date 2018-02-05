import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';
import RecomposedAccordion from './RecomposedAccordion/RecomposedAccordion';
import FuncChildrenPopup from './FuncChildrenPopup/FuncChildrenPopup';
import Counter from './Counter/Counter';
import './App.css';

const App = () => (
  <Router>
    <div className="App">
      <nav>
        <ul className="AppNavList">
          <li><Link to="/">Home</Link></li>
          /
          <li><Link to="/recomposed-accordion">Recomposed Accordion</Link></li>
          /
          <li><Link to="/func-children-popup">Functional Children</Link></li>
          /
          <li><Link to="/counter">Counter</Link></li>
        </ul>
      </nav>

      <hr />

      <Route exact path="/" component={() => 'home'} />
      <Route path="/recomposed-accordion" component={RecomposedAccordion} />
      <Route path="/func-children-popup" component={FuncChildrenPopup} />
      <Route path="/counter" component={Counter} />
    </div>
  </Router>
);

export default App;
