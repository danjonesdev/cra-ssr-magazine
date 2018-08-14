import React, {Component} from 'react';

import Page from '../../components/page'
import ArticlesLatest from '../../workers/articles-latest';

class Homepage extends Component {
  render() {
    return (
      <Page id="article" title="scu" description="xx" image="d">
        <ArticlesLatest {...this.props} />
      </Page>
    );
  }
}

export default Homepage;
