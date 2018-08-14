import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';

class LazyImage extends Component {
  render() {
    const { src, alt } = this.props;

    return (
      <React.Fragment>
        <LazyLoad height={200} offset={100} once>
          <img src={src} alt={alt}/>
        </LazyLoad>
      </React.Fragment>
    );
  }
}

export default LazyImage;
