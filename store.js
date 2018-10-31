
import {
  combineReducers,
  createStore,
  applyMiddleware
} from 'redux';

import {
  composeWithDevTools
} from 'redux-devtools-extension';

import Logger from 'redux-logger';
import Promise from 'redux-promise-middleware';
import Thunk from 'redux-thunk';

import Common from './reducers/common';
import Language from './reducers/language';

export default () => createStore(
  combineReducers({
    Common,
    Language
  }),
  {},
  composeWithDevTools(
    applyMiddleware(
      Thunk,
      Logger,
      Promise()
    )
  )
)
