import { createElement as el } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import 'font-awesome/css/font-awesome.css';
import './styles.css';
import App from './App';
import store from './duck';

render(
  el(Provider, { store }, el(App)),
  document.getElementById('root'),
);

