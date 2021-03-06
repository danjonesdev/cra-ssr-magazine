import React, { Component } from 'react';

import Page from '../../components/page';
import AnimatedHeading from '../../elements/animated-heading';
import AuthorsWorker from '../../reusable-workers/authors';

class Authors extends Component {
  render() {
    return (
      <Page id="authors" title="Authors">
        <AnimatedHeading
          headingType="h1"
          title="Authors"
          styles="t-title  ttu  bold  f5"
          container
          padding="pt4  mt2"
        />

        <AuthorsWorker {...this.props} padding="pt4  pb2" />
      </Page>
    );
  }
}

export default Authors;
