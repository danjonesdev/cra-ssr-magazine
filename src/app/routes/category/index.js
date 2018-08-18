import React, {Component} from 'react';

import Page from '../../components/page'
import AnimatedHeading from '../../elements/animated-heading';
import ArticlesCategory from '../../workers/articles-category';

class Category extends Component {
  render() {

    return (
      <Page id="article" title="Home" description="xx" image="d">
        <AnimatedHeading type="h1" title="Category" padding="pt4  mt2" fullWidth={true} styles="t-title  ttu  bold  f5  tac" />
        <ArticlesCategory {...this.props} padding="pt4  pb2" />
      </Page>
    );
  }
}

export default Category;
