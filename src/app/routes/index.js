import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';

import NotFound from './not-found';

const Homepage = Loadable({
  loader: () => import(/* webpackChunkName: "homepage" */ './homepage'),
  loading: () => <p>TESSSSSSSSSSt</p>,
  modules: ['homepage']
});

const About = Loadable({
  loader: () => import(/* webpackChunkName: "about" */ './about'),
  loading: () => <p>TESSSSSSSSSSt</p>,
  modules: ['about']
});

const Authors = Loadable({
  loader: () => import(/* webpackChunkName: "authors" */ './authors'),
  loading: () => <p>TESSSSSSSSSSt</p>,
  modules: ['authors']
});

const Profile = Loadable({
  loader: () => import(/* webpackChunkName: "article" */ './article'),
  loading: () => <p>TESSSSSSSSSSt</p>,
  modules: ['article']
});

export default () => (
  <Switch>
    <Route exact path="/" component={Homepage} />
    <Route exact path="/about" component={About} />
    <Route exact path="/authors" component={Authors} />
    <Route exact path="/article/:id" component={Profile} />
    <Route component={NotFound} />
  </Switch>
);
