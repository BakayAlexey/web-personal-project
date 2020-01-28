import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'mobx-react';
import { stores } from './stores'
import { App } from './App';

ReactDom.render(
  <Provider {...stores}>
    <App />
  </Provider>, document.querySelector('#root'));
