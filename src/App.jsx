import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import Accordion from './components/Accordion/Accordion';
import Popup from './components/Popup/Popup';

class App extends Component {
  componentDidMount() {
    console.log(this.state);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Accordion>
          <b>lorem ipsum</b>
        </Accordion>
        <Popup>
          {({ expanded, toggle }) => (
            <Fragment>
              <button onClick={toggle}>Show popup</button>
              {expanded && (
                <div className="PopupWindow">
                  abcdef ghiedads
                </div>
              )}
            </Fragment>
          )}
        </Popup>
      </div>
    );
  }
}

export default App;
