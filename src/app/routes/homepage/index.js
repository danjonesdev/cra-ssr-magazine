import React, {Component} from 'react';

import Page from '../../components/page'
import ArticlesLatest from '../../workers/articles-latest';
import PageTitle from '../../elements/page-title';

class Homepage extends Component {
  render() {

    return (
      <Page id="article" title="Home" description="xx" image="d">
        <PageTitle title="Home" loop={['R','E','N','D','A','H',' M','A','G','.']} />
        <ArticlesLatest {...this.props} padding="pt4  pb3" />
      </Page>
    );
  }
}

export default Homepage;
