import React, { Component } from 'react';

class Bullet extends Component {
  renderChildren = (child, i) => {
    if (child.text) {
      if (child.marks) {

        if (child.marks.includes('stong') && child.marks.includes('em')) {
          return <li key={i} className="di  t-body  f6  black  pb1"><strong><em>{child.text}</em></strong></li>
        }
        if (child.marks.includes('strong')) {
          return <li key={i} className="di  t-body  f6  black  pb1"><strong>{child.text}</strong></li>
        }
        if (child.marks.includes('em')) {
          return <li key={i} className="di  t-body  f6  black  pb1"><em>{child.text}</em></li>
        }
      }

      return <li key={i} className="db  t-body  f6  black  pb1">{child.text}</li>
    }

    return false;
  }

  render() {
    const { children } = this.props;

    return (
      <React.Fragment>
        {children.map((child, i) => (
          this.renderChildren(child, i)
        ))}
      </React.Fragment>
    );
  }
}

export default Bullet;
