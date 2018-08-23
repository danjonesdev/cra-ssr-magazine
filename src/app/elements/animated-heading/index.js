import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';

class AnimatedHeading extends Component {
  heading = (title, headingType) => {
    switch (headingType) {
      case 'h1':
        return <h1 className="dn">{title}</h1>;
      case 'h2':
        return <h2 className="dn">{title}</h2>;
      case 'h3':
        return <h3 className="dn">{title}</h3>;
      case 'h4':
        return <h4 className="dn">{title}</h4>;
      case 'h5':
        return <h5 className="dn">{title}</h5>;
      case 'h6':
        return <h6 className="dn">{title}</h6>;
      default:
        return null;
    }
  };

  loopChars = (title, styles) => {
    let letters = [];
    for (let i = 0; i < title.length; i++) {
      letters.push(
        <span
          key={i}
          className={`${styles}  animatedHeading__letter  animatedHeading__letter--${i}`}
        >
          {title.charAt(i)}
        </span>
      );
    }
    return letters;
  };

  render() {
    const { headingType, title, styles, container, padding } = this.props;

    if (container) {
      return (
        <div className={`container-medium  mla  mra  tac  tal-md ${padding}`}>
          <div className="flex">
            <div className="col-12  ph4">
              {this.heading(title, headingType)}

              <LazyLoad height={100} offset={-100} once>
                {this.loopChars(title, styles)}
              </LazyLoad>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className={padding}>
          {this.heading(title, headingType)}

          <LazyLoad height={100} offset={-100} once>
            {this.loopChars(title, styles)}
          </LazyLoad>
        </div>
      );
    }
  }
}

export default AnimatedHeading;
