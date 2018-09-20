import MobileDetect from 'mobile-detect';
import { createElement as el } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './store';
import 'font-awesome/css/font-awesome.css';
import './styles.css';
import './react-select.min.css';

window.md = new MobileDetect(window.navigator.userAgent);

render(
  el(Provider, { store }, el(App)),
  document.getElementById('root'),
);
