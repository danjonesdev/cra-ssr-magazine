import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';

class AnimatedHeading extends Component {
  heading = (type, title) => {
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
  render() {
    const { type, title, loop } = this.props;

    return (
      <div className="container  mla  mra  tac">
        {this.heading(type, title)}

        <LazyLoad height={100} offset={-100} once>
          {loop.map((letter, i) => (
            <span key={i} className={`t-title  ttu  bold  f5  animatedHeading__letter  animatedHeading__letter--${i}`}>{letter}</span>
          ))}
        </LazyLoad>
      </div>
    );
  }
}

export default AnimatedHeading;
