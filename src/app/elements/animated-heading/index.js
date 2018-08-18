import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';

class AnimatedHeading extends Component {
  heading = (title, type) => {
    switch (type) {
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
  }

  loopChars = (title, styles) => {
    let letters = []
    for (let i = 0; i < title.length; i++) {
      letters.push(
        <span key={i} className={`${styles}  animatedHeading__letter  animatedHeading__letter--${i}`}>{title.charAt(i)}</span>
      );
    }
    return letters;
  }

  render() {
    const { type, title, padding, styles } = this.props;

    return (
      <div className={`container-medium  mla  mra  tac  tal-md  ${padding}`}>
        {this.heading(title, type)}

        <LazyLoad height={100} offset={-100} once>
          {this.loopChars(title, styles)}
        </LazyLoad>
      </div>
    );
  }
}

export default AnimatedHeading;
