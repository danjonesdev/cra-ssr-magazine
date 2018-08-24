import React, { Component } from 'react';

import Page from '../../components/page';
import AnimatedHeading from '../../elements/animated-heading';
// import ArticlesLatest from '../../reusable-workers/articles-latest';
import ArticlesCategory from '../../reusable-workers/articles-category';

class Homepage extends Component {
  render() {
    return (
      <Page id="home" title="Home">
        <AnimatedHeading
          headingType="h1"
          title="Category"
          styles="t-title  ttu  bold  f5"
          container
          padding="pt4  mt2"
        />

      <ArticlesCategory
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
