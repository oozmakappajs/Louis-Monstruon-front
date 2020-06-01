import React from 'react';
import { render } from 'react-dom';

import { Provider } from './Context';
import reducer from './reducers/index';
import App from './App';

const container = document.getElementById('app');

render(
  <Provider reducer={reducer}>
    <App />
  </Provider>,
  container,
);
