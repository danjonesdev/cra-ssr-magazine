import React, {Component} from 'react';

import Page from '../../components/page'
import AnimatedHeading from '../../elements/animated-heading';
import ArticlesCategory from '../../workers/articles-category';

class Category extends Component {
  render() {
    const categoryTitle = this.props.match.params.id.replace(/^\w/, c => c.toUpperCase());

    return (
      <Page id="category" title={categoryTitle}>
        <AnimatedHeading type="h1" title={this.props.match.params.id} padding="pt4  mt2" styles="t-title  ttu  bold  f5" />
        <ArticlesCategory {...this.props} padding="pt4  pb2" />
      </Page>
    );
  }
}

export default Category;
