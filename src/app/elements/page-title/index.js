import React, { Component } from 'react';

class PageTitle extends Component {
  render() {
    const { title, loop } = this.props;

    return (
      <div className="container  mla  mra  tac">
        <h1 className="dn">{title}</h1>
        {loop.map((letter, i) => (
          <span key={i} className={`t-title  ttu  bold  f5  pageTitle__letter  pageTitle__letter--${i}`}>{letter}</span>
        ))}
      </div>
    );
  }
}

export default PageTitle;
