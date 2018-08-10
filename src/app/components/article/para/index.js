import React, { Component } from 'react';

class Para extends Component {
  renderChildren = (child, i) => {
    if (child.text) {
      if (child.marks) {

        if (child.marks.includes('stong') && child.marks.includes('em')) {
          return <p key={i} className="di"><strong><em>{child.text}</em></strong></p>
        }
        if (child.marks.includes('strong')) {
          return <p key={i} className="di"><strong>{child.text}</strong></p>
        }
        if (child.marks.includes('em')) {
          return <p key={i} className="di"><em>{child.text}</em></p>
        }
      }

      return <p key={i} className="di">{child.text}</p>
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

export default Para;