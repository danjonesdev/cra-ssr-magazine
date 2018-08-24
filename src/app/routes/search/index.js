import React, { Component } from 'react';

import Page from '../../components/page';
import AnimatedHeading from '../../elements/animated-heading';
// import ArticlesLatest from '../../reusable-workers/articles-latest';
import ArticlesSearch from '../../reusable-workers/articles-search';

class Search extends Component {
  render() {
    const searchQuery = this.props.match.params.id;

    return (
      <Page id="home" title="Home">
        <AnimatedHeading
          headingType="h1"
          title={`Search reuslts for '${searchQuery}'`}
          styles="t-title  ttu  bold  f5"
          container
          padding="pt4  mt2"
        />

        <ArticlesSearch
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

export default Search;
