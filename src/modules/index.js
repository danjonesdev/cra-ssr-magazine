import { combineReducers } from 'redux';

import auth from './auth';
import article from './article';
import {default as articlesLatest} from './articles-latest';
import {default as articlesGeneral} from './articles-general';

export default combineReducers({
  auth,
  article,
  articlesLatest,
  articlesGeneral
});
