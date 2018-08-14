import React, { Component } from 'react';

class ArticleList extends Component {
  render() {
    const { items } = this.props;

    return (
      <React.Fragment>
        {items.map((item, i) => (
          <p>{item.title}</p>
        ))}
      </React.Fragment>
    );
  }
}

export default ArticleList;
