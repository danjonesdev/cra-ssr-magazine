import { combineReducers } from 'redux';

import auth from './auth';
import article from './article';
import { default as articlesLatest } from './articles-latest';
import { default as articlesGeneral } from './articles-general';
import { default as articlesSearch } from './articles-search';
import { default as category } from './category';
import { default as authors } from './authors';
import author from './author';

export default combineReducers({
  auth,
  article,
  articlesLatest,
  articlesGeneral,
  articlesSearch,
  authors,
  category,
  author,
});
