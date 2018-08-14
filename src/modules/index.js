import { combineReducers } from 'redux';

import auth from './auth';
import article from './article';
import {default as articlesLatest} from './articles-latest';

export default combineReducers({
  auth,
  article,
  articlesLatest
});
