import React, { Component } from 'react';

import AnimatedImage from '../../elements/animated-image';
import AnimatedHeading from '../../elements/animated-heading';

class Author extends Component {
  render() {
    const { profile } = this.props;
    const { padding } = this.props;

    console.log(profile);
    return (
      <section className={`container-small  mla  mra  ${padding}`}>
        <div className="flex  flex-wrap  ph3">
          <div className="col-24  col-6-sm  col-5-md  pb4  pb0-sm">
            <AnimatedImage
              lazy
              src={profile.image}
              alt={profile.name}
              styles="trans-all-1  w4  br-100  center"
            />
          </div>
          <div className="col-24  col-18-sm  col-19-md  flex  flex-column  justify-center  pb4  pb0-sm">
            <AnimatedHeading
              headingType="h1"
              title={profile.name}
              styles="t-title  ttu  bold  f5"
              container={false}
              padding="pt2  pb2"
            />
            <p className="t-body  black  f7  f6-sm">{profile.description}</p>
          </div>
        </div>
      </section>
    );
  }
}

export default Author;
