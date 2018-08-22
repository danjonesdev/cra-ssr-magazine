import React, { Component } from 'react';

class Para extends Component {
  renderChildren = (child, i) => {
    if (child.marks) {
      if (child.marks.includes('stong') && child.marks.includes('em')) {
        return (
          <strong key={i} className="di">
            <em>{child.text}</em>
          </strong>
        );
      }
      if (child.marks.includes('strong')) {
        return (
          <strong key={i} className="di">
            {child.text}
          </strong>
        );
      }
      if (child.marks.includes('em')) {
        return (
          <em key={i} className="di">
            {child.text}
          </em>
        );
      }
    }

    return child.text;
  };

  render() {
    const { children } = this.props;

    if (children[0].text) {
      return (
        <React.Fragment>
          <p className="db  t-body  f6  black  pv3">
            {children.map((child, i) => this.renderChildren(child, i))}
          </p>
        </React.Fragment>
      );
    }
    return false;
  }
}

export default Para;
