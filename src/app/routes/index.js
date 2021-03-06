import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';

import NotFound from './not-found';

const Homepage = Loadable({
  loader: () => import(/* webpackChunkName: "homepage" */ './homepage'),
  loading: () => <p>TESSSSSSSSSSt</p>,
  modules: ['homepage'],
});

const Category = Loadable({
  loader: () => import(/* webpackChunkName: "category" */ './category'),
  loading: () => <p>TESSSSSSSSSSt</p>,
  modules: ['category'],
});

const About = Loadable({
  loader: () => import(/* webpackChunkName: "about" */ './about'),
  loading: () => <p>TESSSSSSSSSSt</p>,
  modules: ['about'],
});

const Authors = Loadable({
  loader: () => import(/* webpackChunkName: "authors" */ './authors'),
  loading: () => <p>TESSSSSSSSSSt</p>,
  modules: ['authors'],
});

const Author = Loadable({
  loader: () => import(/* webpackChunkName: "author" */ './author'),
  loading: () => <p>TESSSSSSSSSSt</p>,
  modules: ['author'],
});

const Article = Loadable({
  loader: () => import(/* webpackChunkName: "article" */ './article'),
  loading: () => <p>TESSSSSSSSSSt</p>,
  modules: ['article'],
});

const Search = Loadable({
  loader: () => import(/* webpackChunkName: "search" */ './search'),
  loading: () => <p>TESSSSSSSSSSt</p>,
  modules: ['search'],
});

export default () => (
  <Switch>
    <Route exact path="/" component={Homepage} />
    <Route exact path="/category/:id" component={Category} />
    <Route exact path="/about" component={About} />
    <Route exact path="/authors" component={Authors} />
    <Route exact path="/author/:id" component={Author} />
    <Route exact path="/article/:id" component={Article} />
    <Route exact path="/search/:id" component={Search} />
    <Route component={NotFound} />
  </Switch>
);
