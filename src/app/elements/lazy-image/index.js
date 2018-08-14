import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';

class LazyImage extends Component {
  render() {
    const { src, alt, styles } = this.props;

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
}

export default LazyImage;
