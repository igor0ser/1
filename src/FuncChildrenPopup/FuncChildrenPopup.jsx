import React, { Fragment } from 'react';
import Popup from './Popup/Popup';

const FuncChildrenPopup = () => (
  <div>
    <h1>Popup with children as function</h1>
    <Popup>
      {toggle => (
        <Fragment>
          <button onClick={toggle}>x</button>
          <p>lorem ipsum</p>
        </Fragment>
      )}
    </Popup>
  </div>
);

export default FuncChildrenPopup;
