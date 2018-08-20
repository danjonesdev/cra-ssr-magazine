import React, {Component} from 'react';

import Page from '../../components/page'
import AnimatedHeading from '../../elements/animated-heading';
import ArticlesLatest from '../../reusable-workers/articles-latest';
import ArticlesGeneral from '../../reusable-workers/articles-general';

class Homepage extends Component {
  render() {

    return (
      <Page id="home" title="Home">
        <AnimatedHeading type="h1" title="Home" padding="pt4  mt2" styles="t-title  ttu  bold  f5" />
        <ArticlesLatest {...this.props} padding="pt4  pb2" />
        <ArticlesGeneral {...this.props} padding="pt2  pb3" />
      </Page>
    );
  }
}

export default Homepage;
