import { combineReducers } from 'redux';

import auth from './auth';
import article from './article';
import articles from './articles';

export default combineReducers({
  auth,
  article,
  articles
});
