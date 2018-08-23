import React, { Component } from 'react';

import Page from '../../components/page';
import AnimatedHeading from '../../elements/animated-heading';
// import ArticlesLatest from '../../reusable-workers/articles-latest';
import ArticlesGeneral from '../../reusable-workers/articles-general';

class Homepage extends Component {
  render() {
    return (
      <Page id="home" title="Home">
        <AnimatedHeading
          headingType="h1"
          title="Home"
          styles="t-title  ttu  bold  f5"
          container
          padding="pt4  mt2"
        />

        <ArticlesGeneral
          {...this.props}
          limitFrom={0}
          limitTo={24}
          type="grid"
          padding="pt2  pb3"
        />
      </Page>
    );
  }
}

export default Homepage;
