import React, { Component } from 'react';

import AnimatedImage from '../../../elements/animated-image';

class MainImage extends Component {
  render() {
    const { mainImage, alt, padding } = this.props;

    return (
      <React.Fragment>
        <figure className={`rel  ${padding}`}>
          <div className="z0  abs  article__hero__bg">
        		<div className="z0  w-100  h-100" style={{ backgroundImage: `url(${mainImage})` }} />
        	</div>
          <div className="pt4">
            <AnimatedImage lazy={false} src={mainImage} alt={alt} styles="mla  mra  article__hero__img" />
          </div>
        </figure>
      </React.Fragment>
    );
  }
}

export default MainImage;
