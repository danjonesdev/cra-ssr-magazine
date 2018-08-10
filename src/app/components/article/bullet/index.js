import React, { Component } from 'react';

class Bullet extends Component {
  renderChildren = (child, i) => {
    if (child.text) {
      if (child.marks) {

        if (child.marks.includes('stong') && child.marks.includes('em')) {
          return <li key={i} className="di"><strong><em>{child.text}</em></strong></li>
        }
        if (child.marks.includes('strong')) {
          return <li key={i} className="di"><strong>{child.text}</strong></li>
        }
        if (child.marks.includes('em')) {
          return <li key={i} className="di"><em>{child.text}</em></li>
        }
      }

      return <li key={i} className="di">{child.text}</li>
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
