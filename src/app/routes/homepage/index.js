import React, {Component} from 'react';

import Page from '../../components/page'
import AnimatedHeading from '../../elements/animated-heading';
import ArticlesLatest from '../../workers/articles-latest';
import ArticlesGeneral from '../../workers/articles-general';

class Homepage extends Component {
  render() {

    return (
      <Page id="home" title="Home">
        <AnimatedHeading type="h1" title="Home" padding="pt4  mt2" fullWidth={true} styles="t-title  ttu  bold  f5  tac" />
        <ArticlesLatest {...this.props} padding="pt4  pb2" />
        <ArticlesGeneral {...this.props} padding="pt2  pb3" />
      </Page>
    );
  }
}

export default Homepage;
