import React, {Component} from 'react';

import Page from '../../components/page'
import AnimatedHeading from '../../elements/animated-heading';
import AuthorsWorker from '../../workers/authors';

class Authors extends Component {
  render() {

    return (
      <Page id="article" title="Home" description="xx" image="d">
        <AnimatedHeading type="h1" title="Authors" padding="pt4  mt2" fullWidth={true} styles="t-title  ttu  bold  f5  tac" />
        <AuthorsWorker {...this.props} padding="pt2  pb3" />
      </Page>
    );
  }
}

export default Authors;
