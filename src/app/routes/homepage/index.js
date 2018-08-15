import React, {Component} from 'react';

import Page from '../../components/page'
import ArticlesLatest from '../../workers/articles-latest';
import AnimatedHeading from '../../elements/animated-heading';

class Homepage extends Component {
  render() {

    return (
      <Page id="article" title="Home" description="xx" image="d">
        <AnimatedHeading type="h1" title="Home" loop={['R','E','N','D','A','H',' M','A','G','.']} />
        <ArticlesLatest {...this.props} padding="pt4  pb3" />
      </Page>
    );
  }
}

export default Homepage;
