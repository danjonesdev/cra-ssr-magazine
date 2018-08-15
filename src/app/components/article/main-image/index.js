import React, { Component } from 'react';

import AnimatedImage from '../../../elements/animated-image';

class MainImage extends Component {
  render() {
    const { mainImage, alt, padding } = this.props;

    return (
      <React.Fragment>
        <div className={`rel  ${padding}`}>
          <div className="article__hero__bg  abs">
        		<div className="w-100  h-100" style={{ backgroundImage: `url(${mainImage})` }} />
        	</div>
          <div className="pt4">
            <AnimatedImage lazy={false} src={mainImage} alt={alt} styles="article__hero__img  mla  mra" />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default MainImage;
