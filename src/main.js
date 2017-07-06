require('es6-promise').polyfill();

import React from 'react';

import ReactDOM from 'react-dom';

import routes from './routes';
import render, {
  setupReducers,
    applyMiddleware,
  replaceReducers,
} from '@sketchpixy/rubix/lib/node/redux-router';

import promise from 'redux-promise';
import createLogger from 'redux-logger';
const logger = createLogger();
import reducers from './redux/reducers';

setupReducers(reducers);
applyMiddleware(promise, logger);
render(routes);

if (module.hot) {
  module.hot.accept('./routes', () => {
    // reload routes again
    require('./routes').default;
    render(routes);
  });

  module.hot.accept('./redux/reducers', () => {
    // reload reducers again
    let newReducers = require('./redux/reducers');
    replaceReducers(newReducers);
  });
}
