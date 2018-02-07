import React from 'react';
import 'loaders.css';
import './Loader.css';

const Loader = () => (
  <div className="LoaderWrapper">
    <div
      className="loader"
    >
      <div className="ball-clip-rotate-multiple">
        <div />
        <div />
      </div>
    </div>
  </div>
);

export default Loader;
