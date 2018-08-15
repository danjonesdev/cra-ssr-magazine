import React, { Component } from 'react';

class MainImage extends Component {
  render() {
    const { mainImage, alt, padding } = this.props;

    return (
      <React.Fragment>
        <div className={`rel  ${padding}`}>
          <figure className="rel  article__hero">
            <div className="fadeIn-zoomIn  w-100  article__hero--bg" style={{ backgroundImage: `url(${mainImage})` }} />
          </figure>
          <div className="over-hidden">
            <img className="fadeIn-zoomIn  shadow2  abs  article__hero--img" alt={alt} src={mainImage} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default MainImage;
