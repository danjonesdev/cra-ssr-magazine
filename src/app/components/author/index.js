import React, { Component } from 'react';

import AnimatedHeading from '../../elements/animated-heading';

class Author extends Component {
  render() {
    const { profile } = this.props;
    const { padding } = this.props;

    console.log(profile);
    return (
      <section className={`container-medium  mla  mra  ${padding}`}>
        <div className="flex  flex-wrap">
          <AnimatedHeading type="h1" title={profile.name} padding="" fullWidth={true} styles="t-title  ttu  bold  f5  tac" />
        </div>
      </section>
    );
  }
}

export default Author;
