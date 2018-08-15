import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';

class AnimatedImage extends Component {
  render() {
    const { lazy, src, alt, styles } = this.props;

    if (lazy) {
      return (
        <React.Fragment>
          <LazyLoad height={200} offset={100} once>
            <div className="over-hidden">
              <img className={`fadeIn-zoomIn  objf-cover  objp-center  ${styles}`} src={src} alt={alt}/>
            </div>
          </LazyLoad>
        </React.Fragment>
      );
    }

    return (
      <React.Fragment>
        <div className="over-hidden">
          <img className={`fadeIn-zoomIn  objf-cover  objp-center  ${styles}`} src={src} alt={alt}/>
        </div>
      </React.Fragment>
    );
  }
}

export default AnimatedImage;
