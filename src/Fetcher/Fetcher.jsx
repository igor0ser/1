import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Fetcher1 from './Fetcher1/Fetcher1';
import Fetcher2 from './Fetcher2/Fetcher2';
import Fetcher3 from './Fetcher3/Fetcher3';
import Fetcher4 from './Fetcher4/Fetcher4';
import Fetcher5 from './Fetcher5/Fetcher5';
import Nav from '../Nav/Nav';
import './Fetcher.css';

const Fetcher = () => (
  <div className="Fetcher">
    <h1>Different types of fetching data.</h1>
    <Nav links={[
          { to: '/fetcher/fetcher1', text: 'Fetcher1' },
          { to: '/fetcher/fetcher2', text: 'Fetcher2' },
          { to: '/fetcher/fetcher3', text: 'Fetcher3' },
          { to: '/fetcher/fetcher4', text: 'Fetcher4' },
          { to: '/fetcher/fetcher5', text: 'Fetcher5' },
        ]}
    />
    <Switch>
      <Route path="/fetcher/fetcher1" component={Fetcher1} />
      <Route path="/fetcher/fetcher2" component={Fetcher2} />
      <Route path="/fetcher/fetcher3" component={Fetcher3} />
      <Route path="/fetcher/fetcher4" component={Fetcher4} />
      <Route path="/fetcher/fetcher5" component={Fetcher5} />
    </Switch>
  </div>
);


export default Fetcher;
