import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Fetcher1 from './Fetcher1/Fetcher1';
import Fetcher2 from './Fetcher2/Fetcher2';
import Nav from '../Nav/Nav';
import './Fetcher.css';

const Fetcher = () => (
  <div className="Fetcher">
    <h1>Different types of fetching data.</h1>
    <Nav links={[
          { to: '/fetcher/fetcher1', text: 'Fetcher1' },
          { to: '/fetcher/fetcher2', text: 'Fetcher2' },
        ]}
    />
    <Switch>
      <Route path="/fetcher/fetcher1" component={Fetcher1} />
      <Route path="/fetcher/fetcher2" component={Fetcher2} />
    </Switch>
  </div>
);


export default Fetcher;
