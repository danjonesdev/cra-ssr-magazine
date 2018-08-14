import React, { Component } from 'react';
import LazyImg from '../../elements/lazy-image'

class ArticlesLatestComponent extends Component {
  render() {
    const { items } = this.props;

    return (
      <React.Fragment>
        {items.map((item, i) => (
          <div>
            <LazyImg src="http://via.placeholder.com/350x150"  alt="" />
            <p>{item.title}</p>
          </div>
        ))}
      </React.Fragment>
    );
  }
}

export default ArticlesLatestComponent;
